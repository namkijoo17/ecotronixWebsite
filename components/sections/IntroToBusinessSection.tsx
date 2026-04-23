import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/routing';

const stats = [
  { value: "1991", label: "설립 연도", sub: "30년+ 기술 축적" },
  { value: "Global", label: "해외 시장", sub: "다국적 파트너십" },
  { value: "100+", label: "제품 포트폴리오", sub: "다양한 산업 분야" },
  { value: "ESG", label: "지속 가능 경영", sub: "환경경영 인증" },
];

export function IntroToBusinessSection() {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

        {/* Section tag — top aligned */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8896A8]">About ECOTRONIX</span>
          <div className="flex-1 h-px bg-[#E5E8EF] max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0A1628] tracking-tight leading-[1.05] mb-8">
              사업 소개
            </h2>
            <p className="text-[#4B5C73] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로
              선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등
              다양한 산업 분야에서 고객의 가치를 제공하는 종합 기술 기업입니다.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="group p-5 border border-[#E5E8EF] rounded-xl hover:border-[#B8965F] hover:bg-[#FDFAF6] transition-all duration-300">
                  <p className="text-2xl font-semibold text-[#0A1628] mb-1">{s.value}</p>
                  <p className="text-sm font-medium text-[#0A1628] mb-0.5">{s.label}</p>
                  <p className="text-xs text-[#8896A8]">{s.sub}</p>
                </div>
              ))}
            </div>

            <Link href="/about">
              <button className="group flex items-center gap-2 text-[#0A1628] text-sm font-semibold border-b border-[#0A1628] pb-1 hover:border-[#B8965F] hover:text-[#B8965F] transition-all cursor-pointer">
                회사 소개 보기
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>

          {/* Right: Image stack */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/business-bg.avif"
                alt="ECOTRONIX Business"
                className="w-full h-full object-cover"
                fill
                priority
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0A1628] text-white rounded-xl p-5 shadow-xl w-44">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#B8965F] mb-2">Founded</p>
              <p className="text-3xl font-semibold tracking-tight">1991</p>
              <p className="text-[11px] text-white/50 mt-1">에코트로닉스 설립</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-[#E5E8EF] rounded-xl flex items-center justify-center bg-[#F7F8FB]">
              <div className="w-10 h-10 rounded-full bg-[#B8965F]/15 border border-[#B8965F]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
