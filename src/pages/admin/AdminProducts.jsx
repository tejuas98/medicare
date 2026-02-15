import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import ProductForm from '../../components/admin/ProductForm';
import { Edit, Trash2, Plus, Search } from 'lucide-react';

export default function AdminProducts() {
    const { products, addProduct, updateProduct, deleteProduct } = useShop();
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    // Handlers
    const handleAddProduct = () => {
        setEditingProduct(null);
        setIsProductFormOpen(true);
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setIsProductFormOpen(true);
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteProduct(id);
        }
    };

    const handleSaveProduct = (productData) => {
        if (editingProduct) {
            updateProduct(productData.id, productData);
        } else {
            addProduct({ ...productData, rating: 0, reviewCount: 0, reviews: [] });
        }
        setIsProductFormOpen(false);
    };

    // Filtered Products
    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', ...new Set(products.map(p => p.category))];

    return (
        <div>
            <div className="flex justify-between items-end mb-6">
                <h1 className="text-3xl font-black text-gray-900">Products</h1>
                <button
                    onClick={handleAddProduct}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-orange-700 transition-colors shadow-md"
                >
                    <Plus size={18} /> Add Product
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                            <tr>
                                <th className="px-6 py-4 font-bold">Product</th>
                                <th className="px-6 py-4 font-bold">Category</th>
                                <th className="px-6 py-4 font-bold">Price</th>
                                <th className="px-6 py-4 font-bold">Status</th>
                                <th className="px-6 py-4 font-bold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredProducts.map(product => (
                                <tr key={product.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-md bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                                {product.image ? (
                                                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">IMG</div>
                                                )}
                                            </div>
                                            <span className="font-medium text-gray-900 text-sm">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">₹{product.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            {product.stock > 0 ? (
                                                <span className={`text-xs font-bold flex items-center gap-1 ${product.stock < 10 ? 'text-orange-600' : 'text-green-600'}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${product.stock < 10 ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                                                    {product.stock} in Stock
                                                </span>
                                            ) : (
                                                <span className="text-red-600 text-xs font-bold flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Out of Stock
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => handleEditProduct(product)}
                                                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                                title="Edit"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteProduct(product.id)}
                                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredProducts.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500 text-sm">
                                        No products found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Form */}
            {isProductFormOpen && (
                <ProductForm
                    product={editingProduct}
                    onSave={handleSaveProduct}
                    onCancel={() => setIsProductFormOpen(false)}
                />
            )}
        </div>
    );
}
