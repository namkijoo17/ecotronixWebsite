"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/routing';

export function OtherServicesSection() {
    return (
        <section id="services" className="py-20 md:py-32 bg-[#f4f4f4]">
            <div className="mx-auto px-6 md:px-12 lg:px-24">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-1 bg-[#a3d133]"></div>
                        <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">OTHER SERVICES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900">추가 서비스</h2>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Card 1: Marine Electronics */}
                    <Link href="/marine-electronics" className="group cursor-pointer bg-white rounded-t-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-16/10">
                                <img
                                    src="/images/marine-thumb.png"
                                    alt="Marine Electronics"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 md:p-10 grow relative">
                                <h3 className="text-2xl font-medium text-gray-900">Marine Electronics</h3>
                                {/* Blue bottom line indicator */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-[#2563eb]"></div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 2: Global EMS/ODM */}
                    <Link href="/global-ems" className="group cursor-pointer bg-white rounded-t-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-16/10">
                                <img
                                    src="/images/global-ems.png"
                                    alt="Global EMS/ODM"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 md:p-10 grow relative">
                                <h3 className="text-2xl font-medium text-gray-900">Global EMS/ODM</h3>
                                {/* Red bottom line indicator */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-[#dc2626]"></div>
                            </div>
                        </motion.div>
                    </Link>

                </div>

            </div>
        </section>
    );
}
