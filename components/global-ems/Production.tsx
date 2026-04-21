'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, MailOpen, FileSignature, Cpu } from 'lucide-react';

type Props = {}

const Production = (props: Props) => {
    return (
        <>
            <section className="w-full py-24 md:py-32 bg-[#eef3f8] overflow-hidden border-b border-gray-200">
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">

                        {/* Header Area */}
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.2] tracking-tight"
                            >
                                체계화/전문화된 생산<br />
                                중지부품 대책
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-gray-800 text-base md:text-lg max-w-xl leading-relaxed break-keep"
                            >
                                에코트로닉스는 부재의 생산중지, 품질 등의 문제로부터 고객 제품의 안정적인 공급을 위해 체계화된 생산중지부품 대책 서비스를 제공합니다.
                            </motion.p>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                            {/* Left Column (Customer) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col"
                            >
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-10 shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
                                        alt="Customer Partnership"
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">고객사</h3>
                                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                                        <span>고객사의 사업연속성에 대한 대응책 요구</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                                        <span>전문적인 변경관리를 통한 리스크 최소화</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Right Column (Eco Response) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col"
                            >
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-10 shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                        alt="Eco Response Team"
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">에코 대응책</h3>
                                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                                        <span>정형화된 대고객 보고 서비스를 통한 신속한 대응</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                                        <span>대체품조사는 물론, 시작기 및 양산까지 일괄 대응 시스템</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                                        <span>체계화된 4M, 설계 변경 시스템 제공</span>
                                    </li>
                                </ul>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Process Steps Cards Section */}
            <section className="w-full py-24 md:py-32 bg-[#eef3f8] overflow-hidden">
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">

                            {/* Card 1: 상담 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-[#1e6bb8] rounded-lg flex items-center justify-center mb-8">
                                    <MessageSquare className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-8">상담</h3>
                                <ul className="space-y-3 text-gray-600 text-[15px]">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>요구사항 접수</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>사양변경</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>추가 기능 등</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Card 2: 조사 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-[#1e6bb8] rounded-lg flex items-center justify-center mb-8">
                                    <Search className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-8">조사</h3>
                                <ul className="space-y-3 text-gray-600 text-[15px]">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>대체품 조사</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Card 3: 제안 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-[#1e6bb8] rounded-lg flex items-center justify-center mb-8">
                                    <MailOpen className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-8">제안</h3>
                                <ul className="space-y-3 text-gray-600 text-[15px]">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>대체품 제안</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>설계변경 제안</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>4M 제안</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Card 4: 반영 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-[#1e6bb8] rounded-lg flex items-center justify-center mb-8">
                                    <FileSignature className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-8">반영</h3>
                                <ul className="space-y-3 text-gray-600 text-[15px]">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>회로설계</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>기판설계 반영</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Card 5: 반영 (Second) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-[#1e6bb8] rounded-lg flex items-center justify-center mb-8">
                                    <Cpu className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-8">반영</h3>
                                <ul className="space-y-3 text-gray-600 text-[15px]">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>기판 제조</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>부품 조달</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>기판 실장</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-2 w-0.5 h-0.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span>동작 확인</span>
                                    </li>
                                </ul>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Production