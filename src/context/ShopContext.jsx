import React, { createContext, useState, useContext, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../data/mockData';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    // 1. Initialize State with Lazy Loading from LocalStorage (Robust Persistence)
    const [products, setProducts] = useState(() => {
        const stored = localStorage.getItem('mediCareProducts');
        let initialProducts = stored ? JSON.parse(stored) : MOCK_PRODUCTS;

        // Ensure all products have a 'stock' property (migration for existing data)
        initialProducts = initialProducts.map(p => ({
            ...p,
            stock: p.stock !== undefined ? p.stock : (p.inStock ? 50 : 0)
        }));

        return initialProducts;
    });

    // Lazy init for cart to prevent empty flash
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('mediCareCart');
        return stored ? JSON.parse(stored) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem('mediCareWishlist');
        return stored ? JSON.parse(stored) : [];
    });

    const [orders, setOrders] = useState(() => {
        const stored = localStorage.getItem('mediCareOrders');
        return stored ? JSON.parse(stored) : [];
    });

    const [prescriptions, setPrescriptions] = useState(() => {
        const stored = localStorage.getItem('mediCarePrescriptions');
        return stored ? JSON.parse(stored) : [];
    });

    // 2. Persist to LocalStorage whenever state changes
    useEffect(() => {
        // We don't sync back to MOCK_PRODUCTS to avoid overwriting local changes with file resets
        // if (products !== MOCK_PRODUCTS) setProducts(MOCK_PRODUCTS); 
    }, []);

    useEffect(() => {
        localStorage.setItem('mediCareProducts', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('mediCareCart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('mediCareWishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('mediCareOrders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('mediCarePrescriptions', JSON.stringify(prescriptions));
    }, [prescriptions]);


    // 3. CRITICAL FIX: Immutable addToCart with STOCK CHECK
    const addToCart = (product, quantity = 1) => {
        const currentStock = products.find(p => p.id === product.id)?.stock || 0;

        // Check if user already has some in cart
        const existingCartItem = cart.find(item => item.id === product.id);
        const currentCartQty = existingCartItem ? existingCartItem.quantity : 0;

        if (currentCartQty + quantity > currentStock) {
            alert(`Sorry, only ${currentStock} items available in stock!`);
            return;
        }

        setCart((prevCart) => {
            let newCart;
            if (existingCartItem) {
                // Return a new array with updated item
                newCart = prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Return a new array with new item
                newCart = [...prevCart, { ...product, quantity: quantity }];
            }
            console.log("Cart Updated:", newCart);
            return newCart;
        });
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart(prev => prev.map(item => {
            if (item.id === productId) {
                const product = products.find(p => p.id === productId);
                const maxStock = product?.stock || 0;

                // Ensure strict number type
                let qty = parseInt(newQuantity, 10);

                // Boundaries
                if (isNaN(qty) || qty < 1) qty = 1;
                if (qty > maxStock) {
                    alert(`Cannot add more! Only ${maxStock} available.`);
                    qty = maxStock;
                }

                return { ...item, quantity: qty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev.filter(item => item.id !== product.id);
            return [...prev, product];
        });
    };

    const placeOrder = (userId, userAddress) => {
        if (cart.length === 0) return null;

        const newOrder = {
            id: "ORD-" + Date.now(),
            userId,
            date: new Date().toISOString(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: 'Pending',
            deliveryAddress: userAddress
        };

        // DECREMENT STOCK
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(p => {
                const cartItem = cart.find(c => c.id === p.id);
                if (cartItem) {
                    const newStock = Math.max(0, p.stock - cartItem.quantity);
                    return { ...p, stock: newStock, inStock: newStock > 0 };
                }
                return p;
            });
            return updatedProducts;
        });

        setOrders(prev => [newOrder, ...prev]);
        clearCart();
        return newOrder;
    };

    const updateOrderStatus = (orderId, newStatus) => {
        // If rejecting, restore stock
        if (newStatus === 'Rejected') {
            const orderToReject = orders.find(o => o.id === orderId);
            if (orderToReject) {
                setProducts(prevProducts => prevProducts.map(p => {
                    const orderItem = orderToReject.items.find(i => i.id === p.id);
                    if (orderItem) {
                        const restoredStock = p.stock + orderItem.quantity;
                        return { ...p, stock: restoredStock, inStock: restoredStock > 0 };
                    }
                    return p;
                }));
            }
        }

        setOrders(prev => prev.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
    };

    const addReview = (productId, review) => {
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.id === productId) {
                const updatedReviews = [review, ...(product.reviews || [])];
                const newRating = updatedReviews.reduce((acc, r) => acc + r.rating, 0) / updatedReviews.length;
                return {
                    ...product,
                    reviews: updatedReviews,
                    rating: parseFloat(newRating.toFixed(1)),
                    reviewCount: updatedReviews.length
                };
            }
            return product;
        }));
    };

    // Admin Functions
    const addProduct = (newProduct) => {
        setProducts(prev => {
            const updated = [newProduct, ...prev];
            localStorage.setItem('mediCareProducts', JSON.stringify(updated));
            return updated;
        });
    };

    const updateProduct = (id, updates) => {
        setProducts(prev => {
            const updated = prev.map(p => p.id === id ? { ...p, ...updates } : p);
            localStorage.setItem('mediCareProducts', JSON.stringify(updated));
            return updated;
        });
    };

    const deleteProduct = (id) => {
        setProducts(prev => {
            const updated = prev.filter(p => p.id !== id);
            localStorage.setItem('mediCareProducts', JSON.stringify(updated));
            return updated;
        });
    };

    const uploadPrescription = (file, userId) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const newPrescription = {
                    id: "RX-" + Date.now(),
                    userId: userId || 'guest',
                    date: new Date().toISOString(),
                    imageUrl: reader.result, // Base64 string
                    status: 'Pending',
                    fileName: file.name
                };
                setPrescriptions(prev => [newPrescription, ...prev]);
                resolve(newPrescription);
            };
            reader.onerror = error => reject(error);
        });
    };

    const updatePrescriptionStatus = (id, newStatus) => {
        setPrescriptions(prev => prev.map(p =>
            p.id === id ? { ...p, status: newStatus } : p
        ));
    };

    const getRevenue = () => {
        return orders.reduce((sum, order) => sum + order.total, 0);
    };

    const value = {
        products,
        cart,
        wishlist,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        placeOrder,
        updateOrderStatus,
        addReview,
        getRevenue,
        addProduct,
        updateProduct,
        deleteProduct,
        prescriptions,
        uploadPrescription,
        updatePrescriptionStatus
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
