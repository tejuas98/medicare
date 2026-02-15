import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Truck, Heart } from 'lucide-react';
import BrandsRail from '../components/BrandsRail';

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative py-20 bg-orange-50 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
                    >
                        Bringing Health to <span className="text-orange-600">Every Indian Home</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        BharatMeds is India's most trusted digital healthcare platform. We are on a mission to make quality healthcare accessible, affordable, and authentic for a billion Indians.
                    </motion.p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-black text-orange-600 mb-2">1M+</div>
                            <div className="text-sm text-gray-500 font-bold uppercase">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-orange-600 mb-2">20k+</div>
                            <div className="text-sm text-gray-500 font-bold uppercase">Pincodes Served</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-orange-600 mb-2">50k+</div>
                            <div className="text-sm text-gray-500 font-bold uppercase">Products</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-orange-600 mb-2">4.8</div>
                            <div className="text-sm text-gray-500 font-bold uppercase">App Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Our Mission"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Why We Exist</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At BharatMeds, we believe that access to medicines is a fundamental right. In a country as vast as India, getting genuine medicines on time can be a challenge. We are bridging this gap with technology.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">100% Genuine Medicines</h4>
                                        <p className="text-sm text-gray-500">Sourced directly from authorized distributors.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                                        <Truck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fast Delivery</h4>
                                        <p className="text-sm text-gray-500">Reaching the remotest corners of India.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-2 rounded-full text-red-600 mt-1">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Care First</h4>
                                        <p className="text-sm text-gray-500">Customer support that truly cares.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BrandsRail />
        </div>
    );
};

export default About;
