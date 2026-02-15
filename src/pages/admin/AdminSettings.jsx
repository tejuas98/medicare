import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Save, Lock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminSettings() {
    const { user, logout, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '' // Optional password update
    });

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username || '',
                email: user.email || '',
                password: ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            const updates = {
                username: formData.username,
                email: formData.email
            };
            if (formData.password) {
                updates.password = formData.password;
            }

            updateUserProfile(updates);

            setIsLoading(false);
            setSuccessMessage('Profile updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        }, 800);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h1 className="text-3xl font-black text-gray-900 mb-8">Settings</h1>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Profile Settings Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <User size={20} className="text-orange-600" />
                            Edit Profile
                        </h2>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                        placeholder="Admin Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                        placeholder="admin@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">New Password (Optional)</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <AnimatePresence>
                                {successMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-green-600 text-sm font-bold bg-green-50 p-2 rounded text-center"
                                    >
                                        {successMessage}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Save size={18} /> Save Changes
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Account Details & Logout */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50">
                            <h2 className="text-lg font-bold text-gray-900">Account Summary</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl">
                                    {user?.username?.charAt(0).toUpperCase() || 'A'}
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-gray-900">{user?.username || 'Admin'}</p>
                                    <p className="text-gray-500">{user?.role ? user.role.toUpperCase() : 'ADMIN'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 hover:border-red-200 px-4 py-4 rounded-xl font-bold transition-all shadow-sm"
                    >
                        <LogOut size={20} />
                        Sign Out of Admin Panel
                    </button>
                </div>
            </div>
        </div>
    );
}
