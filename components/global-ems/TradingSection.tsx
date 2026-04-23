"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Factory, Wrench } from 'lucide-react';

export function TradingSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-[#F7F8FB] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
                            ODM 및 EMS 프로세스
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-l-[#6b9e31] relative flex flex-col h-full overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#6b9e31] flex items-center justify-center text-white shrink-0">
                                    <Lightbulb size={16} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">기획</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-12">컨셉 - 요건정의</p>
                            <div className="absolute bottom-4 right-6 text-6xl font-bold text-gray-100/80 pointer-events-none">
                                01
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-l-[#2b65f6] relative flex flex-col h-full overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#2b65f6] flex items-center justify-center text-white shrink-0">
                                    <PenTool size={16} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">설계 · 개발</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-12">설계 - 시작 - 평가</p>
                            <div className="absolute bottom-4 right-6 text-6xl font-bold text-gray-100/80 pointer-events-none">
                                02
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-l-[#f43f5e] relative flex flex-col h-full overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#f43f5e] flex items-center justify-center text-white shrink-0">
                                    <Factory size={16} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">제조</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-12">조달 - 실장조립 - 검사</p>
                            <div className="absolute bottom-4 right-6 text-6xl font-bold text-gray-100/80 pointer-events-none">
                                03
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-l-[#d946ef] relative flex flex-col h-full overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#d946ef] flex items-center justify-center text-white shrink-0">
                                    <Wrench size={16} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">보수</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-12">수리 - 해석</p>
                            <div className="absolute bottom-4 right-6 text-6xl font-bold text-gray-100/80 pointer-events-none">
                                04
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
