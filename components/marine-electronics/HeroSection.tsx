"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="w-full bg-white pt-[72px]">
            {/* Text area */}
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 pt-16 pb-12">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-label mb-5"
                >
                    Business Area
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0A1628] tracking-tight leading-tight mb-6"
                >
                    Marine<br />Electronics
                </motion.h1>
                <div className="w-12 h-[2px] bg-[#B8965F] mb-6" />
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[#4B5C73] text-base md:text-lg leading-relaxed max-w-2xl"
                >
                    에코트로닉스는 30년 이상 축적된 해양 전자 기술을 바탕으로 선박의 안전하고 효율적인
                    운항을 지원하는 항해·통신·제어 전자장비를 개발·제조하고 있습니다. 레이더, 어군탐지기,
                    오토파일럿, 통합 디스플레이 등 고신뢰 해양 솔루션을 통해 글로벌 해양 산업의 기준을 만들어갑니다.
                </motion.p>
            </div>

            {/* Full-width image */}
            <div className="w-full h-[420px] md:h-[520px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10" />
                <motion.img
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop"
                    alt="Marine Electronics"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
