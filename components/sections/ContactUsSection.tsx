"use client";

import React, { useState } from 'react';
import { ArrowUpRight, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactUsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="contact" className="relative w-full overflow-hidden rounded-2xl bg-[#0A1628]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }} />

        <div className="relative z-10 px-8 md:px-14 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8965F] mb-4">Contact Us</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">상담 요청</h3>
              <div className="space-y-2 text-sm text-[#8896A8] leading-relaxed">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B8965F]" />
                  <span>s.sales@ecotro.co.kr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B8965F]" />
                  <span>031-323-9800</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2.5 bg-white text-[#0A1628] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#F7F8FB] transition-colors shrink-0 cursor-pointer"
            >
              문의하기
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0A1628]/60 backdrop-blur-sm"
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
