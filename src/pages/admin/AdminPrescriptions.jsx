import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle, XCircle, Eye, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminPrescriptions() {
    const { prescriptions, updatePrescriptionStatus } = useShop();
    const [filter, setFilter] = useState('Pending');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredPrescriptions = filter === 'All'
        ? prescriptions
        : prescriptions.filter(p => p.status === filter);

    return (
        <div>
            <h1 className="text-3xl font-black text-gray-900 mb-6">Prescriptions</h1>

            {/* Filters */}
            <div className="flex gap-2 mb-8 bg-white p-2 rounded-lg shadow-sm w-fit">
                {['Pending', 'Accepted', 'Rejected', 'All'].map(status => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-md font-bold text-sm transition-all ${filter === status
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {filteredPrescriptions.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                        No {filter !== 'All' ? filter.toLowerCase() : ''} prescriptions found.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Details</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">User</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Date</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredPrescriptions.map((prescription) => (
                                    <tr key={prescription.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                                    <img src={prescription.imageUrl} alt="Rx" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900 text-sm">{prescription.fileName}</p>
                                                    <p className="text-xs text-gray-400">{prescription.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <User size={14} /> {prescription.userId}
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} /> {new Date(prescription.date).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                                ${prescription.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    prescription.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                                                        'bg-red-100 text-red-700'}`}>
                                                {prescription.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedImage(prescription.imageUrl)}
                                                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                                    title="View Image"
                                                >
                                                    <Eye size={18} />
                                                </button>

                                                {prescription.status === 'Pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => updatePrescriptionStatus(prescription.id, 'Accepted')}
                                                            className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                                                            title="Accept"
                                                        >
                                                            <CheckCircle size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => updatePrescriptionStatus(prescription.id, 'Rejected')}
                                                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                            title="Reject"
                                                        >
                                                            <XCircle size={18} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white p-2 rounded-xl max-w-4xl max-h-[90vh] overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={selectedImage} alt="Full Prescription" className="w-full h-full object-contain max-h-[85vh] rounded-lg" />
                            <div className="mt-2 text-center">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="px-4 py-2 bg-gray-900 text-white rounded-lg font-bold text-sm"
                                >
                                    Close Preview
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
