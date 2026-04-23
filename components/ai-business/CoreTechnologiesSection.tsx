"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    {
        title: "딥러닝 기반 이미지 분석 엔진",
        desc: "CNN, Object Detection, Segmentation 등의 기법을 활용해 다양한 불량 유형을 자동 검출. 초기에는 사람이 라벨링한 데이터를 바탕으로 모델을 학습하고, 운용 중에는 검수 데이터를 축적하여 지속 개선.",
    },
    {
        title: "현장 친화적인 UI·운영상 특징",
        desc: "라인 작업자가 직관적으로 사용할 수 있도록 불량 체크·재판정·코멘트 입력 등을 단순 UI로 구성. 관리자 화면에서는 라인별 불량 추세, 설비 가동률, Top 불량 유형 등을 한눈에 볼 수 있는 대시보드 제공.",
    },
    {
        title: "오픈 인터페이스 및 기존 시스템 연동",
        desc: "MES/ERP, 설비 인터페이스, 바코드 시스템 등과 연동할 수 있도록 API·DB 연동·파일 연동 등 다양한 방식을 제공. 기존 시스템을 그대로 두고 단계적으로 도입하는 하이브리드 방식 지원.",
    },
    {
        title: "품질·환경 국제 규격에 기반한 공정 설계",
        desc: "ESD/EOS, MSL, RoHS, ISO 9001/14001, 해양·방산 관련 규격 준수 경험을 기반으로 장비와 시스템을 실제 인증·감사에 유리한 형태로 구성. 글로벌 고객의 Audit 대응 데이터와 로그를 쉽게 꺼낼 수 있도록 설계.",
    },
];

export function CoreTechnologiesSection() {
    return (
        <section id="technology" className="py-20 md:py-28 bg-white">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="section-label mb-5">Technology</p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-4">주요 기술</h2>
                        <div className="w-12 h-[2px] bg-[#B8965F] mb-10" />

                        <div className="space-y-8">
                            {technologies.map((tech, idx) => (
                                <div key={idx} className="flex gap-5">
                                    <span className="text-xs font-semibold text-[#B8965F] tabular-nums mt-1 w-5 flex-shrink-0">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-semibold text-[#0A1628] mb-2">{tech.title}</h3>
                                        <p className="text-sm text-[#4B5C73] leading-relaxed">{tech.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="rounded-2xl overflow-hidden border border-[#E5E8EF]">
                            <img src="/images/ai_key.png" alt="AI Technology" className="w-full object-cover" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
