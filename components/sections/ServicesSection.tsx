import React from 'react';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: "01",
    title: "Marine Electronics",
    desc: "해양 선박용 항해 전자장비 개발 및 글로벌 공급",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop",
    href: "/marine-electronics",
  },
  {
    number: "02",
    title: "Vision AI 솔루션",
    desc: "AI 자동화 검사기 & 스마트팩토리 Robot 솔루션",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    href: "/ai-business",
  },
  {
    number: "03",
    title: "Global EMS/ODM",
    desc: "Global Trading, EMS 및 ODM 사업",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    href: "/global-ems",
  },
];

export function ServicesSection() {
  return (
    <section id="business" className="w-full bg-white py-20 md:py-28">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <p className="section-label mb-4">Our Services</p>
            <h2 className="section-heading">사업분야</h2>
          </div>
          <p className="text-[#4B5C73] max-w-xs text-sm leading-relaxed md:text-right">
            지속 가능한 기술로 현대 산업의 모든 분야에 혁신을 가져옵니다
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group block">
              <div className="premium-card overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/10 group-hover:bg-[#0A1628]/0 transition-colors" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-[#B8965F] tracking-[0.12em]">{service.number}</span>
                    <div className="w-8 h-8 flex items-center justify-center border border-[#E5E8EF] rounded-lg group-hover:bg-[#0A1628] group-hover:border-[#0A1628] transition-all">
                      <ArrowUpRight className="w-4 h-4 text-[#8896A8] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A1628] mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-[#4B5C73] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0A1628] rounded-2xl px-10 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8965F] mb-3">ECOTRONIX</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">스마트 비즈니스 솔루션</h3>
            <p className="text-[#8896A8] text-sm mt-2">Make confident decisions with ECOTRONIX</p>
          </div>
          <Link href="/about" className="shrink-0">
            <button className="flex items-center gap-2 bg-white text-[#0A1628] text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-[#F7F8FB] transition-colors cursor-pointer">
              더 알아보기
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
