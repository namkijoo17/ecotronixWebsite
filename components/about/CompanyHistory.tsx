import React from 'react';
import Image from 'next/image';

const milestones = [
    { year: "2025", desc: "한국여성벤처협회 14대 회장 취임" },
    { year: "2023", desc: "한미경제사절단 선정" },
    { year: "2021", desc: "지역사회 발전 유공 표창 수상" },
    { year: "2017", desc: "Citi-KOSBI 여성기업인상 수상" },
    { year: "2013", desc: "2,000만불 수출 달성" },
    { year: "2003", desc: "중앙연구소 설립 (SW, HW, AI, 기구설계)" },
    { year: "1991", desc: "에코트로닉스㈜ 설립" },
];

export function CompanyHistory() {
    return (
        <section id="history" className="py-20 md:py-28 bg-[#F7F8FB]">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Header + Timeline */}
                    <div>
                        <p className="section-label mb-5">About Company</p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-10">주요 연혁</h2>

                        <div className="relative">
                            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-[#E5E8EF]" />
                            <div className="space-y-0">
                                {milestones.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-6 relative pb-8 last:pb-0">
                                        <span className="w-24 text-sm font-semibold text-[#B8965F] tabular-nums shrink-0 pt-0.5">
                                            {item.year}
                                        </span>
                                        <div className="relative flex-shrink-0">
                                            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#B8965F] mt-1" />
                                        </div>
                                        <p className="text-sm text-[#4B5C73] leading-relaxed pt-0.5">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Image + Key Messages */}
                    <div className="space-y-6">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/trust_1.png"
                                alt="Company History"
                                className="object-cover"
                                fill
                            />
                        </div>

                        <div className="bg-white border border-[#E5E8EF] rounded-xl p-8">
                            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8965F] mb-4">Key Messages</p>
                            <ul className="space-y-3">
                                {[
                                    "1991년 설립 이후 지속적인 성장",
                                    "2003년 중앙연구소 설립 (SW, HW, AI, 기구설계)",
                                    "3번에 걸친 진천공장 확장으로 제조기반 확대",
                                    "2013년 2천만불 수출 달성",
                                    "지속적인 R&D 투자를 통한 기술개발",
                                    "2023 한미경제사절단 선정 등 기업 잠재력 입증",
                                ].map((msg, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#4B5C73]">
                                        <span className="w-1 h-1 rounded-full bg-[#B8965F] mt-2 flex-shrink-0" />
                                        {msg}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
