'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {}
const emsProcessSteps = [
    { id: '01', title: '원부자재 입고', image: 'https://images.unsplash.com/photo-1557701197-2f99da0922dd?q=80&w=600&auto=format&fit=crop' },
    { id: '02', title: '수입검사', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop' },
    { id: '03', title: 'SMT', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
    { id: '04', title: '수삽', image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=600&auto=format&fit=crop' },
    { id: '05', title: '조립 및 검사', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop' },
    { id: '06', title: '포장 및 출하', image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=600&auto=format&fit=crop' },
];

const EmsProcess = (props: Props) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth > 768 ? 384 : 304; // card width + gap
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full py-24 bg-[#F5F4F0] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header & Controls */}
                    <div className="flex items-center justify-between mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-medium text-gray-900"
                        >
                            제조위탁(EMS) 공정
                        </motion.h2>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full bg-[#1e6bb8] flex items-center justify-center shadow-sm hover:bg-[#155a9c] transition-colors"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="relative -mx-4 md:-mx-8 px-4 md:px-8">
                        <div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {emsProcessSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-white rounded-2xl p-6 shadow-sm snap-start flex flex-col shrink-0"
                                >
                                    <div className="w-10 h-10 bg-[#e8e8e8] rounded-md flex items-center justify-center text-gray-600 text-sm font-medium mb-6">
                                        {step.id}
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-8">{step.title}</h3>
                                    <div className="mt-auto h-[180px] rounded-xl overflow-hidden">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EmsProcess