import React from 'react';
import { ShoppingCart, Star, Heart, FileText, AlertCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onOpenModal }) => {
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const { user } = useAuth();

    const isWishlisted = wishlist.some(item => item.id === product.id);

    // If out of stock, card looks different
    const inStock = product.inStock !== false; // Default true if undefined

    return (
        <motion.div
            layout
            onClick={() => onOpenModal && onOpenModal(product)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 group relative flex flex-col h-full cursor-pointer ${inStock ? 'border-gray-100' : 'border-gray-200 opacity-75'}`}
        >
            {/* Discount Badge */}
            {inStock && product.discount > 0 && (
                <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-sm shadow-md">
                    {product.discount}% OFF
                </div>
            )}

            {/* Out of Stock Badge */}
            {!inStock && (
                <div className="absolute top-3 left-3 z-10 bg-gray-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-sm shadow-md flex items-center gap-1">
                    <AlertCircle size={10} /> Out of Stock
                </div>
            )}

            {/* Wishlist Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all text-gray-400 hover:text-red-500"
            >
                <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "text-red-500" : ""} />
            </motion.button>

            {/* Image */}
            <div className="relative pt-[100%] overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-transform duration-500 ${inStock ? 'group-hover:scale-110' : 'grayscale'}`}
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
                    <h3 className="font-bold text-gray-800 text-base leading-tight mt-1 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                </div>

                {/* Ratings */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount || 0})</span>
                </div>

                <div className="mt-auto pt-3 border-t border-gray-50">
                    <div className="flex items-end justify-between gap-2">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg sm:text-xl font-bold text-gray-900">₹{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                                )}
                            </div>
                            {inStock && <p className="text-[10px] text-green-600 font-medium">Free Delivery</p>}
                        </div>

                        {/* View Details Button (Visual Cue Only) */}
                        <div className="flex gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`btn px-3 py-2 text-xs font-bold flex items-center gap-1 transition-all shadow-sm ${inStock
                                    ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <FileText size={16} />
                                <span className="hidden sm:inline">Details</span>
                            </motion.button>

                            {/* Restored Add to Cart Button - Hidden for Admins */}
                            {(!user || user.role !== 'admin') && (
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (inStock) addToCart(product);
                                    }}
                                    disabled={!inStock}
                                    className={`btn px-3 py-2 text-xs font-bold flex items-center gap-1 transition-all shadow-sm ${inStock
                                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                                        : 'hidden'
                                        }`}
                                    title="Quick Add"
                                >
                                    <ShoppingCart size={16} />
                                    <span className="hidden sm:inline">Add</span>
                                </motion.button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
