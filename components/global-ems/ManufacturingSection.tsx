"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Network, RefreshCw, Share2, ShoppingBag, Package } from 'lucide-react';

export function ManufacturingSection() {
    return (
        <>
            {/* ODM Process Section */}
            <section id="odm" className="w-full py-24 md:py-32 bg-white overflow-hidden">
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                    <div className="mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2b65f6] tracking-tight">
                                개발제조위탁(ODM) 프로세스
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#f0f4f8] flex items-center justify-center mb-6">
                                    <FileText className="text-[#2b65f6]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">사양정의</h3>
                                <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                    <li>고객요구사항 검토 및 상세 정의</li>
                                    <li>견적 제출</li>
                                </ul>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#f0f4f8] flex items-center justify-center mb-6">
                                    <Network className="text-[#2b65f6]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">설계</h3>
                                <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                    <li>· 소프트웨어 설계 하드웨어 설계</li>
                                    <li>· 기판 설계 기구 설계</li>
                                    <li>· 시작기 부품 조달</li>
                                </ul>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#f0f4f8] flex items-center justify-center mb-6">
                                    <RefreshCw className="text-[#2b65f6]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">시작기 제작</h3>
                                <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                    <li>시작기 제작 1차~n차</li>
                                </ul>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#f0f4f8] flex items-center justify-center mb-6">
                                    <Share2 className="text-[#2b65f6]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">평가</h3>
                                <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                    <li>· 신뢰성 검증</li>
                                    <li>· 각종 시험 평가</li>
                                    <li>· 각종 인증 검토</li>
                                </ul>
                            </motion.div>

                            {/* Card 5 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#f0f4f8] flex items-center justify-center mb-6">
                                    <ShoppingBag className="text-[#2b65f6]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">구매</h3>
                                <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                    <li>양산용 원부자재 조달</li>
                                </ul>
                            </motion.div>

                            {/* Card 6 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#f0f4f8] flex items-center justify-center mb-6">
                                    <Package className="text-[#2b65f6]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">양산이행</h3>
                                <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                    <li>프리프로 생산 및 검증 양산</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
