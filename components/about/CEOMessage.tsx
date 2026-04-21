import React from 'react';
import Image from 'next/image';

export function CEOMessage() {
    return (
        <section id="ceo-message" className="py-24 bg-white relative overflow-hidden">
            <div className="mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="flex-1 relative z-10 w-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-4 h-[3px] bg-[#6B8E23]"></div>
                            <span className="text-sm font-bold tracking-wider text-gray-800 uppercase">Message</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-12 tracking-tight">
                            <span className="text-[#6B8E23]">CEO</span>인사말
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                            <p>
                                에코트로닉스는 1991년 10월에 설립, 레이더, AIS등 다양한 선박용 항해<br className="hidden md:block" />
                                장비를 글로벌 수출하고 있으며 지속적인 R&D 투자를 통해 자사브랜드의<br className="hidden md:block" />
                                AI관련 장비 및 각종 솔루션 사업등 다양한 분야에 도전하고 있습니다.
                            </p>
                            <p>
                                기업의 사회적 책임에 대한 높은 이해로 사회적 약자 및 지역발전을 위한<br className="hidden md:block" />
                                기부와 공익을 위한 대외활동을 지속하고 있으며, 환경경영시스템 도입과<br className="hidden md:block" />
                                함께 ESG경영을 실천하고 있습니다
                            </p>
                            <p>
                                고객의 신뢰를 바탕으로 고객 만족을 최우선으로 하는 에코트로닉스(주)가<br className="hidden md:block" />
                                되기 위해 전임직원이 최선을 다해 노력하겠습니다.
                            </p>
                        </div>

                        {/* Connecting Line (Desktop only) */}
                        <div className="absolute top-1/2 left-full w-24 h-[1px] bg-gray-300 hidden lg:block -translate-y-1/2"></div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full relative">
                        <div className="relative p-2 border border-gray-300 bg-white aspect-square overflow-hidden">
                            <div className="absolute inset-0 -top-10">
                                <Image
                                    src="/images/ceo-1.jpg"
                                    alt="CEO"
                                    className="object-cover object-top"
                                    fill
                                />
                            </div>
                            {/* Connecting Dot */}
                            <div className="absolute top-1/2 -left-[6px] w-3 h-3 bg-white border-2 border-gray-300 rounded-full -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
