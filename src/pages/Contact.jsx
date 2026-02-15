import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Get in Touch</h1>
                <p className="text-gray-500 text-lg">We are here to help you 24/7</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-orange-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold uppercase mb-1">Call Us</p>
                                    <p className="text-xl font-bold text-gray-900">1800-108-1008</p>
                                    <p className="text-xs text-gray-400">Toll-free, 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-orange-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold uppercase mb-1">Email Us</p>
                                    <p className="text-lg font-bold text-gray-900">care@bharatmeds.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-orange-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold uppercase mb-1">Visit Us</p>
                                    <p className="font-bold text-gray-900">BharatMeds HQ</p>
                                    <p className="text-sm text-gray-600">Bandra Kurla Complex, Mumbai, Maharashtra - 400051</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 text-green-700 p-6 rounded-xl text-center border border-green-200"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Send size={24} />
                                </div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
                            <p className="text-sm">We'll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                                    <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                                    <input type="text" required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                <input type="email" required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea required rows="4" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
