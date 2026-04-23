import React from 'react';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: "01",
    title: "Marine Electronics",
    desc: "해양 선박용 항해 전자장비 개발 및 글로벌 공급",
    detail: "레이더, 어군탐지기, AutoPilot, MFD 시리즈",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop",
    href: "/marine-electronics",
  },
  {
    number: "02",
    title: "Vision AI 솔루션",
    desc: "AI 자동화 검사기 & 스마트팩토리 Robot 솔루션",
    detail: "딥러닝 검사기, 협동로봇, CSO 제약 솔루션",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    href: "/ai-business",
  },
  {
    number: "03",
    title: "Global EMS/ODM",
    desc: "Global Trading, EMS 및 ODM 사업",
    detail: "One-Stop 제조, 글로벌 무역 네트워크",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    href: "/global-ems",
  },
];

export function ServicesSection() {
  return (
    <section id="business" className="w-full bg-[#F7F8FB] py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8896A8]">Our Services</span>
              <div className="h-px bg-[#E5E8EF] w-16" />
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold text-[#0A1628] tracking-tight">사업분야</h2>
          </div>
          <p className="text-[#4B5C73] max-w-xs text-sm leading-relaxed md:text-right">
            지속 가능한 기술로 현대 산업의 모든 분야에 혁신을 가져옵니다
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {services.map((service, idx) => (
            <Link key={service.href} href={service.href} className="group block">
              <div className="bg-white border border-[#E5E8EF] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#0A1628]/6 hover:-translate-y-1 transition-all duration-400">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{idx + 1}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#B8965F] uppercase">{service.number}</span>
                    <div className="w-7 h-7 flex items-center justify-center border border-[#E5E8EF] rounded-lg group-hover:bg-[#0A1628] group-hover:border-[#0A1628] transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8896A8] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A1628] mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-[#4B5C73] leading-relaxed mb-3">{service.desc}</p>
                  <p className="text-xs text-[#8896A8] leading-relaxed border-t border-[#F2F4F8] pt-3">{service.detail}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative bg-[#0A1628] rounded-2xl px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/[0.02] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute right-32 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#B8965F]/5 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B8965F] mb-3">ECOTRONIX</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">스마트 비즈니스 솔루션</h3>
            <p className="text-[#4B5C73] text-sm">Make confident decisions with ECOTRONIX</p>
          </div>
          <Link href="/about" className="shrink-0 relative z-10">
            <button className="group flex items-center gap-2 bg-white text-[#0A1628] text-sm font-bold px-8 py-4 rounded-full hover:bg-[#B8965F] hover:text-white transition-all duration-300 cursor-pointer">
              더 알아보기
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
