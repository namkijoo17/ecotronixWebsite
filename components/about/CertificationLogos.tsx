import React from 'react';
import { ShipWheel, Check } from 'lucide-react';

export function CertificationLogos() {
    return (
        <section className="py-12 bg-white">
            <div className="mx-auto px-8 md:px-16 lg:px-24">
                <div className="border-t border-gray-200 pt-12">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">

                        {/* CE */}
                        <div className="flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>CE</span>
                        </div>

                        {/* UL */}
                        <div className="flex items-center justify-center">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-gray-900 flex items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>UL</span>
                            </div>
                        </div>

                        {/* NMEA */}
                        <div className="flex items-center justify-center">
                            <div className="bg-[#1D4ED8] text-white px-2 py-1 rounded flex flex-col items-center justify-center leading-none font-black text-xl md:text-2xl tracking-tighter italic">
                                <span className="border-b-2 border-white/30 w-full text-center pb-0.5 mb-0.5">NM</span>
                                <span>EA</span>
                            </div>
                        </div>

                        {/* Wheelmark */}
                        <div className="flex items-center justify-center">
                            <ShipWheel className="w-12 h-12 md:w-14 md:h-14 text-gray-900" strokeWidth={1.5} />
                        </div>

                        {/* DNV */}
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-8 border border-gray-400 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
                                <span className="text-[8px] font-bold z-10 bg-white px-1">DNV</span>
                            </div>
                            <span className="text-xs md:text-sm font-bold text-gray-700">DNV MED/MER-D 인정</span>
                        </div>

                        {/* ISO 9001 */}
                        <div className="flex items-center justify-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-[3px] border-[#2563EB] flex flex-col items-center justify-center relative bg-white">
                                <span className="text-[10px] md:text-xs font-bold text-[#2563EB] leading-none mt-1">ISO</span>
                                <span className="text-xs md:text-sm font-black text-[#2563EB] leading-none">9001</span>
                                <div className="absolute -bottom-2 bg-[#2563EB] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                            </div>
                        </div>

                        {/* ISO 14001 */}
                        <div className="flex items-center justify-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-[3px] border-[#16A34A] flex flex-col items-center justify-center relative bg-white">
                                <span className="text-[10px] md:text-xs font-bold text-[#16A34A] leading-none mt-1">ISO</span>
                                <span className="text-xs md:text-sm font-black text-[#16A34A] leading-none">14001</span>
                                <div className="absolute -bottom-2 bg-[#16A34A] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                            </div>
                        </div>

                        {/* ISO 45001 */}
                        <div className="flex items-center justify-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-[3px] border-[#DC2626] flex flex-col items-center justify-center relative bg-white">
                                <span className="text-[10px] md:text-xs font-bold text-[#DC2626] leading-none mt-1">ISO</span>
                                <span className="text-xs md:text-sm font-black text-[#DC2626] leading-none">45001</span>
                                <div className="absolute -bottom-2 bg-[#DC2626] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
