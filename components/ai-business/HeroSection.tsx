"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
            <div className="section-shell relative w-full h-[550px] sm:h-[450px] md:h-auto md:aspect-21/9 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/65 to-[#020617]/25 z-10" />
                    <img
                        src="/images/ai_banner.png"
                        alt="Vision AI기반 솔루션"
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
                            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight drop-shadow-[0_10px_30px_rgba(2,6,23,0.45)]"
                        >
                            Vision AI기반 솔루션
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
                            <p className="text-sm md:text-base text-gray-100/90 font-light leading-relaxed max-w-2xl mb-6">
                                축적된 제조 기술과 인공지능 기술을 결합하여 AI기반 검사/자동화/인지 솔루션을 개발하고 있습니다. 실제의 생산 환경과 산업 현장에서 바로 적용 가능한 AI 기술을 통해 품질 향상과 생산성 혁신을 동시에 실현합니다. 비전 AI, Edge AI, 센서 융합 기술을 기반으로 안정적인 판단과 제어가 가능한 지능형 제품과 솔루션을 지속 확장하고 있습니다.
                            </p>
                            <ul className="text-sm md:text-base text-gray-100/90 font-light leading-relaxed space-y-1">
                                <li>· AI 자동화 검사기 & 솔루션</li>
                                <li>· 스마트팩토리용 Robot 솔루션</li>
                                {/* <li>· 선박용 자율운항 솔루션</li> */}
                                <li>· CSO 제약사 솔루션</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Box Outline (positioned relative to the container) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="hidden lg:block absolute top-[16%] bottom-[16%] right-[5%] w-[30%] border border-white/25 bg-white/5 backdrop-blur-[1px] rounded-2xl pointer-events-none z-20"
                ></motion.div>
            </div>
        </section>
    );
}
