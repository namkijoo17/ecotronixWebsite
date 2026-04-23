"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="w-full bg-white pt-[72px]">
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
                    Global<br />EMS/ODM
                </motion.h1>
                <div className="w-12 h-[2px] bg-[#B8965F] mb-6" />
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-[#4B5C73] text-base md:text-lg leading-relaxed max-w-2xl mb-5">
                        오랜 제조경험으로 축적된 노하우를 바탕으로 개발부터 조달, 생산, 품질, 물류까지 아우르는
                        One-Stop Global EMS/ODM 서비스를 제공합니다. 글로벌 네트워크를 통해 최적의 국제 무역 서비스를 제공합니다.
                    </p>
                    <ul className="flex flex-col gap-2">
                        {["Global Trading 사업", "Global EMS/ODM 사업"].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-[#4B5C73]">
                                <span className="w-1 h-1 rounded-full bg-[#B8965F]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <div className="w-full h-[420px] md:h-[520px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10" />
                <motion.img
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src="/images/global-ems.png"
                    alt="Global EMS/ODM"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
