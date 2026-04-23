import React from 'react';
import Image from 'next/image';

export function CEOMessage() {
    return (
        <section id="ceo-message" className="py-20 md:py-28 bg-white">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text */}
                    <div>
                        <p className="section-label mb-5">Message</p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-3">
                            CEO 인사말
                        </h2>
                        <div className="w-12 h-[2px] bg-[#B8965F] mb-10" />

                        <div className="space-y-5 text-[#4B5C73] leading-relaxed text-base">
                            <p>
                                에코트로닉스는 1991년 10월에 설립, 레이더, AIS등 다양한 선박용 항해
                                장비를 글로벌 수출하고 있으며 지속적인 R&D 투자를 통해 자사브랜드의
                                AI관련 장비 및 각종 솔루션 사업등 다양한 분야에 도전하고 있습니다.
                            </p>
                            <p>
                                기업의 사회적 책임에 대한 높은 이해로 사회적 약자 및 지역발전을 위한
                                기부와 공익을 위한 대외활동을 지속하고 있으며, 환경경영시스템 도입과
                                함께 ESG경영을 실천하고 있습니다.
                            </p>
                            <p>
                                고객의 신뢰를 바탕으로 고객 만족을 최우선으로 하는 에코트로닉스(주)가
                                되기 위해 전임직원이 최선을 다해 노력하겠습니다.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[#E5E8EF]">
                            <p className="text-sm font-semibold text-[#0A1628]">에코트로닉스㈜</p>
                            <p className="text-sm text-[#8896A8] mt-1">대표이사 성미숙</p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F7F8FB] border border-[#E5E8EF]">
                            <Image
                                src="/images/ceo-1.jpg"
                                alt="CEO"
                                className="object-cover object-top"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
