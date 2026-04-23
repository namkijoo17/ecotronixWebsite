"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/routing';

export function OtherServicesSection() {
    return (
        <section id="other" className="w-full py-24 md:py-32 bg-white overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-4 h-1 bg-[#8dc63f]"></div>
                            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">OTHER SERVICES</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">추가 서비스</h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card 1: Marine Electronics */}
                        <Link href="/marine-electronics" className="group cursor-pointer rounded-xl overflow-hidden shadow-sm border border-[#E5E8EF] flex flex-col bg-white">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col h-full"
                            >
                                <div className="aspect-4/3 overflow-hidden relative">
                                    <img
                                        src="/images/marine-thumb.png"
                                        alt="Marine Electronics"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 pb-10 relative grow">
                                    <h3 className="text-xl md:text-2xl font-medium text-gray-900">Marine Electronics</h3>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2b65f6] transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></div>
                                </div>
                            </motion.div>
                        </Link>

                        {/* Card 2: AI Business */}
                        <Link href="/ai-business" className="group cursor-pointer rounded-xl overflow-hidden shadow-sm border border-[#E5E8EF] flex flex-col bg-white">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col h-full"
                            >
                                <div className="aspect-4/3 overflow-hidden relative">
                                    <img
                                        src="/images/ai-business.png"
                                        alt="Vision AI기반 솔루션"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 pb-10 relative grow">
                                    <h3 className="text-xl md:text-2xl font-medium text-gray-900">AI Business</h3>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#e60012] transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></div>
                                </div>
                            </motion.div>
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    );
}
