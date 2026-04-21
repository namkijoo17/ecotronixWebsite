"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function CoreTechnologiesSection() {
    return (
        <section id="technology" className="py-20 md:py-32 bg-white">
            <div className="px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0066ff]">주요 기술</h2>
                </motion.div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex flex-col space-y-12"
                    >
                        {/* Tech 1 */}
                        <div>
                            <h4 className="text-xl md:text-2xl font-medium text-[#e6007e] mb-4">딥러닝 기반 이미지 분석 엔진</h4>
                            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                CNN, Object Detection, Segmentation 등의 기법을 활용해 다양한 불량 유형을 자동 검출 초기에는 사람이 라벨링한 데이터를 바탕으로 모델을 학습하고, 운용 중에는 검수 데이터를 축적하여 지속 개선 False Alarm(과검출)과 Miss(미검출)를 줄이기 위한 하이브리드 방식(룰 + AI) 도입 가능
                            </p>
                        </div>

                        {/* Tech 2 */}
                        <div>
                            <h4 className="text-xl md:text-2xl font-medium text-[#e6007e] mb-4">현장 친화적인 UI·운영상 특징</h4>
                            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                라인 작업자가 직관적으로 사용할 수 있도록, 불량 체크·재판정·코멘트 입력 등을 단순 UI로 구성 관리자 화면에서는 라인별 불량 추세, 설비 가동률, Top 불량 유형 등을 한눈에 볼 수 있는 대시보드 제공 웹 기반 또는 로컬 전용 등 고객 환경에 맞는 배포 방식 지원
                            </p>
                        </div>

                        {/* Tech 3 */}
                        <div>
                            <h4 className="text-xl md:text-2xl font-medium text-[#e6007e] mb-4">오픈 인터페이스 및 기존 시스템 연동</h4>
                            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                MES/ERP, 설비 인터페이스, 바코드 시스템 등과 연동할 수 있도록 API·DB 연동·파일 연동 등 다양한 방식을 제공 기존 시스템을 그대로 두고, AI 검사기나 부분 MES만 단계적으로 붙이는 하이브리드 도입이 가능하도록 설계
                            </p>
                        </div>

                        {/* Tech 4 */}
                        <div>
                            <h4 className="text-xl md:text-2xl font-medium text-[#e6007e] mb-4">품질·환경 국제 규격에 기반한 공정 설계</h4>
                            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                ESD/EOS, MSL, RoHS, ISO 9001/14001, 일부 해양·방산 관련 규격 준수 경험을 기반으로, 장비와 시스템을 실제 인증·감사에 유리한 형태로 구성 고객사가 글로벌 고객의 Audit을 받을 때, 시스템에서 데이터와 로그를 쉽게 꺼내서 근거로 제시할 수 있도록 설계
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="rounded-4xl overflow-hidden shadow-lg sticky top-32">
                            <img
                                src="/images/ai_key.png"
                                alt="Automated Inspection Robot"
                                className="w-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
