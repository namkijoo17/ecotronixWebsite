"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
            <div className="relative w-full h-[550px] sm:h-[450px] md:h-auto md:aspect-21/9 rounded-2xl overflow-hidden shadow-sm">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="/images/global-ems.png"
                        alt="Global EMS/ODM Facility"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex items-center">

                    {/* Left Side (Text & Line) */}
                    <div className="w-full lg:w-[65%] pl-8 md:pl-16 lg:pl-24 flex flex-col justify-center relative z-30">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight"
                        >
                            Global EMS/ODM
                        </motion.h2>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="hidden lg:flex items-center w-full origin-left my-8 relative"
                        >
                            <div className="h-px bg-white grow opacity-80"></div>
                            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] absolute right-0 translate-x-1.5"></div>
                        </motion.div>

                        {/* Mobile spacer since line is hidden */}
                        <div className="lg:hidden h-6"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="pr-8 lg:pr-16"
                        >
                            <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed max-w-2xl mb-6 break-keep">
                                오랜 제조경험으로 축적된 노하우를 바탕으로 개발부터 조달, 생산, 품질, 물류까지 아우르는 One-Stop Global EMS/ODM 서비스를 제공합니다. 또한, 글로벌 Network를 구축하고 있어 부품 및 완제품의 조달 및 판매등의 최적의 국제 무역 서비스를 제공합니다.
                            </p>
                            <ul className="text-sm md:text-base text-gray-200 font-light leading-relaxed space-y-1">
                                <li>· Global Trading 사업</li>
                                <li>· Global EMS/ODM 사업</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Box Outline (positioned relative to the container) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="hidden lg:block absolute top-[15%] bottom-[15%] right-[5%] w-[30%] border border-white/30 rounded-lg pointer-events-none z-20"
                ></motion.div>
            </div>
        </section>
    );
}
