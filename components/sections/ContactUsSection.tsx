"use client";

import React, { useState } from 'react';
import { ArrowUpRight, X, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactUsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="contact" className="relative w-full overflow-hidden rounded-2xl bg-[#0A1628]">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#B8965F]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 px-8 md:px-14 py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B8965F] mb-4">Contact Us</p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">상담 요청</h3>
              <p className="text-[#4B5C73] text-sm leading-relaxed mb-8 max-w-md">
                에코트로닉스의 제품, 기술, 기타 궁금한 사항에 대한 문의를 남겨주시면
                최선을 다해 신속히 답변드리겠습니다.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-3.5 h-3.5 text-[#B8965F]" />
                  <span className="text-sm text-[#4B5C73]">s.sales@ecotro.co.kr</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-3.5 h-3.5 text-[#B8965F]" />
                  <span className="text-sm text-[#4B5C73]">031-323-9800</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-3.5 h-3.5 text-[#B8965F]" />
                  <span className="text-sm text-[#4B5C73]">경기도 성남시 수정구 달래내로 46</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center gap-2.5 bg-white text-[#0A1628] text-sm font-bold px-8 py-4 rounded-full hover:bg-[#B8965F] hover:text-white transition-all duration-300 shrink-0 cursor-pointer"
              >
                문의하기
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p className="text-[10px] text-white/20 tracking-wider">영업일 기준 1-2일 내 답변</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0A1628]/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-[#E5E8EF]">
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] text-[#B8965F] uppercase mb-1.5">ECOTRONIX</p>
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
                        <label className="block text-xs font-bold text-[#8896A8] uppercase tracking-wider mb-2">{label}</label>
                        <input type={type} placeholder={placeholder} className="w-full px-0 py-3 border-b border-[#E5E8EF] focus:border-[#0A1628] bg-transparent text-[#0A1628] placeholder-[#D1D8E0] outline-none transition-colors text-sm" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#8896A8] uppercase tracking-wider mb-2">문의 내용</label>
                    <textarea rows={4} placeholder="문의하실 내용을 입력해 주세요" className="w-full px-0 py-3 border-b border-[#E5E8EF] focus:border-[#0A1628] bg-transparent text-[#0A1628] placeholder-[#D1D8E0] outline-none transition-colors resize-none text-sm" />
                  </div>
                </form>
              </div>
              <div className="px-8 pb-8 pt-4 flex justify-end gap-3">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl text-sm font-medium text-[#4B5C73] hover:bg-[#F7F8FB] transition-colors cursor-pointer">취소</button>
                <button className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#0A1628] text-white hover:bg-[#1E3A5F] transition-colors cursor-pointer">제출하기</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
