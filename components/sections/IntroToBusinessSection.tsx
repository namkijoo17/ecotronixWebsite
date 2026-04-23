import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/routing';

export function IntroToBusinessSection() {
    return (
        <section id="about" className="w-full bg-[#F7F8FB] py-20 md:py-28">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Image */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/business-bg.avif"
                                alt="ECOTRONIX Business"
                                className="w-full h-full object-cover"
                                fill
                                priority
                            />
                        </div>
                        {/* Floating stat */}
                        <div className="absolute -bottom-6 -right-6 bg-white border border-[#E5E8EF] rounded-xl p-6 shadow-sm">
                            <p className="text-3xl font-semibold text-[#0A1628] tracking-tight">1991</p>
                            <p className="text-xs text-[#8896A8] mt-1">설립 연도</p>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="lg:pl-6">
                        <p className="section-label mb-5">About ECOTRONIX</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0A1628] tracking-tight leading-tight mb-8">
                            사업 소개
                        </h2>

                        <div className="w-12 h-[2px] bg-[#B8965F] mb-8" />

                        <p className="text-[#4B5C73] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                            에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로
                            선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등
                            다양한 산업 분야에서 고객의 가치를 제공하는 종합 기술 기업입니다.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { value: "30+", label: "기술 전문성" },
                                { value: "Global", label: "해외 네트워크" },
                                { value: "100+", label: "제품 포트폴리오" },
                                { value: "ESG", label: "지속 가능 경영" },
                            ].map((item) => (
                                <div key={item.label} className="p-4 bg-white border border-[#E5E8EF] rounded-xl">
                                    <p className="text-xl font-semibold text-[#0A1628] mb-1">{item.value}</p>
                                    <p className="text-xs text-[#8896A8]">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/about">
                            <button className="btn-primary">
                                회사 소개
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
