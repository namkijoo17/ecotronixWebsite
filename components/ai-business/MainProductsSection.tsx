"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
    {
        title: "AI 자동화 검사기 & 솔루션",
        image: "/images/AI_pin_insert.png",
        features: [
            "고해상도 카메라와 조명, 다각도 촬영 구조를 이용하여 부품·PCB·기구부품의 이미지 취득",
            "딥러닝 기반 알고리즘으로 불량(미삽, 오삽, 스크래치, 오염, 변형 등)을 자동 검출",
            "OK/NG 판정 및 불량 위치 표시, 불량 유형 분류, 추세 분석 제공",
        ],
        uses: [
            "PCB 제조: SMT 후 AOI 검사에서 발견되지 않은 미세한 불량을 2차 AI 검사에서 추가 검출",
            "기구 조립품: 하우징 스크래치, 틀어짐, 간섭 등을 사람 대신 AI가 자동 검사",
            "해양기기 최종검사: 외관 요소를 자동 검수하여 출하 품질 안정화",
        ],
    },
    {
        title: "스마트팩토리용 Robot 솔루션",
        image: "/images/ai_sop_image.png",
        features: [
            "협동로봇 + 비전 카메라 + 피더를 이용해 부품 픽업-위치 보정-삽입-검사를 자동화",
            "작업자의 손기술에 의존하던 공정을 로봇으로 대체하여 품질 편차를 줄이고 생산성 향상",
            "다양한 PCB나 제품에 대응할 수 있도록 레시피 방식으로 설정·변경 가능",
        ],
        uses: [
            "전원 모듈 수삽: 커넥터, 대형 콘덴서, 트랜스 등의 수삽을 로봇이 수행하고, 납땜 전후를 비전으로 검사",
            "해양장비 PCB: 여러 모델을 생산하는 환경에서도, 레시피 전환만으로 다른 제품 수삽을 자동 처리",
        ],
    },
    {
        title: "CSO 제약사 솔루션",
        image: "/images/cso-1_img.png",
        features: [
            "계약관리: 전자계약관리 서비스",
            "실적관리: 실적 자동 등록 및 등록실적과 증빙자료 대조 확인 서비스",
            "정산관리 & 지출보고서: 자동정산 기능 및 지출보고서 통합관리",
        ],
        uses: [
            "자동발주, 정기주문, 안전/장기재고, 가납재고, 유효기간 관리",
            "식약처 대상 보고자료 자동집계/등록 및 월 보고 처리",
        ],
    },
];

export function MainProductsSection() {
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
                            <div className={`rounded-2xl overflow-hidden border border-[#E5E8EF] ${idx % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full aspect-[4/3] object-cover"
                                    width={800}
                                    height={600}
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
                                    <p className="text-xs font-semibold text-[#8896A8] uppercase tracking-wider mb-3">기능</p>
                                    <ul className="space-y-2">
                                        {product.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-[#4B5C73] leading-relaxed">
                                                <span className="w-1 h-1 rounded-full bg-[#B8965F] mt-2 flex-shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#8896A8] uppercase tracking-wider mb-3">사용 예시</p>
                                    <ul className="space-y-2">
                                        {product.uses.map((u, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-[#4B5C73] leading-relaxed">
                                                <span className="w-1 h-1 rounded-full bg-[#B8965F] mt-2 flex-shrink-0" />
                                                {u}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
