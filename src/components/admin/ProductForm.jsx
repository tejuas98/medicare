import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ProductForm({ product, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        description: '',
        stock: 50,
        inStock: true,
        image: '' // In a real app, this would be a file upload
    });

    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...formData,
            price: Number(formData.price),
            stock: Number(formData.stock),
            inStock: Number(formData.stock) > 0,
            id: product ? product.id : Date.now() // Simple ID generation
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-lg font-bold text-gray-900">{product ? 'Edit Product' : 'Add New Product'}</h3>
                    <button onClick={onCancel} className="text-gray-500 hover:text-red-500 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g. Paracetamol 500mg"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="0.00"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">Select Category</option>
                                <option value="Fever">Fever</option>
                                <option value="Pain Relief">Pain Relief</option>
                                <option value="Antibiotic">Antibiotic</option>
                                <option value="Respiratory">Respiratory</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="Ayurveda">Ayurveda</option>
                                <option value="Supplements">Supplements</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="https://example.com/image.jpg"
                        />
                        <p className="text-xs text-gray-400 mt-1">Leave blank for placeholder</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Product description..."
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock || 0}
                                onChange={handleChange}
                                required
                                min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="e.g. 50"
                            />
                        </div>
                        <div className="flex items-end pb-2">
                            <div className={`px-4 py-2 rounded-lg font-bold text-sm ${formData.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {formData.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-bold shadow-md"
                        >
                            {product ? 'Update Product' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
