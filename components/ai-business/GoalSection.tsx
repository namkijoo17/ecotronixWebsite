"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function GoalSection() {
    return (
        <section id="goal" className="w-full py-24 md:py-32 bg-white overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center">

                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-1/2 left-[calc(50%-3rem)] w-24 h-px bg-gray-300 -translate-y-1/2 z-20">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-gray-300 bg-white shadow-sm"></div>
                    </div>

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 pr-0 lg:pr-12 relative z-10 mb-12 lg:mb-0"
                    >
                        <div className="bg-white border border-gray-200 p-3 shadow-sm">
                            <img
                                src="/images/ai-1.png"
                                alt="Robot Arm"
                                className="w-full aspect-4/3 object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 pl-0 lg:pl-12 relative z-10"
                    >
                        <h3 className="text-5xl md:text-6xl font-medium text-[#0066ff] mb-10 tracking-tight">목표</h3>
                        <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg font-light">
                            <p>
                                자사 공장을 레퍼런스 스마트팩토리로 고도화 SMT-AOI-수삽-조립-검사-출하에 이르는 전 공정을 디지털화·자동화하여, 고객사에게 "우리가 쓰는 수준 그대로"의 스마트팩토리 솔루션을 제공하는 것이 목표입니다.
                            </p>
                            <p>
                                AI 검사·로봇을 기반으로 한 생산 자동화 솔루션 사업화 기존 룰 기반 AOI가 놓치기 쉬운 다양한 불량·다품종 생산 환경에서도 사람이 하던 외관 검사를 AI가 자동으로 수행할 수 있도록 기술을 고도화하고 있습니다.
                            </p>
                            <p>
                                고신뢰성 EMS/ODM 경쟁력 확보 및 대외 솔루션 제공 해양, 방산, 항공, 산업용 장비 등 고신뢰성이 중요한 시장에서 요구하는 품질과 추적성을 AI·MES 기반 솔루션으로 확보하고, 이를 고객사의 생산라인에도 적용할 수 있도록 컨설팅-구축-운영까지 제공하는 것이 목표입니다.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
