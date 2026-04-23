import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function MapSection() {
    return (
        <section id="map" className="py-20 md:py-28 bg-white">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

                <p className="section-label mb-5">Location</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-12">오시는 길</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "본사",
                            address: "경기도 성남시 수정구 달래내로 46,\n성남글로벌융합센터 B동 4층 (13449)",
                            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
                        },
                        {
                            title: "공장",
                            address: "충북 진천군 문백면 사양2길 86\n(사양리 826)",
                            image: "/images/factory.png",
                        },
                    ].map((loc) => (
                        <div key={loc.title} className="premium-card overflow-hidden group">
                            <div className="aspect-[16/9] overflow-hidden relative">
                                <Image
                                    src={loc.image}
                                    alt={loc.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    fill
                                />
                            </div>
                            <div className="p-7">
                                <div className="flex items-center gap-2 mb-4">
                                    <MapPin className="w-4 h-4 text-[#B8965F]" />
                                    <h3 className="text-lg font-semibold text-[#0A1628]">{loc.title}</h3>
                                </div>
                                <p className="text-sm text-[#4B5C73] leading-relaxed whitespace-pre-line">
                                    {loc.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
