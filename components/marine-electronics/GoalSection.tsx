"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function GoalSection() {
    return (
        <section id="goal" className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-20 md:py-32">
            <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center">

                {/* Left Image */}
                <div className="w-full lg:w-1/2 lg:pr-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-3 border border-gray-200 shadow-sm"
                    >
                        <img
                            src="/images/marine_goals.png"
                            alt="Marine Navigation and Electronics Goal"
                            className="w-full aspect-16/10 object-cover"
                        />
                    </motion.div>
                </div>

                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 z-0">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full h-px bg-gray-300 relative origin-left"
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-[3px] border-gray-300 bg-white"></div>
                    </motion.div>
                </div>

                {/* Right Text */}
                <div className="w-full lg:w-1/2 lg:pl-16 mt-12 lg:mt-0 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0078ff] inline-block border-b-[3px] border-[#0078ff] pb-3 px-1">
                            목표
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed font-medium"
                    >
                        <p>
                            레저·연안·소형 어선을 위한 통합 항해 플랫폼 제공 레저보트, 연안어선, 작업선(Workboat)까지 폭넓게 사용할 수 있는 통합 항해·조업 플랫폼을 목표로 합니다. 레이더, 어군탐지기, 멀티빔 소나, AIS, GPS, 오토파일럿, 전자해도를 하나의 UI에서 다루어, 선장이 한 화면으로 항해·조업·안전까지 모두 관리할 수 있는 환경을 만드는 것이 핵심입니다.
                        </p>
                        <p>
                            자율운항 시대를 대비한 "업그레이드 가능한 항해 인프라" 구축 현재는 고성능 AutoPilot과 Rudder 제어, 진로·속력 유지, 레이더·AIS 기반 충돌 회피 지원 기능을 제공하고, 앞으로는 센서 융합과 AI 알고리즘을 접목하여 근접 물표 인지, 위험도 판단, 지능형 경로 재설정 등 자율운항 기능으로 확장해 나갑니다. 즉, 지금 설치하는 장비가 향후 자율운항 기능 추가를 위한 플랫폼이 되도록 설계합니다.
                        </p>
                        <p>
                            글로벌 레저·소형선박 시장 진입 및 수출 확대 세계적으로 레저보트·소형선박 시장은 꾸준히 성장하고 있으며, 특히 아시아·유럽을 중심으로 첨단 MFD·레이더·어탐을 통합한 패키지 수요가 증가하고 있습니다.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
