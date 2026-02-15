import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';
import { motion } from 'framer-motion';

const Shop = () => {
    const { products } = useShop();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Extract query params for search/category from URL (Navbar search)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category');
        const search = params.get('search');

        if (cat) setSelectedCategory(cat);
        if (search) setSearchTerm(search);
    }, [location]);

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Modal */}
            {selectedProduct && (
                <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}

            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    {searchTerm ? (
                        <h1 className="text-2xl font-bold text-gray-900">Results for "{searchTerm}"</h1>
                    ) : (
                        <h1 className="text-2xl font-bold text-gray-900">{selectedCategory} Medicines</h1>
                    )}
                    <p className="text-gray-500 text-sm mt-1">{filteredProducts.length} items found</p>
                </div>

                <div className="flex gap-3">
                    {/* Simple Dropdown Filter */}
                    <div className="relative group">
                        <div className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                            <Filter size={16} className="text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">Category: {selectedCategory}</span>
                            <ChevronDown size={14} className="text-gray-400" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="hidden group-hover:block absolute top-full right-0 mt-1 w-48 bg-white border border-gray-100 shadow-xl rounded-lg z-20 py-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedCategory === cat ? 'text-orange-600 font-bold' : 'text-gray-700'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredProducts.map(product => (
                        <motion.div key={product.id} variants={item}>
                            <ProductCard product={product} onOpenModal={setSelectedProduct} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
                    <p className="text-gray-500 text-lg">No medicines found matching your criteria.</p>
                    <button
                        onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                        className="mt-4 text-orange-600 font-bold hover:underline"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Shop;
