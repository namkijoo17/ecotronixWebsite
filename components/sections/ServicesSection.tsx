import React from 'react';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Marine Electronics",
    desc: "해양 선박용 항해 전자장비 개발",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop",
    href: "/marine-electronics",
  },
  {
    title: "Vision AI 솔루션",
    desc: "AI 자동화 검사기 & 스마트팩토리 Robot 솔루션",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    href: "/ai-business",
  },
  {
    title: "Global EMS/ODM",
    desc: "Global Trading, EMS 및 ODM 사업",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    href: "/global-ems",
  },
];

export function ServicesSection() {
  return (
    <section id="business" className="w-full py-20 md:py-28">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="section-shell p-6 md:p-10 lg:p-12">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-5 h-[2px] bg-[#0057FF]" />
              <span className="text-xs font-semibold tracking-[0.12em] text-[#0057FF] uppercase">ECOTRONIX&apos;s Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">사업분야</h2>
          </div>
          <p className="text-gray-600 max-w-sm text-base leading-relaxed">
            지속 가능한 기술을 통해 현대 생활의 모든 분야에 혁신을 가져옵니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {services.map((service) => (
            <Link key={service.href} href={service.href}
              className="group relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden block border border-slate-200/70">
              <img src={service.image} alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1.5 leading-snug">{service.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center group-hover:bg-[#0057FF] group-hover:border-[#0057FF] transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-[#0A1628] rounded-2xl px-8 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-[#12203A]">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-1 h-14 bg-[#0057FF] rounded-full flex-shrink-0" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">Smart Business Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Make confident decisions with ECOTRONIX</p>
            </div>
          </div>
          <Link href="/about" className="relative z-10 flex items-center gap-2 bg-[#0057FF] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#0046CC] transition-colors shrink-0 cursor-pointer">
            더 알아보기
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
