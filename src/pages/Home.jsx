import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, Clock, Zap, Thermometer, Stethoscope, Pill, Apple, Baby, Monitor, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import ProductRail from '../components/ProductRail';
import BrandsRail from '../components/BrandsRail';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const { products } = useShop();
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Group products for rails
    const featuredProducts = products.slice(0, 8);
    const newArrivals = products.slice(8, 16);
    const bestSellers = products.filter(p => p.rating >= 4.5);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="space-y-0 pb-0 overflow-hidden bg-gray-50/50">
            {/* Modal */}
            {selectedProduct && (
                <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}

            {/* Hero Section - Carousel */}
            <div className="container mx-auto px-4 pt-6 mb-8">
                <HeroCarousel />
            </div>

            {/* Brands Rail - Trust Signal */}
            <BrandsRail />

            {/* Trust Badges */}
            <section className="bg-white border-y border-gray-100 py-8 shadow-sm mb-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { icon: Clock, title: "30 Mins Delivery", subtitle: "Hyper-local network" },
                        { icon: ShieldCheck, title: "100% Genuine", subtitle: "Direct from chemists" },
                        { icon: Truck, title: "Free Shipping", subtitle: "On orders above ₹200" },
                        { icon: Zap, title: "Instant Return", subtitle: "No questions asked" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="flex items-center gap-4 justify-center md:justify-start"
                        >
                            <div className="bg-orange-50 p-3 rounded-full">
                                <item.icon size={24} className="text-orange-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 leading-tight">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Deal of the Day Banner */}
            <section className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="z-10 text-center md:text-left mb-6 md:mb-0">
                        <span className="bg-yellow-400 text-gray-900 text-xs font-black px-2 py-1 rounded-sm uppercase tracking-wide">Deal of the Day</span>
                        <h3 className="text-3xl md:text-4xl font-black mt-3 mb-2">Diabetes Care Kit</h3>
                        <p className="text-white/90 max-w-md text-lg">Get 40% OFF on Accu-Chek Active Strips + Free Glucometer.</p>

                        <div className="flex gap-3 justify-center md:justify-start mt-6">
                            <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center min-w-[70px]">
                                <span className="block text-2xl font-bold">04</span>
                                <span className="text-[10px] uppercase tracking-wider opacity-80">Hrs</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center min-w-[70px]">
                                <span className="block text-2xl font-bold">32</span>
                                <span className="text-[10px] uppercase tracking-wider opacity-80">Mins</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center min-w-[70px]">
                                <span className="block text-2xl font-bold">15</span>
                                <span className="text-[10px] uppercase tracking-wider opacity-80">Secs</span>
                            </div>
                        </div>
                    </div>

                    <div className="z-10">
                        <Link to="/shop" className="group bg-white text-rose-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                            Grab Deal Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Product Rails */}
            <div className="container mx-auto space-y-8 mb-16">
                <ProductRail
                    title="Best Sellers"
                    products={bestSellers.length > 0 ? bestSellers : products.slice(0, 5)}
                    onOpenModal={setSelectedProduct}
                />

                <ProductRail
                    title="New Arrivals"
                    products={newArrivals.length > 0 ? newArrivals : products.slice(5, 10)}
                    onOpenModal={setSelectedProduct}
                />
            </div>

            {/* Categories Grid */}
            <section className="bg-white py-16 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-8">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-gray-900"
                        >
                            Shop by Category
                        </motion.h2>
                        <Link to="/shop" className="text-orange-600 font-bold text-sm hover:underline flex items-center gap-1">
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                        {[
                            { label: 'Fever', icon: Thermometer, color: 'text-red-500 bg-red-50 group-hover:bg-red-100' },
                            { label: 'Chronic Care', icon: Pill, color: 'text-blue-500 bg-blue-50 group-hover:bg-blue-100' },
                            { label: 'First Aid', icon: Stethoscope, color: 'text-green-500 bg-green-50 group-hover:bg-green-100' },
                            { label: 'Baby Care', icon: Baby, color: 'text-pink-500 bg-pink-50 group-hover:bg-pink-100' },
                            { label: 'Supplements', icon: Apple, color: 'text-orange-500 bg-orange-50 group-hover:bg-orange-100' },
                            { label: 'Devices', icon: Monitor, color: 'text-purple-500 bg-purple-50 group-hover:bg-purple-100' }
                        ].map((cat, idx) => (
                            <Link to={`/shop?category=${cat.label}`} key={idx}>
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-orange-200 hover:shadow-lg h-full"
                                >
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${cat.color}`}>
                                        <cat.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-gray-800 text-center text-sm group-hover:text-orange-700">{cat.label}</span>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    );
};

export default Home;
