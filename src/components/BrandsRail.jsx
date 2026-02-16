import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: "Patanjali", logo: "https://icon.horse/icon/patanjaliayurved.net" },
    { name: "Zandu", logo: "https://icon.horse/icon/zanducare.com" },
    { name: "Nestle", logo: "https://icon.horse/icon/nestle.in" },
    { name: "Tata 1mg", logo: "https://icon.horse/icon/1mg.com" },
    { name: "Apollo Hospitals", logo: "https://icon.horse/icon/apollohospitals.com" },
    { name: "Himalaya", logo: "https://icon.horse/icon/himalayawellness.in" },
    { name: "Dabur", logo: "https://icon.horse/icon/dabur.com" },
    { name: "Cipla", logo: "https://icon.horse/icon/cipla.com" },
    { name: "Sun Pharma", logo: "https://icon.horse/icon/sunpharma.com" },
    { name: "Dr. Morepen", logo: "https://icon.horse/icon/morepen.com" }
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
                        <div key={idx} className="flex-shrink-0 transition-all duration-500">
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
