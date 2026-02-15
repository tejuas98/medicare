import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const [role, setRole] = useState('customer'); // New state for role selection

    const { login, register, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect if already logged in
    useEffect(() => {
        if (user) {
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        }
    }, [user, navigate, location]);

    const handleRoleChange = (newRole) => {
        setRole(newRole);
        setIsLogin(true); // Force login mode
        setError('');

        // Auto-fill demo credentials
        if (newRole === 'admin') {
            setFormData({
                email: 'admin@medicare.com',
                password: 'adminpassword',
                username: ''
            });
        } else {
            setFormData({
                email: 'rudra@example.com',
                password: 'password123',
                username: ''
            });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isLogin) {
            const result = login(formData.email, formData.password);
            if (!result.success) setError(result.message);
        } else {
            // ... registration logic
            // Registration validation
            if (formData.password !== formData.confirmPassword) {
                setError("Passwords do not match");
                return;
            }
            if (formData.password.length < 6) {
                setError("Password must be at least 6 characters");
                return;
            }

            const result = register({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            if (!result.success) setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

            {/* Intro Animation - Branding */}
            <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 text-center"
            >
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-2xl mb-4 shadow-sm">
                    <Heart className="h-12 w-12 text-orange-600 fill-current" />
                </div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                    Bharat<span className="text-orange-600">Meds</span>
                </h1>
                <p className="text-gray-500 mt-2 font-medium">India's Trusted Online Pharmacy</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-100/50 border border-gray-100">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        {isLogin ? (role === 'admin' ? 'Admin Login' : 'Customer Login') : 'Create Account'}
                    </h2>

                    {/* Role Toggle */}
                    {isLogin && (
                        <div className="flex p-1 bg-gray-100 rounded-lg mb-6">
                            <button
                                type="button"
                                onClick={() => handleRoleChange('customer')}
                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === 'customer' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Customer
                            </button>
                            <button
                                type="button"
                                onClick={() => handleRoleChange('admin')}
                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === 'admin' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Admin
                            </button>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full btn btn-primary py-3 text-lg mt-6 shadow-lg shadow-orange-500/20"
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-orange-600 font-medium hover:underline"
                        >
                            {isLogin ? 'Sign up' : 'Login'}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;
