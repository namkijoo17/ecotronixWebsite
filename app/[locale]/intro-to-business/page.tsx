import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/routing';

export default function Business() {
    return (
        <div className="w-full flex flex-col">
            {/* Hero Section */}
            <section className="w-full max-w-[1920px] pt-6 mx-auto px-4 md:px-8 pb-8 flex-grow flex flex-col">
                <div className="section-shell relative w-full flex-grow min-h-[600px] md:min-h-[700px] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/58 to-[#020617]/25 z-10" />
                        <Image
                            src="/images/business-bg.avif"
                            alt="Business Meeting"
                            className="w-full h-full object-cover"
                            fill
                            priority
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(2,6,23,0.45)]">
                                Introduce<br />of Business
                            </h1>

                            <div className="flex items-center w-full max-w-[800px] mb-6">
                                <div className="h-[1px] bg-gradient-to-r from-transparent to-white flex-grow opacity-70"></div>
                                <div className="w-3 h-3 bg-white rounded-full ring-[6px] ring-black/40 ml-1"></div>
                            </div>

                            <p className="text-lg md:text-xl text-gray-100/90 font-light leading-relaxed mb-12 max-w-3xl">
                                에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로<br />
                                선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등<br />
                                다양한 산업 분야에서 고객의 가치를 제공하는 종합 기술 기업입니다.
                            </p>

                            <Link href="/about">
                                <button className="flex items-center bg-white text-gray-900 rounded-xl group hover:bg-gray-100 transition-all w-max px-6 py-3.5">
                                    <span className="text-sm font-semibold tracking-wide">상세페이지로</span>
                                    <div className="ml-3 bg-[#0057FF] text-white rounded-lg w-8 h-8 flex items-center justify-center">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
