import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductRail({ title, products, onOpenModal }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!products || products.length === 0) return null;

    return (
        <div className="relative py-8">
            <div className="flex items-center justify-between mb-4 px-4">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[280px] md:min-w-[300px] snap-start">
                        <ProductCard product={product} onOpenModal={onOpenModal} />
                    </div>
                ))}
            </div>
        </div>
    );
}
