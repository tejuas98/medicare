import React, { useState } from 'react';
import { X, ShoppingCart, Star, CheckCircle, AlertCircle, MessageSquare, Send } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';

const ProductDetailsModal = ({ product: initialProduct, onClose }) => {
    const { products, addToCart, addReview } = useShop(); // Ensure addReview is imported
    const { user } = useAuth();

    // Get live product data from context to ensure updates (like new reviews) are reflected immediately
    const product = products.find(p => p.id === initialProduct.id) || initialProduct;

    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // Review State
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newRating, setNewRating] = useState(5);
    const [newComment, setNewComment] = useState('');
    const [activeTab, setActiveTab] = useState('Overview');

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!user) {
            alert("Please login to write a review");
            return;
        }

        const review = {
            id: Date.now(),
            user: user.username,
            rating: newRating,
            comment: newComment,
            date: new Date().toISOString().split('T')[0]
        };

        addReview(product.id, review);
        setNewComment('');
        setShowReviewForm(false);
        // Optional: Scroll to top of reviews or show success message
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Left: Image & Quick Info */}
                <div className="md:w-2/5 bg-gray-50 flex flex-col relative border-r border-gray-100 shrink-0">
                    <div className="flex-grow flex items-center justify-center p-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto max-h-[300px] object-contain mix-blend-multiply"
                        />
                        {product.discount > 0 && (
                            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                {product.discount}% OFF
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Details & Reviews */}
                <div className="md:w-3/5 flex flex-col h-full overflow-hidden">
                    <div className="p-8 pb-0 flex-grow overflow-y-auto remove-scrollbar">
                        <div className="mb-1">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-sm">{product.category}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h2>
                        <p className="text-sm text-gray-500 italic mb-4">{product.description}</p>

                        {/* Rating Summary */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex bg-amber-400 text-amber-900 text-sm font-bold px-2 py-1 rounded gap-1 items-center">
                                <span>{product.rating}</span> <Star size={12} fill="currentColor" />
                            </div>
                            <span className="text-sm text-gray-500 hover:text-emerald-600 underline cursor-pointer">
                                {product.reviewCount} Ratings & Reviews
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                            )}
                        </div>

                        {/* TABS */}
                        <div className="flex border-b border-gray-200 mb-6">
                            {['Overview', 'Ingredients', 'Reviews'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors ${activeTab === tab ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* TAB CONTENT */}
                        {activeTab === 'Overview' && (
                            <div className="animate-in fade-in duration-300">
                                <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <p className="text-gray-500 text-xs mb-1">Dosage</p>
                                        <p className="font-medium text-gray-700">{product.dosage || "As prescribed"}</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <p className="text-gray-500 text-xs mb-1">Usage</p>
                                        <p className="font-medium text-gray-700">{product.usage || "General Health"}</p>
                                    </div>
                                </div>
                                <div className="prose prose-sm text-gray-600 mb-6">
                                    <h4 className="font-bold text-gray-900 mb-2">About this Item</h4>
                                    <p>
                                        {product.details || "This is a high-quality healthcare product sourced directly from authorized manufacturers. It is stored under optimal conditions to ensure maximum efficacy."}
                                    </p>
                                </div>

                                {/* Write a Review Shortcut */}
                                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Have you used this product?</p>
                                        <p className="text-xs text-gray-500">Share your experience with others.</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setActiveTab('Reviews');
                                            setShowReviewForm(true);
                                        }}
                                        className="text-xs font-bold bg-white text-emerald-600 border border-emerald-200 px-3 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                                    >
                                        Write a Review
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Ingredients' && (
                            <div className="animate-in fade-in duration-300">
                                <h4 className="font-bold text-gray-900 mb-3">Key Ingredients</h4>
                                <ul className="space-y-2">
                                    {product.ingredients ? (
                                        product.ingredients.map((ing, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                {ing}
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">Ingredients data not available for this product.</p>
                                    )}
                                </ul>
                                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-xs text-yellow-800 flex items-start gap-2">
                                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                                    <p>Always check the product label for the most up-to-date ingredient list and allergen warnings.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Reviews' && (
                            <div className="animate-in fade-in duration-300">
                                {(!user || user.role !== 'admin') && (
                                    <>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex items-center border border-gray-300 rounded-md">
                                                <button
                                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                    className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                                                    disabled={!product.stock}
                                                >-</button>
                                                <span className="px-3 font-medium">{quantity}</span>
                                                <button
                                                    onClick={() => setQuantity(Math.min(product.stock || 50, quantity + 1))}
                                                    className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                                                    disabled={!product.stock || quantity >= product.stock}
                                                >+</button>
                                            </div>
                                            <button
                                                onClick={handleAddToCart}
                                                disabled={!product.stock || product.stock === 0}
                                                className="flex-1 bg-emerald-600 text-white font-bold py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            >
                                                <ShoppingCart size={20} />
                                                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                                            </button>
                                        </div>
                                        {product.stock > 0 && product.stock < 10 && (
                                            <p className="text-red-600 text-sm font-bold mb-4">Hurry! Only {product.stock} left in stock.</p>
                                        )}
                                    </>
                                )}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                        Reviews <span className="text-gray-400 text-sm font-normal">({product.reviews?.length || 0})</span>
                                    </h3>
                                    <button
                                        onClick={() => setShowReviewForm(!showReviewForm)}
                                        className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                                    >
                                        <MessageSquare size={16} /> Write a Review
                                    </button>
                                </div>

                                {/* Write Review Form */}
                                {showReviewForm && (
                                    <div className="bg-gray-50 p-4 rounded-xl mb-6 animate-in fade-in slide-in-from-top-2">
                                        <h4 className="font-bold text-gray-800 text-sm mb-3">Rate this product</h4>
                                        <div className="flex gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    onClick={() => setNewRating(star)}
                                                    className={`transition-transform hover:scale-110 ${star <= newRating ? 'text-amber-400' : 'text-gray-300'}`}
                                                >
                                                    <Star size={24} fill={star <= newRating ? "currentColor" : "none"} />
                                                </button>
                                            ))}
                                        </div>
                                        <textarea
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            placeholder="Share your experience..."
                                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none text-sm mb-3 min-h-[80px]"
                                        />
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => setShowReviewForm(false)}
                                                className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-lg"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleSubmitReview}
                                                disabled={!newComment.trim()}
                                                className="px-4 py-2 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                                            >
                                                <Send size={14} /> Submit
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Review List */}
                                <div className="space-y-4 mb-8">
                                    {product.reviews && product.reviews.length > 0 ? (
                                        product.reviews.map((review) => (
                                            <div key={review.id} className="border-b border-gray-50 pb-4 last:border-0 layer">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                                                            {review.user.charAt(0)}
                                                        </div>
                                                        <span className="font-bold text-gray-900 text-sm">{review.user}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{review.date || 'Recently'}</span>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={10} className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"} />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    "{review.comment}"
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-400 text-sm italic py-4">No reviews yet. Be the first to review!</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-100 bg-white z-10 sticky bottom-0 shrink-0">
                        {user?.role === 'admin' ? (
                            <div className="w-full">
                                <a
                                    href="/admin/products"
                                    className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                                >
                                    Edit Product in Admin Panel
                                </a>
                            </div>
                        ) : product.inStock ? (
                            <div className="flex gap-4">
                                {/* Quantity Selector */}
                                <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 h-14">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-l-xl font-bold text-lg"
                                    >
                                        -
                                    </button>
                                    <span className="w-12 text-center font-bold text-gray-900 text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock || 50, quantity + 1))}
                                        className="w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-r-xl font-bold text-lg"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    disabled={isAdded}
                                    className={`flex-grow btn h-14 text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl rounded-xl ${isAdded
                                        ? 'bg-green-600 text-white transform scale-95'
                                        : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:translate-y-[-2px]'
                                        }`}
                                >
                                    {isAdded ? (
                                        <> <CheckCircle size={20} /> Added to Cart </>
                                    ) : (
                                        <> <ShoppingCart size={20} /> Add to Cart - ₹{product.price * quantity} </>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className="w-full py-3 bg-gray-100 text-gray-400 font-bold rounded-lg flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200">
                                <AlertCircle size={20} /> Out of Stock
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
