import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft, ArrowRight, MapPin, CreditCard, CheckCircle, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
    const { cart, updateQuantity, removeFromCart, placeOrder } = useShop();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [step, setStep] = useState('cart'); // 'cart', 'checkout'
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [deliveryAddress, setDeliveryAddress] = useState(user?.address || '');

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        setStep('checkout');
        if (user.address) setDeliveryAddress(user.address);
    };

    const handleConfirmOrder = () => {
        placeOrder(user.id, deliveryAddress);
        navigate('/dashboard'); // Dashboard will show pending order
    };

    const [isLocating, setIsLocating] = useState(false);

    const handleDetectAddress = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();

                    if (data && data.address) {
                        const addr = data.address;
                        const city = addr.city || addr.town || addr.village || addr.suburb || "";
                        const state = addr.state || "";
                        const pincode = addr.postcode || "";
                        const addressLine = [addr.house_number, addr.road, addr.suburb, addr.neighbourhood].filter(Boolean).join(", ");

                        const fullAddress = `${addressLine}, ${city}, ${state} - ${pincode}`;
                        setDeliveryAddress(fullAddress);
                    }
                } catch (error) {
                    console.error("Error fetching address:", error);
                    alert("Failed to fetch address details.");
                } finally {
                    setIsLocating(false);
                }
            },
            (error) => {
                console.error("Error detecting location:", error);
                alert("Unable to retrieve your location. Please allow location access.");
                setIsLocating(false);
            }
        );
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                    <ShoppingBag size={48} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added any medicines yet.</p>
                <Link to="/shop" className="btn btn-primary px-8 py-3 rounded-xl shadow-lg shadow-orange-600/20">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <h1 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                {step === 'checkout' && (
                    <button onClick={() => setStep('cart')} className="hover:bg-gray-100 p-1 rounded-full mr-2">
                        <ArrowLeft size={24} />
                    </button>
                )}
                {step === 'cart' ? 'Shopping Cart' : 'Checkout & Payment'}
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side: Cart Items or Address/Payment */}
                <div className="lg:w-2/3 space-y-4">

                    {step === 'cart' ? (
                        // CART LIST STEP
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            {cart.map(item => (
                                <div key={item.id} className="p-4 border-b border-gray-100 flex items-center gap-4 last:border-0 hover:bg-gray-50 transition-colors">
                                    <div className="w-20 h-20 bg-gray-50 rounded-lg flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.manufacturer}</p>
                                        <div className="mt-2 font-bold text-orange-600">₹{item.price}</div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                                            <button
                                                className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                            <button
                                                className="px-3 py-1 hover:bg-gray-100 text-orange-600 font-bold"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >+</button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // CHECKOUT STEPS
                        <div className="space-y-6">
                            {/* Address Section */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                        <MapPin className="text-orange-600" size={20} /> Delivery Address
                                    </h2>
                                    <button
                                        type="button"
                                        onClick={handleDetectAddress}
                                        disabled={isLocating}
                                        className="text-sm text-orange-600 font-bold hover:bg-orange-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
                                    >
                                        <MapPin size={16} /> {isLocating ? 'Detecting...' : 'Detect Location'}
                                    </button>
                                </div>
                                <textarea
                                    value={deliveryAddress}
                                    onChange={(e) => setDeliveryAddress(e.target.value)}
                                    placeholder="Enter your full street address..."
                                    className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-orange-200 outline-none min-h-[100px]"
                                />
                            </div>

                            {/* Payment Section */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CreditCard className="text-orange-600" size={20} /> Payment Method
                                </h2>
                                <div className="space-y-3">
                                    <label className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500' : 'border-gray-200 hover:border-orange-200'}`}>
                                        <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-orange-600 w-5 h-5" />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-800">Cash on Delivery</span>
                                            <span className="text-xs text-gray-500">Pay fast with cash/UPI upon delivery</span>
                                        </div>
                                    </label>
                                    <label className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500' : 'border-gray-200 hover:border-orange-200'}`}>
                                        <input type="radio" name="payment" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="accent-orange-600 w-5 h-5" />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-800">Pay Online (UPI/Cards)</span>
                                            <span className="text-xs text-gray-500">Secure payment via Razorpay</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-500">
                                <span>Subtotal</span>
                                <span>₹{total}</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Delivery Fee</span>
                                <span className="text-green-600 font-medium">FREE</span>
                            </div>
                            {step === 'checkout' && (
                                <div className="flex justify-between text-gray-500 text-sm py-2 border-t border-dashed">
                                    <span>Items</span>
                                    <span>{cart.length}</span>
                                </div>
                            )}
                            <div className="pt-3 border-t flex justify-between font-bold text-lg text-gray-800">
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                        </div>

                        {step === 'cart' ? (
                            <button
                                onClick={handleCheckout}
                                className="w-full btn btn-primary py-3 px-4 rounded-xl font-bold shadow-lg shadow-orange-600/20 flex justify-between items-center group"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                onClick={handleConfirmOrder}
                                disabled={!deliveryAddress.trim()}
                                className={`w-full btn py-4 px-4 rounded-xl font-bold flex justify-center items-center gap-2 ${!deliveryAddress.trim() ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-900/20 animate-pulse-slow'
                                    }`}
                            >
                                <CheckCircle size={20} />
                                <span>Confirm Order</span>
                            </button>
                        )}

                        <p className="text-xs text-center text-gray-400 mt-4 flex justify-center items-center gap-1">
                            <ShieldCheck size={14} /> Secure Encryption
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
