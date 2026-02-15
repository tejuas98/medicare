import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: "Himalaya", logo: "https://logo.clearbit.com/himalayawellness.in" },
    { name: "Dabur", logo: "https://logo.clearbit.com/dabur.com" },
    { name: "Cipla", logo: "https://logo.clearbit.com/cipla.com" },
    { name: "Sun Pharma", logo: "https://logo.clearbit.com/sunpharma.com" },
    { name: "Patanjali", logo: "https://logo.clearbit.com/patanjaliayurved.net" },
    { name: "zandu", logo: "https://logo.clearbit.com/zanducare.com" },
    { name: "Nestle", logo: "https://logo.clearbit.com/nestle.in" },
    { name: "Tata 1mg", logo: "https://logo.clearbit.com/1mg.com" },
    { name: "Apollo", logo: "https://logo.clearbit.com/apollo247.com" },
    { name: "Dr. Morepen", logo: "https://logo.clearbit.com/morepen.com" }
];

export default function BrandsRail() {
    return (
        <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Trusted Partners</h2>
            </div>

            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                <motion.div
                    className="flex gap-16 items-center px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...brands, ...brands].map((brand, idx) => (
                        <div key={idx} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-12 w-auto object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/150x50/white/FF9933?text=${brand.name}`;
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
