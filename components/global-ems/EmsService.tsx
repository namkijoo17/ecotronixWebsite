'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {}

const EmsService = (props: Props) => {
    return (
        <>
            <section className="w-full py-24 md:py-32 bg-[#E9F1F9] overflow-hidden">
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16 md:mb-24"
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-[#1e6bb8] mb-6">EMS Service 이점</h2>
                            <p className="text-sm md:text-base text-gray-800 font-light max-w-5xl leading-relaxed break-keep">
                                에코트로닉스의 EMS 공정은 RFID 등을 통한 실시간 이력 추적 시스템을 통해 End-to-End Traceability 시스템 구축으로 제조 품질 향상을 추구하고 있으며, 각 부문별 실시간 공정 관리 시스템 구축을 통해 Smart Factory 를 구현하여 효율적인 대응 체제로 운영되고 있습니다.
                            </p>
                        </motion.div>

                        {/* Diagram */}
                        <div className="flex flex-col gap-16 lg:gap-24">

                            {/* Top Part */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8"
                            >
                                {/* Left Box */}
                                <div className="relative border border-[#5b9bd5] p-8 md:p-10 w-full max-w-[320px] text-center bg-transparent">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#73d5e6] text-white px-8 py-2 font-medium text-lg whitespace-nowrap">제조메이커</div>
                                    <p className="text-gray-800 mt-4 text-lg leading-relaxed break-keep">기술개발과 마케팅에<br />핵심역량 집중</p>
                                </div>

                                {/* Plus Sign */}
                                <div className="relative w-56 h-56 md:w-[280px] md:h-[280px] flex-shrink-0 flex items-center justify-center my-8 lg:my-0">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-[#7bcecc] via-[#5ca0d6] to-[#4757a3]"
                                        style={{ clipPath: 'polygon(28.5% 0, 71.5% 0, 71.5% 28.5%, 100% 28.5%, 100% 71.5%, 71.5% 71.5%, 71.5% 100%, 28.5% 100%, 28.5% 71.5%, 0 71.5%, 0 28.5%, 28.5% 28.5%)' }}
                                    ></div>
                                    <div className="relative z-10 text-center text-white mt-1">
                                        <div className="font-extrabold text-4xl md:text-[46px] leading-none mb-2 tracking-wide drop-shadow-sm">Win-Win</div>
                                        <div className="text-xl md:text-[24px] font-light tracking-wide drop-shadow-sm">(상생효과)</div>
                                    </div>
                                </div>

                                {/* Right Box */}
                                <div className="relative border border-[#5b9bd5] p-8 md:p-10 w-full max-w-[320px] text-center bg-transparent">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#73d5e6] text-white px-8 py-2 font-medium text-lg whitespace-nowrap">EMS 업체</div>
                                    <p className="text-gray-800 mt-4 text-lg leading-relaxed break-keep">제조, 물류에<br />핵심역량 집중</p>
                                </div>
                            </motion.div>

                            {/* Divider */}
                            <div className="hidden lg:block w-full h-[1px] bg-[#5b9bd5] opacity-50"></div>

                            {/* Bottom Part */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0"
                            >
                                {/* Left Box */}
                                <div className="w-full lg:w-auto flex justify-center lg:justify-end lg:pr-32 relative">
                                    <div className="relative border border-[#5b9bd5] p-8 md:p-10 w-full max-w-[340px] text-gray-800 bg-transparent">
                                        {/* Arrow from Middle Box */}
                                        <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-32 h-[1px] bg-[#5b9bd5]">
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t border-l border-[#5b9bd5] -rotate-45 translate-x-[1px]"></div>
                                        </div>
                                        <ul className="list-disc pl-5 space-y-6 text-base md:text-[17px] font-light break-keep">
                                            <li>신규 시장 진입에 따른<br />투자 리스크 회피</li>
                                            <li>부채축소, 고정비 감소,<br />투자감소</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Middle Box */}
                                <div className="relative bg-gradient-to-br from-[#7bcecc] via-[#5ca0d6] to-[#4757a3] p-10 md:p-12 w-full max-w-[380px] text-center text-white z-10 shrink-0 shadow-lg">
                                    <p className="text-xl md:text-[22px] font-medium leading-relaxed break-keep">
                                        비용 절감 리스크 회피<br />고객대응력 강화
                                    </p>
                                </div>

                                {/* Right Boxes */}
                                <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:pl-32 relative">
                                    {/* Line from middle box to the vertical branch */}
                                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-[#5b9bd5]"></div>

                                    <div className="flex flex-col gap-12 w-full max-w-[340px]">
                                        {/* Top Box */}
                                        <div className="relative border border-[#5b9bd5] p-6 md:p-8 text-gray-800 w-full bg-transparent">
                                            {/* Horizontal line entering Top Box */}
                                            <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 w-16 h-[1px] bg-[#5b9bd5]">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t border-r border-[#5b9bd5] rotate-45 translate-x-[1px]"></div>
                                            </div>
                                            {/* Vertical line going down */}
                                            <div className="hidden lg:block absolute right-[calc(100%+64px)] top-1/2 h-[calc(50%+24px)] w-[1px] bg-[#5b9bd5]"></div>

                                            <ul className="list-disc pl-5 text-base md:text-[17px] font-light break-keep">
                                                <li>통상 10% 원가절감<br /><span className="text-sm text-gray-600">(규모의 경제, 높은 생산성)</span></li>
                                            </ul>
                                        </div>

                                        {/* Bottom Box */}
                                        <div className="relative border border-[#5b9bd5] p-6 md:p-8 text-gray-800 w-full bg-transparent">
                                            {/* Horizontal line entering Bottom Box */}
                                            <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 w-16 h-[1px] bg-[#5b9bd5]">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t border-r border-[#5b9bd5] rotate-45 translate-x-[1px]"></div>
                                            </div>
                                            {/* Vertical line going up */}
                                            <div className="hidden lg:block absolute right-[calc(100%+64px)] bottom-1/2 h-[calc(50%+24px)] w-[1px] bg-[#5b9bd5]"></div>

                                            <ul className="list-disc pl-5 space-y-4 text-base md:text-[17px] font-light break-keep">
                                                <li>신속, 저렴하게<br />글로벌 생산기지 확보</li>
                                                <li>생산능력의 확보와<br />유연한 생산체제 구축</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-time Comprehensive Performance Analysis Section (Image) */}
            <section className="w-full py-24 bg-[#E9F1F9] relative overflow-hidden">
                {/* Top Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        <img
                            src="/images/eco-system-fix.svg"
                            alt="실시간 종합성능분석 (Real-time Comprehensive Performance Analysis)"
                            className="w-full h-auto object-contain"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default EmsService