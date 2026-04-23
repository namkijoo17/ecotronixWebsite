"use client";

import React, { useState } from "react";
import { X, Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="w-full bg-[#0A1628] text-[#8896A8]">
                {/* Top */}
                <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 pt-14 pb-10 border-b border-white/8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[200px_1fr_1fr_180px] gap-10 items-start">

                        {/* Logo */}
                        <div>
                            <Image src="/images/eco_logo.svg" alt="ECOTRONIX" width={140} height={36} className="h-7 w-auto brightness-[10] opacity-80 mb-4" />
                            <p className="text-xs text-[#4B5C73] leading-relaxed">
                                기술과 신뢰로 글로벌<br />시장을 선도합니다
                            </p>
                        </div>

                        {/* Company Info */}
                        <div>
                            <p className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-5">Company</p>
                            <div className="space-y-3 text-xs leading-relaxed">
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-3.5 h-3.5 text-[#B8965F] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-[#4B5C73] mb-0.5">본사</p>
                                        <p>경기도 성남시 수정구 달래내로 46, 성남글로벌융합센터 B동 4층 (13449)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-3.5 h-3.5 text-[#B8965F] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-[#4B5C73] mb-0.5">공장</p>
                                        <p>충북 진천군 문백면 사양2길 86 (사양리 826)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-5">Contact</p>
                            <div className="space-y-3 text-xs leading-relaxed">
                                <div className="flex items-center gap-2.5">
                                    <Phone className="w-3.5 h-3.5 text-[#B8965F] shrink-0" />
                                    <span>031-323-9800 &nbsp;|&nbsp; FAX. 031-323-9815</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Phone className="w-3.5 h-3.5 text-[#B8965F] shrink-0" />
                                    <span>043-534-6491 &nbsp;|&nbsp; FAX. 043-534-6492</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Mail className="w-3.5 h-3.5 text-[#B8965F] shrink-0" />
                                    <span>s.sales@ecotro.co.kr</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="xl:justify-self-end">
                            <p className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-5">Support</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 bg-white/8 border border-white/15 text-white text-xs font-semibold px-5 py-3 rounded-lg hover:bg-white hover:text-[#0A1628] transition-all cursor-pointer"
                            >
                                문의하기
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 py-5 flex items-center justify-between gap-4">
                    <p className="text-[11px] text-[#4B5C73]">Copyright © 2019 ECOTRONIX Corp. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8965F]" />
                    </div>
                </div>
            </footer>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0A1628]/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 16 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-[#E5E8EF]">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.14em] text-[#B8965F] uppercase mb-1.5">ECOTRONIX</p>
                                    <h3 className="text-xl font-semibold text-[#0A1628]">문의하기</h3>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-lg text-[#8896A8] hover:text-[#0A1628] hover:bg-[#F7F8FB] transition-colors cursor-pointer">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="px-8 py-6 overflow-y-auto max-h-[65vh]">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { label: "성 *", placeholder: "홍", type: "text" },
                                            { label: "이름 *", placeholder: "길동", type: "text" },
                                            { label: "이메일", placeholder: "example@email.com", type: "email" },
                                            { label: "전화번호", placeholder: "010-0000-0000", type: "tel" },
                                        ].map(({ label, placeholder, type }) => (
                                            <div key={label}>
                                                <label className="block text-xs font-semibold text-[#8896A8] uppercase tracking-wider mb-2">{label}</label>
                                                <input type={type} placeholder={placeholder} className="w-full px-0 py-3 border-b border-[#E5E8EF] focus:border-[#0A1628] bg-transparent text-[#0A1628] placeholder-[#D1D8E0] outline-none transition-colors text-sm" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#8896A8] uppercase tracking-wider mb-2">문의 내용</label>
                                        <textarea rows={4} placeholder="문의하실 내용을 입력해 주세요" className="w-full px-0 py-3 border-b border-[#E5E8EF] focus:border-[#0A1628] bg-transparent text-[#0A1628] placeholder-[#D1D8E0] outline-none transition-colors resize-none text-sm" />
                                    </div>
                                </form>
                            </div>
                            <div className="px-8 pb-8 pt-4 flex justify-end gap-3">
                                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#4B5C73] hover:bg-[#F7F8FB] transition-colors cursor-pointer">취소</button>
                                <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#0A1628] text-white hover:bg-[#1E3A5F] transition-colors cursor-pointer">제출하기</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
