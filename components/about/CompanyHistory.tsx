import React from 'react';
import Image from 'next/image';

export function CompanyHistory() {
    return (
        <section id="history" className="py-24 bg-[#F5F5F5]">
            <div className="mx-auto px-8 md:px-16 lg:px-24">

                {/* Main Content Box with Borders */}
                <div className="relative border-t border-b border-gray-300">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-20 border-l-20 border-t-[#3B82F6] border-l-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-20 border-l-20 border-b-[#3B82F6] border-l-transparent"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Top Left: Title */}
                        <div className="pt-12 pb-10 lg:border-r border-gray-300 pr-8 lg:pr-12">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-1 bg-[#3B82F6]"></div>
                                <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">About Company</span>
                            </div>
                            <h2 className="text-4xl font-medium text-gray-900 tracking-tight">주요 연혁</h2>
                        </div>

                        {/* Top Right: Empty space for alignment */}
                        <div className="hidden lg:block pt-12 pb-10 pl-12"></div>

                        {/* Bottom Left: Image */}
                        {/* <div className="pt-10 pb-12 pr-0 lg:pr-12 relative h-[300px] lg:h-auto">
                            <Image
                                src="/images/about.png"
                                alt="Company History"
                                className="object-cover"
                                fill
                            />
                        </div> */}

                        {/* Bottom Right: Key Messages */}
                        <div className="pt-0 lg:pt-10 pb-12 pl-0 lg:pl-16 mt-8 lg:mt-0">
                            <h3 className="text-xl font-medium text-gray-900 mb-8">Key Messages</h3>
                            <ul className="space-y-4 text-gray-600 font-light">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span>1991년 설립 이후 지속적인 성장</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span>2003년 중앙연구소 설립(SW,HW,AI,기구설계)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span>3번에 걸친 진천공장 확장으로 제조기반 확대</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span>2013년 2천만불 수출 달성</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span>지속적인 R&D투자를 통한 기술개발</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                    <span>2023 한미경제사절단 선정등 기업 잠재력 입증</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-10 pb-12 pr-0 lg:pr-12 relative h-[300px] lg:h-auto">
                            <Image
                                src="/images/trust_1.png"
                                alt="Company History"
                                className="object-cover"
                                fill
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
