import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function MapSection() {
    return (
        <section id="map" className="py-24 bg-[#f4f4f4]">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-22">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        {/* <div className="flex items-center gap-3 mb-4">
                            <div className="w-4 h-1 bg-[#C5E86C]"></div>
                            <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">LOCATION</span>
                        </div> */}
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            LOCATION
                        </h2>
                    </div>
                    <button className="flex items-center bg-[#3A3A3A] text-white rounded overflow-hidden hover:bg-black transition-colors group">
                        <span className="px-6 py-3 text-sm font-medium tracking-wide">View More</span>
                        <div className="bg-white text-black p-3 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col relative group">
                        <div className="aspect-16/10 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                                alt="본사"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                fill
                            />
                        </div>
                        <div className="p-8 md:p-10 pb-16 grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">본사</h3>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                경기도 성남시 수정구 달래내로 46,<br />
                                (파피젠테크노벨리) 성남글로벌융합센터 B동 4층
                            </p>
                        </div>
                        {/* Bottom Green Line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-[#C5E86C]"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col relative group">
                        <div className="aspect-16/10 overflow-hidden relative">
                            <Image
                                src="/images/factory.png"
                                alt="공장"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                fill
                            />
                        </div>
                        <div className="p-8 md:p-10 pb-16 grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">공장</h3>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                충북 진천군 문백면 사양2길 86<br />
                                (사양리 826)
                            </p>
                        </div>
                        {/* Bottom Green Line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-[#C5E86C]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
