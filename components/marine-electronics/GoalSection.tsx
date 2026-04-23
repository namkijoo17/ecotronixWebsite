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
                        <img src="/images/marine_goals.png" alt="Marine Goals" className="w-full aspect-[4/3] object-cover" />
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

                        <div className="space-y-6 text-[#4B5C73] text-sm leading-relaxed">
                            <p>
                                레저·연안·소형 어선을 위한 통합 항해 플랫폼 제공. 레이더, 어군탐지기, 멀티빔 소나, AIS, GPS, 오토파일럿, 전자해도를 하나의 UI에서 다루어 선장이 한 화면으로 항해·조업·안전까지 모두 관리할 수 있는 환경을 구축합니다.
                            </p>
                            <p>
                                자율운항 시대를 대비한 "업그레이드 가능한 항해 인프라" 구축. 현재는 고성능 AutoPilot과 Rudder 제어, 진로·속력 유지, 레이더·AIS 기반 충돌 회피를 제공하고, 앞으로는 AI 알고리즘을 접목하여 자율운항 기능으로 확장합니다.
                            </p>
                            <p>
                                글로벌 레저·소형선박 시장 진입 및 수출 확대. 첨단 MFD·레이더·어탐을 통합한 패키지 수요 증가에 발맞춰 아시아·유럽 시장을 중심으로 글로벌 영향력을 넓혀갑니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
