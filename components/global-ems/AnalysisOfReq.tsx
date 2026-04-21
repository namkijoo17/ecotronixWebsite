"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {}

const processTabs = [
    {
        id: 'design',
        label: '설계 · 개발',
        title: '설계 · 개발',
        items: [
            '하드웨어 설계',
            '펌웨어 설계',
            '소프트웨어 설계',
            '아트워크 설계',
            '기구 설계',
            '회로 설계',
            '시뮬레이션',
            '신뢰성 검증'
        ],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        color: 'from-[#2b65f6] to-[#00b4d8]'
    },
    {
        id: 'purchase',
        label: '구매',
        title: '구매',
        items: ['최적자재 조달', '독자 조달 루트', '긴급 조달 대응', '생산품목조사', '대체부품제안', '재고관리대응', '판금·성형대응', '하네스조립'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop',
        color: 'from-[#8cc63f] to-[#a8d565]'
    },
    {
        id: 'manufacturing',
        label: '양산 · 제조',
        title: '양산 · 제조',
        items: ['소량다품종라인', '24시간 가동체제', '클린룸', '0402 대응', '정전기대책적용', '자동화대응'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
        color: 'from-[#ea005e] to-[#f44380]'
    },
    {
        id: 'qa',
        label: '품질보증',
        title: '품질보증',
        items: ['SPI/AOI 등', '실시간추적시스템', '품질보증체계', '공급업체관리', '품질적합성시험', '중간/최종/선적검사'],
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop',
        color: 'from-[#f04b23] to-[#f77a59]'
    },
    {
        id: 'as',
        label: 'AS',
        title: 'AS',
        items: ['신속한 품질 대응', '기술연락서/사고보고서 등', '체계화된 지원 체계', '각종측정', '해석수리 대응', '긴급 대응'],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
        color: 'from-[#920783] to-[#e4007f]'
    }
];

const AnalysisOfReq = (props: Props) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="mx-auto">
                    {/* Large Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2b65f6] tracking-tight">
                            요구사항분석 / 사양서작성
                        </h2>
                    </motion.div>

                    {/* Tabs */}
                    <div className="w-full mb-16 md:mb-24">
                        <div className="flex w-full overflow-x-auto hide-scrollbar">
                            {processTabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(index)}
                                    className="flex-1 min-w-[120px] flex flex-col items-center group"
                                >
                                    <span className={`pb-4 text-sm md:text-base lg:text-lg font-medium transition-colors whitespace-nowrap ${activeTab === index ? `bg-clip-text text-transparent bg-gradient-to-r ${tab.color}` : 'text-gray-400 group-hover:text-gray-600'
                                        }`}>
                                        {tab.label}
                                    </span>
                                    <div className="w-full flex flex-col gap-[2px]">
                                        <div className="w-full h-[1px] bg-gray-300"></div>
                                        <div className="w-full h-[3px] relative bg-gray-100">
                                            {activeTab === index && (
                                                <motion.div
                                                    layoutId="activeProcessTab"
                                                    className={`absolute inset-0 bg-gradient-to-r ${tab.color}`}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            key={`text-${activeTab}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/3 md:pr-8"
                        >
                            <h3 className={`text-3xl md:text-4xl font-medium mb-8 bg-clip-text text-transparent bg-gradient-to-r ${processTabs[activeTab].color}`}>
                                {processTabs[activeTab].title}
                            </h3>
                            <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg pl-10">
                                {processTabs[activeTab].items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Middle: Connecting Line (Desktop Only) */}
                        <div className="hidden md:flex flex-1 items-center relative h-full z-10">
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-gray-400"></div>
                            <div className="absolute right-0 w-[14px] h-[14px] rounded-full bg-white border-[1.5px] border-gray-400 flex items-center justify-center translate-x-1/2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${processTabs[activeTab].color}`}></div>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <motion.div
                            key={`image-${activeTab}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/2 lg:w-[45%] relative z-0 mt-12 md:mt-0"
                        >
                            <div className="rounded-xl overflow-hidden border border-gray-200 p-2 bg-white shadow-sm">
                                <img
                                    src={processTabs[activeTab].image}
                                    alt={processTabs[activeTab].title}
                                    className="w-full aspect-[4/3] object-cover rounded-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalysisOfReq