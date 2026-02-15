import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Your Trusted Neighborhood Pharmacy",
        subtitle: "Genuine medicines delivered in 30 minutes.",
        cta: "Order Now",
        link: "/shop",
        color: "from-emerald-900"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "24/7 Healthcare Support",
        subtitle: "Consult with top doctors anytime, anywhere.",
        cta: "Book Consultation",
        link: "/dashboard",
        color: "from-blue-900"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1576091160550-2187d8001b9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Big Savings on Monthly Refills",
        subtitle: "Get flat 20% off on your first chronic care order.",
        cta: "Upload Prescription",
        link: "/cart",
        color: "from-purple-900"
    }
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl group mx-auto">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentIndex].color} to-transparent z-10 opacity-90`}></div>
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 max-w-3xl text-white">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-xs rounded-full w-fit mb-4"
                        >
                            FEATURED OFFER
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-5xl font-black leading-tight mb-4 drop-shadow-lg"
                        >
                            {slides[currentIndex].title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg drop-shadow-md"
                        >
                            {slides[currentIndex].subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link to={slides[currentIndex].link} className="btn bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
                                {slides[currentIndex].cta}
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </div>
    );
}
