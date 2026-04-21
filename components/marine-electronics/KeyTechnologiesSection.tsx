"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function KeyTechnologiesSection() {
    return (
        <section id="technology" className="w-full bg-white py-20 md:py-32">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">

                    {/* Left Text */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0066ff] mb-16 tracking-tight">
                                주요 기술
                            </h2>

                            <div className="space-y-12">
                                {/* Tech 1 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#e6007e] mb-4">
                                        국제 규격 및 표준 인터페이스 지원
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                                        NMEA 0183, NMEA 2000, IEC 61162 등 선박용 데이터 통신 규격 지원 국제 전자해도 규격(S-57/S-100 계열) 기반 전자해도 연동 구조 준비 향후 e-Navigation, 자율운항·VTS 연계에 필요한 표준 프로토콜을 확장 적용할 수 있는 구조
                                    </p>
                                </div>

                                {/* Tech 2 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#e6007e] mb-4">
                                        센서 융합 및 CPA/TCPA 분석 엔진
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                                        AIS·레이더·GPS·IMU 데이터를 융합하여 자선과 타선의 CPA(Closest Point of Approach), TCPA를 실시간 계산 위험도에 따라 색상·음향·팝업 등의 다양한 경보 방식 제공. V-Pass, VTS 데이터와 연계할 경우, 연안·연근해 통합 관제/표시 시스템으로 확장 가능
                                    </p>
                                </div>

                                {/* Tech 3 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#e6007e] mb-4">
                                        고신뢰성 하드웨어 및 선박 환경 대응 설계
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                                        장시간 연속 운전과 전원 변동(발전기·배터리 환경)에 대응하는 전원 설계 장시간 연속 운전과 전원 변동(발전기·배터리 환경)에 대응하는 전원 설계 밝은 햇빛·야간 운항 모두에서 가독성이 뛰어난 디스플레이 채택
                                    </p>
                                </div>

                                {/* Tech 4 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#e6007e] mb-4">
                                        사용 편의성을 고려한 UI/UX
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                                        해상 라인업에 맞게 버튼 크기, 색상 대비, 야간·주간 모드를 세심하게 설계 자주 사용하는 기능(줌, 화면 분할, 타깃 선택)을 최소 터치/조작으로 실행 가능하게 배치 실제 선장·조타수의 피드백을 반영한 현장 중심 UI/UX 지속 개선
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <Image
                                src="/images/Ai.png"
                                alt="Ship Control Panel and Navigation Equipment"
                                className="w-full aspect-4/3 md:aspect-3/4 lg:aspect-4/5 object-cover rounded-4xl shadow-lg"
                                width={1000}
                                height={1000}
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
