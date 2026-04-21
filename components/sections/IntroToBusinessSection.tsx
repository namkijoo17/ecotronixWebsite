import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/routing';

export function IntroToBusinessSection() {
    return (
        <section id="about" className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-3">
            <div className="section-shell relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#071327]/70 to-[#0f1d39]/45 z-10" />
                    <Image src="/images/business-bg.avif" alt="Business Meeting" className="w-full h-full object-cover" fill priority />
                </div>

                <div className="absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 px-8 md:px-16 lg:px-20 py-12 items-end">
                    <div className="max-w-2xl self-center">
                        <span className="section-title-chip mb-7">About ECOTRONIX</span>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-7 tracking-tight leading-[1.02]">
                            Introduce<br />of Business
                        </h2>

                        <p className="text-base md:text-lg text-slate-200 font-normal leading-relaxed mb-10 max-w-xl">
                            에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로
                            선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등
                            다양한 산업 분야에서 고객의 가치를 제공하는 종합 기술 기업입니다.
                        </p>

                        <Link href="/about">
                            <button className="flex items-center gap-2 bg-[#4f7cff] text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-[#345af0] transition-colors cursor-pointer">
                                회사 소개
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>

                    <div className="hidden lg:block rounded-2xl border border-slate-400/35 bg-[#0a1325]/70 backdrop-blur-xl p-7">
                        <p className="text-xs tracking-[0.18em] uppercase text-slate-300 mb-5">Core Value</p>
                        <div className="space-y-4 text-white">
                            <p className="text-2xl font-semibold">30+ Years</p>
                            <p className="text-sm text-slate-300">전자·제조 기술 전문성</p>
                            <div className="h-px bg-slate-500/40" />
                            <p className="text-2xl font-semibold">Global Network</p>
                            <p className="text-sm text-slate-300">해외 공급망 및 산업 파트너십</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
