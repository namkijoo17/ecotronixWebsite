import React from 'react';
import Image from 'next/image';

export function AboutHero() {
    return (
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8 flex flex-col">
            <div className="relative w-full flex-grow min-h-[600px] md:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="About Us Team"
                        className="w-full h-full object-cover"
                        fill
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16 lg:px-24">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center relative h-full">
                        <div className="flex flex-col justify-center h-full max-w-2xl">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 tracking-tight leading-tight">
                                About us
                            </h1>

                            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mt-6">
                                에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로 선박<br />
                                용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등 다양한<br />
                                산업 분야에서 고신뢰 기술과 제품을 제공하는 종합 기술 기업입니다.
                            </p>
                        </div>

                        {/* Line */}
                        <div className="absolute top-1/2 -left-8 md:-left-16 lg:-left-24 right-0 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-white opacity-80 hidden md:block"></div>
                    </div>

                    {/* Decorative Box */}
                    <div className="w-[350px] md:w-[450px] lg:w-[500px] h-[450px] md:h-[550px] lg:h-[600px] border border-white/40 rounded-2xl flex-shrink-0 relative hidden md:block pointer-events-none">
                        {/* Dot */}
                        <div className="absolute top-1/2 -left-[6px] -translate-y-1/2 w-3 h-3 bg-white rounded-full ring-[6px] ring-black/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
