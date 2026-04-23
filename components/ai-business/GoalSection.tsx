"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function GoalSection() {
    return (
        <section id="goal" className="w-full bg-white py-20 md:py-28">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-2xl overflow-hidden border border-[#E5E8EF]"
                    >
                        <img src="/images/ai-1.png" alt="AI Solutions" className="w-full aspect-[4/3] object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="section-label mb-5">Goal</p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-4">목표</h2>
                        <div className="w-12 h-[2px] bg-[#B8965F] mb-8" />

                        <div className="space-y-5 text-[#4B5C73] text-sm leading-relaxed">
                            <p>
                                자사 공장을 레퍼런스 스마트팩토리로 고도화. SMT-AOI-수삽-조립-검사-출하에 이르는 전 공정을 디지털화·자동화하여, 고객사에게 스마트팩토리 솔루션을 제공합니다.
                            </p>
                            <p>
                                AI 검사·로봇을 기반으로 한 생산 자동화 솔루션 사업화. 다양한 불량·다품종 생산 환경에서도 사람이 하던 외관 검사를 AI가 자동으로 수행할 수 있도록 기술을 고도화하고 있습니다.
                            </p>
                            <p>
                                고신뢰성 EMS/ODM 경쟁력 확보 및 대외 솔루션 제공. 해양, 방산, 항공, 산업용 장비 등 고신뢰성이 중요한 시장에서 AI·MES 기반 솔루션으로 품질과 추적성을 확보합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
