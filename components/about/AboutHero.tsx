import React from 'react';
import Image from 'next/image';

export function AboutHero() {
    return (
        <section className="w-full bg-white pt-[72px]">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 pt-16 pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                        <p className="section-label mb-5">Company Overview</p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0A1628] tracking-tight leading-tight mb-6">
                            About Us
                        </h1>
                        <div className="w-12 h-[2px] bg-[#B8965F] mb-6" />
                        <p className="text-[#4B5C73] text-base md:text-lg leading-relaxed max-w-md">
                            에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로
                            선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등
                            다양한 산업 분야에서 고신뢰 기술과 제품을 제공하는 종합 기술 기업입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "1991", label: "설립 연도" },
                            { value: "30+", label: "Years of Excellence" },
                            { value: "Global", label: "해외 시장 진출" },
                            { value: "ESG", label: "지속 가능 경영" },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 bg-[#F7F8FB] border border-[#E5E8EF] rounded-xl">
                                <p className="text-2xl font-semibold text-[#0A1628] mb-1">{stat.value}</p>
                                <p className="text-xs text-[#8896A8]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full-width image */}
            <div className="w-full h-[420px] md:h-[520px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="ECOTRONIX Team"
                    className="w-full h-full object-cover object-center"
                    fill
                    priority
                />
            </div>
        </section>
    );
}
