"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/routing';

export function OtherServicesSection() {
    return (
        <section id="services" className="w-full bg-[#f4f5f7] py-20 md:py-32">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8">
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
                            <div className="w-3 h-[2px] bg-[#8dc63f]"></div>
                            <span className="text-xs font-bold text-gray-600 tracking-wider uppercase">Other Services</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
                            추가 서비스
                        </h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                        {/* Card 1: AI Business */}
                        <Link href="/ai-business" className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative cursor-pointer"
                            >
                                <div className="w-full aspect-16/10 overflow-hidden">
                                    <img
                                        src="/images/ai-business.png"
                                        alt="AI Business"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="p-6 md:p-8 grow flex items-center justify-start">
                                    <h3 className="text-xl text-gray-900 font-medium">Vision AI기반 솔루션</h3>
                                </div>
                                {/* Bottom Blue Line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-blue-600"></div>
                            </motion.div>
                        </Link>

                        {/* Card 2: Global EMS/ODM */}
                        <Link href="/global-ems" className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative cursor-pointer"
                            >
                                <div className="w-full aspect-16/10 overflow-hidden">
                                    <img
                                        src="/images/global-ems.png"
                                        alt="Global EMS/ODM"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="p-6 md:p-8 grow flex items-center justify-start">
                                    <h3 className="text-xl text-gray-900 font-medium">Global EMS/ODM</h3>
                                </div>
                                {/* Bottom Red Line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-red-600"></div>
                            </motion.div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}
