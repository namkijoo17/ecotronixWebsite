"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function MainProductsSection() {
    return (
        <section id="products" className="w-full py-24 md:py-32 bg-[#f4f4f4] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1"
                    >
                        <h3 className="text-4xl md:text-5xl font-medium text-[#0066ff] mb-12 tracking-tight">주요 제품</h3>

                        <h4 className="text-2xl md:text-3xl font-medium text-[#e6007e] mb-10">AI 자동화 검사기 & 솔루션</h4>

                        <div className="space-y-10">
                            {/* Features */}
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">기능</h5>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        고해상도 카메라와 조명, 다각도 촬영 구조를 이용하여 부품·PCB·기구부품의 이미지를 취득
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        딥러닝 기반 알고리즘으로 불량(미삽, 오삽, 스크래치, 오염, 변형 등)을 자동 검출
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        OK/NG 판정 뿐 아니라, 불량 위치 표시, 불량 유형 분류, 추세 분석 제공
                                    </li>
                                </ul>
                            </div>

                            {/* Use Cases */}
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">사용 예시</h5>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1">PCB 제조:</span> SMT 후 AOI 검사에서 발견되지 않은 미세한 불량을 2차 AI 검사에서 추가 검출
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1">기구 조립품:</span> 하우징 스크래치, 틀어짐, 간섭 등을 사람 대신 AI가 자동 검사
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1">해양기기 최종검사:</span> 방수패킹 누락, 커넥터 결착 상태, 라벨 표기 등 외관 요소를 자동 검수하여 출하 품질 안정화
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                    >
                        <div className="rounded-4xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/AI_pin_insert.png"
                                alt="Factory Conveyor System"
                                className="w-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Divider between 1 and 2 */}
                <div className="max-w-7xl mx-auto my-16 md:my-24 border-t border-gray-300/80"></div>

                {/* Product 2 */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="rounded-4xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/ai_sop_image.png"
                                alt="Robotic Cell"
                                className="w-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <h4 className="text-2xl md:text-3xl font-medium text-[#e6007e] mb-10">스마트팩토리용 Robot 솔루션</h4>

                        <div className="space-y-10">
                            {/* Features */}
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">기능</h5>
                                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                    협동로봇 + 비전 카메라 + 피더를 이용해 부품 픽업-위치 보정-삽입-검사를 자동화 작업자의 손기술에 의존하던 공정을 로봇으로 대체하여 품질 편차를 줄이고 생산성 향상 다양한 PCB나 제품에 대응할 수 있도록 레시피 방식으로 설정·변경 가능
                                </p>
                            </div>

                            {/* Use Cases */}
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">사용 예시</h5>
                                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                    전원 모듈 수삽: 커넥터, 대형 콘덴서, 트랜스 등의 수삽을 로봇이 수행하고, 납땜 전후를 비전으로 검사 해양장비 PCB: 동일 라인에서 여러 모델을 생산하는 환경에서도, 레시피 전환만으로 다른 제품 수삽을 자동 처리
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Divider between 2 and 3 */}
                {/* <div className="max-w-7xl mx-auto my-16 md:my-24 border-t border-gray-300/80"></div> */}

                {/* Product 3 */}
                {/* <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1"
                    >
                        <h4 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10">3. MES 기반 생산이력·품질 관리 시스템</h4>

                        <div className="space-y-10">
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">기능</h5>
                                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                    생산지시, 라인별 실적, 설비 가동률, 불량 현황을 실시간으로 수집·시각화 자재 입고-투입-소진, 공정별 검사 결과, 작업자 정보, Lot/시리얼 정보를 통합 관리 정전기(EOS/ESD), MSL 관리, RoHS, 베이킹·제습함 이력 등 환경 정보를 함께 관리하여 향후 Traceability와 인증/감사 대응에 필요한 근거 데이터 제공
                                </p>
                            </div>

                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">사용 예시</h5>
                                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed break-keep">
                                    해양장비 EMS: 특정 선박 프로젝트에서 사용된 부품·PCB·생산 이력을 시리얼 기준으로 역추적하여, 나중에 A/S·리콜이 필요할 경우 해당 Lot만 선별 대응 가능 외부 고객 공장: MES를 도입하여 작업지시·자재·검사·출하를 디지털로 연결, 수기 관리에서 탈피하고 공정 투명성을 확보
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                    >
                        <div className="rounded-4xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/MES_IMG.png"
                                alt="Ship Navigation Bridge"
                                className="w-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </motion.div>

                </div> */}

                {/* Divider between 3 and 4 */}
                <div className="max-w-7xl mx-auto my-16 md:my-24 border-t border-gray-300/80"></div>

                {/* Product 4 */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <h4 className="text-2xl md:text-3xl font-medium text-[#e6007e] mb-10">CSO 제약사 솔루션</h4>

                        <div className="space-y-10">
                            {/* Features */}
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">기능</h5>
                                <ul className="space-y-4 text-base md:text-lg font-light">
                                    {[
                                        { label: '계약관리', desc: '전자계약관리 서비스' },
                                        { label: '실적관리', desc: '실적 자동 등록 및 등록실적과 증빙자료 대조 확인 서비스' },
                                        { label: '정산관리 & 지출보고서', desc: '자동정산 기능 및 지출보고서 통합관리' },
                                    ].map(({ label, desc }) => (
                                        <li key={label} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                            <span className="text-gray-600 leading-relaxed break-keep">
                                                <span className="font-medium text-gray-800 mr-1">{label}:</span>
                                                {desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Use Cases */}
                            <div>
                                <h5 className="text-xl font-medium text-gray-800 mb-4">사용 예시</h5>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                        자동발주, 정기주문, 안전/장기재고, 가납재고, 유효기간 관리
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                        식약처 대상 보고자료 자동집계/등록 및 월 보고 처리
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="rounded-4xl overflow-hidden shadow-lg bg-white">
                            <Image
                                src="/images/cso-1_img.png"
                                alt="CSO AI Model Architecture Diagram"
                                className="w-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
