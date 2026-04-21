import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/routing';

export function IntroToBusinessSection() {
    return (
        <section id="about" className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-3">
            <div className="relative w-full min-h-[560px] md:min-h-[640px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 z-10" />
                    <Image src="/images/business-bg.avif" alt="Business Meeting" className="w-full h-full object-cover" fill priority />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-5 h-[2px] bg-[#4D9FFF]" />
                            <span className="text-xs font-semibold tracking-[0.12em] text-white/70 uppercase">About ECOTRONIX</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-7 tracking-tight leading-tight">
                            Introduce<br />of Business
                        </h2>

                        <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed mb-10 max-w-xl">
                            에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로
                            선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등
                            다양한 산업 분야에서 고객의 가치를 제공하는 종합 기술 기업입니다.
                        </p>

                        <Link href="/about">
                            <button className="flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
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
