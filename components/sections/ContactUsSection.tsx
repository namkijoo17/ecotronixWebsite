"use client";

import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactUsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="contact" className="relative w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="City Buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030711]/92 via-[#0b1731]/82 to-[#071327]/70" />
        </div>

        <div className="relative z-10 px-8 md:px-14 py-14 md:py-18">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="text-white">
              <span className="section-title-chip mb-4">Contact Us</span>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-5 tracking-tight">상담 요청</h3>
              <div className="space-y-1.5 text-base text-slate-200/90 leading-relaxed max-w-lg">
                <p>에코트로닉스(주)의 제품, 기술, 기타 궁금한 사항에 대한 문의 접수</p>
                <p>고객님의 관심 분야에 대해 최선을 다해 답변해 드리겠습니다</p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2.5 bg-[#4f7cff] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#345af0] transition-colors shrink-0 shadow-lg shadow-blue-900/30 cursor-pointer"
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
