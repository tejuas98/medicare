import React, { useState } from 'react';
import { Upload, FileText, Check, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';

const Prescription = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { uploadPrescription } = useShop();
    const { user } = useAuth(); // Assuming useAuth is imported or available

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setSuccess(false);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        try {
            await uploadPrescription(file, user?.id);
            setUploading(false);
            setSuccess(true);
            setFile(null);
        } catch (error) {
            console.error("Upload failed", error);
            setUploading(false);
            alert("Failed to upload prescription");
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-gray-900 mb-3">Upload Prescription</h1>
                <p className="text-gray-500">Upload your doctor's prescription and we will handle the rest.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {!success ? (
                    <div className="p-8 md:p-12">
                        {/* Upload Area */}
                        <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-10 text-center hover:bg-orange-50 hover:border-orange-300 transition-colors relative">
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />

                            {file ? (
                                <div className="flex flex-col items-center">
                                    <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-orange-600">
                                        <FileText size={40} />
                                    </div>
                                    <p className="font-bold text-gray-900 text-lg mb-1">{file.name}</p>
                                    <p className="text-sm text-gray-500 mb-4">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    <button
                                        onClick={(e) => { e.preventDefault(); setFile(null); }}
                                        className="text-red-500 text-sm font-bold hover:underline z-10 relative"
                                    >
                                        Remove File
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-gray-400">
                                        <Upload size={40} />
                                    </div>
                                    <p className="font-bold text-gray-900 text-lg mb-1">Click to Upload</p>
                                    <p className="text-sm text-gray-500">Supported formats: JPG, PNG, PDF</p>
                                </div>
                            )}
                        </div>

                        {/* Guide */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div className="flex items-start gap-2">
                                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                <p>Ensure doctor's name is visible</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                <p>Clear image of medicines</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                <p>Date must be valid</p>
                            </div>
                        </div>

                        {/* Action Btn */}
                        <div className="mt-8">
                            <button
                                onClick={handleUpload}
                                disabled={!file || uploading}
                                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${!file || uploading
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200'
                                    }`}
                            >
                                {uploading ? (
                                    <>Processing...</>
                                ) : (
                                    <>Continue <Upload size={20} /></>
                                )}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-12 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Check size={48} strokeWidth={3} />
                        </motion.div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2">Prescription Uploaded!</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Our pharmacists will review your prescription and confirm your order shortly. You will receive a notification on your phone.
                        </p>
                        <Link to="/" className="btn btn-primary px-8 py-3 rounded-xl">
                            Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Prescription;
