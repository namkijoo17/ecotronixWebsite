"use client";

import React, { useState } from "react";
import { X, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="w-full bg-[#070D1A] text-gray-400">
                {/* Top */}
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-10 lg:px-14 pt-10 pb-8 border-b border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[220px_1.5fr_1.5fr_220px] gap-8 xl:gap-10 items-start">
                        <div className="pt-1">
                            <Image src="/images/eco_logo.svg" alt="ECOTRONIX" width={168} height={40} className="h-8 w-auto brightness-[10] opacity-90" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-white mb-3">Company Info.</p>
                            <div className="space-y-2 text-[12px] leading-relaxed text-gray-400">
                                <p className="flex items-start gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 shrink-0" />
                                    본사 | 경기도 성남시 수정구 달래내로 46, 성남글로벌융합센터 B동 4층, 우편번호 13449
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                    공장 | 충북 진천군 문백면 사양2길 86(사양리 826)
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-white mb-3">Contact.</p>
                            <div className="space-y-2 text-[12px] leading-relaxed text-gray-400">
                                <p>TEL. 031-323-9800 | FAX. 031-323-9815 | MAIL. s.sales@ecotro.co.kr</p>
                                <p>TEL. 043-534-6491 | FAX. 043-534-6492</p>
                            </div>
                        </div>

                        <div className="xl:justify-self-end">
                            <p className="text-sm font-semibold text-white mb-3">Customer Support.</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center w-full xl:w-auto min-w-[120px] px-5 py-2.5 border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-[#070D1A] transition-colors cursor-pointer"
                            >
                                Business Talk
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-10 lg:px-14 py-4">
                    <p className="text-[11px] text-gray-500">Copyright © 2019 ECOTRONIX Corp. ALL RIGHT RESERVED.</p>
                </div>
            </footer>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
                            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-100">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.15em] text-[#0057FF] uppercase mb-1">ECOTRONIX</p>
                                    <h3 className="text-xl font-semibold text-gray-900">문의하기</h3>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="px-8 py-6 overflow-y-auto max-h-[65vh]">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">성 *</label>
                                            <input type="text" placeholder="홍" className="w-full px-0 py-2.5 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-300 outline-none transition-colors text-base" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">이름 *</label>
                                            <input type="text" placeholder="길동" className="w-full px-0 py-2.5 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-300 outline-none transition-colors text-base" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">이메일</label>
                                            <input type="email" placeholder="example@email.com" className="w-full px-0 py-2.5 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-300 outline-none transition-colors text-base" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">전화번호</label>
                                            <input type="tel" placeholder="010-0000-0000" className="w-full px-0 py-2.5 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-300 outline-none transition-colors text-base" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">문의 내용</label>
                                        <textarea rows={4} placeholder="문의하실 내용을 입력해 주세요" className="w-full px-0 py-2.5 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-300 outline-none transition-colors resize-none text-[14px]" />
                                    </div>
                                </form>
                            </div>
                            <div className="px-8 pb-8 pt-4 flex justify-end gap-3">
                                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">취소</button>
                                <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#0057FF] text-white hover:bg-[#0046CC] transition-colors cursor-pointer">제출하기</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
