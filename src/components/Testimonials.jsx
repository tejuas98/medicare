import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Anjali Sharma",
        role: "Verified Buyer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 5,
        text: "Incredible service! I ordered my monthly prescription for my parents in Pune at 10 AM and received it by 2 PM. The packaging was secure and discreet."
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 5,
        text: "Best prices I've found online for diabetes medicines in Delhi. The customer support team was also very helpful in guiding me through the insurance process."
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "Verified Buyer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 4,
        text: "Very convenient app. I love the pill reminder feature. Delivery is always on time in Mumbai, though I wish there were more eco-friendly packaging options."
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-600 font-bold uppercase tracking-wider text-sm"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4"
                    >
                        Loved by 50,000+ Customers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500"
                    >
                        Don't just take our word for it. Here's what our community has to say about their experience with MediCare.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                        >
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 italic">"{review.text}"</p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                                        <CheckCircle size={12} />
                                        <span>{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
