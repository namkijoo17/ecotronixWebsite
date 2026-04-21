"use client";

import React, { useState } from "react";
import { Link } from '@/routing';
import { ArrowUpRight, X, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = [
    { label: "회사소개", href: "/about" },
    { label: "사업분야", href: "/#business" },
    { label: "연구개발", href: "/#rnd" },
    { label: "고객지원", href: "/#customer_support" },
];

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="w-full bg-[#0A0F1E] text-gray-400">
                {/* Top */}
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 pt-14 pb-10 border-b border-white/5">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                        {/* Brand */}
                        <div className="lg:w-72 flex-shrink-0">
                            <Image src="/images/eco_logo.svg" alt="ECOTRONIX" width={140} height={36} className="h-7 w-auto mb-5 brightness-[10] opacity-90" />
                            <p className="text-sm leading-relaxed text-gray-500 mb-6">
                                30년 이상 축적된 전자·제조 기술력을 기반으로 고객의 가치를 제공하는 종합 기술 기업입니다.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 bg-[#0057FF] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#0046CC] transition-colors cursor-pointer"
                            >
                                문의하기
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-gray-500 hover:text-white transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact info */}
                        <div className="flex-shrink-0 space-y-3">
                            <p className="text-xs font-semibold tracking-[0.12em] text-gray-600 uppercase mb-4">Contact</p>
                            <div className="flex items-start gap-2.5 text-sm">
                                <MapPin className="w-3.5 h-3.5 text-gray-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500 leading-relaxed">경기도 성남시 수정구 달래내로 46<br />성남글로벌융합센터 B동 4층</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm">
                                <Phone className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                                <span className="text-gray-500">031-323-9800</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm">
                                <Mail className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                                <span className="text-gray-500">s.sales@ecotro.co.kr</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-gray-600">Copyright © 2019 ECOTRONIX Corp. All rights reserved.</p>
                    <p className="text-sm text-gray-500">충북 진천군 문백면 사양2길 86 · TEL. 043-534-6491</p>
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
