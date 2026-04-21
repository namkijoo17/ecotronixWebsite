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
                        src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop"
                        alt="Marine Electronics Radar"
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
                            Marine Electronics
                        </motion.h2>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="hidden lg:flex items-center w-full origin-left my-8 relative"
                        >
                            <div className="h-[1px] bg-white flex-grow opacity-80"></div>
                            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] absolute right-0 translate-x-1.5"></div>
                        </motion.div>

                        {/* Mobile spacer since line is hidden */}
                        <div className="lg:hidden h-6"></div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-sm md:text-base text-gray-200 font-light leading-relaxed max-w-2xl pr-8 lg:pr-16"
                        >
                            에코트로닉스는 30년 이상 축적된 해양 전자 기술을 바탕으로 선박의 안전하고 효율적인 운항을 지원하는 항해·통신·제어 전자장비를 개발·제조하고 있습니다. 레이더, 어군탐지기, 오토파일럿, 통합 디스플레이 등 고신뢰 해양 솔루션을 통해 글로벌 해양 산업의 기준을 만들어갑니다. 에코트로닉스의 Marine Electronics 기술은 실제 운항 환경을 고려한 설계와 검증을 통해 레저선박부터 상업용 선박까지 폭넓게 적용되고 있습니다.
                        </motion.p>
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
