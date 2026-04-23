"use client";

import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        title: "통합 항해 표시 장치 – MFD 시리즈",
        image: "/images/marine-ai.png",
        features: "레이더, 플로터, 전자해도(ENC), 어군탐지기, 멀티빔 소나, AIS, GPS 정보를 한 화면에서 통합 표시. 분할 화면, 3~4분할 레이아웃, 사용자 지정 모드 지원.",
        use: "레저보트 항로 계획, 연안 어선 조업 효율 극대화, 작업선·관공선 안전 접근 지원",
    },
    {
        title: "AutoPilot 및 Rudder 제어 시스템",
        image: "/images/marine-autopilot-1.png",
        features: "NMEA 2000 / NMEA0183 기반 선박 정보 실시간 수집. 설정 코스·웨이포인트에 따른 자동 조타, 직선 유지, 곡선 항로 추종 기능 제공.",
        use: "연안 운항 자동 항로 유지, 장거리 항해 연료 효율 향상, 센서 기반 자동 경로 재설정",
    },
    {
        title: "멀티빔 소나 및 고성능 어군탐지기 연동 솔루션",
        image: "/images/marine_sonar.png",
        features: "고해상도 3D 해저 지형과 어군 분포를 실시간 시각화. PBG 생성, 수심 음영지도, 등고선 지도 등 다양한 지도 모드 지원.",
        use: "근해 선망·트롤 어군 3D 파악, 레저 낚시 개인 맞춤형 포인트 지도 활용",
    },
    {
        title: "레이더 기반 항해 안전 시스템",
        image: "/images/marine_radar.png",
        features: "돔형 레이더와 MFD 간 이더넷 연동. Fast Target Tracking, 오프센터 기능, AIS와 연동한 충돌 위험 표시.",
        use: "항만 입·출항 시 시계 불량 상황 대응, 야간 조업 충돌·접촉 사고 예방",
    },
];

export function ProductsSection() {
    return (
        <section id="products" className="w-full bg-[#F7F8FB] py-20 md:py-28">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">
                <p className="section-label mb-5">Products</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-14">주요 제품</h2>

                <div className="space-y-16">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
                        >
                            <div className={idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                                />
                            </div>
                            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                                <div>
                                    <span className="text-xs font-semibold tracking-[0.12em] text-[#B8965F] uppercase">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-[#0A1628] mt-2 tracking-tight">{product.title}</h3>
                                </div>
                                <div className="h-px bg-[#E5E8EF]" />
                                <div>
                                    <p className="text-xs font-semibold text-[#8896A8] uppercase tracking-wider mb-2">기능</p>
                                    <p className="text-sm text-[#4B5C73] leading-relaxed">{product.features}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#8896A8] uppercase tracking-wider mb-2">사용 예시</p>
                                    <p className="text-sm text-[#4B5C73] leading-relaxed">{product.use}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
