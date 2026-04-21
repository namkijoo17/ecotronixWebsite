"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/routing';

const slides = [
  {
    id: 1,
    tag: "Marine Electronics",
    title: "Marine and Mass",
    description: "30년 이상의 기술력으로 해양 선박용 항해 전자장비를 개발하고 글로벌 시장에 공급합니다.",
    image: "./images/ship.avif",
    stat: { value: "15+", label: "Years Experience" },
    href: "/marine-electronics",
  },
  {
    id: 2,
    tag: "Vision AI",
    title: "Based on AI",
    description: "AI 기반 자동화 검사기와 스마트팩토리 솔루션으로 제조 현장의 미래를 선도합니다.",
    image: "./images/Ai.avif",
    stat: { value: "100+", label: "Industries Served" },
    href: "/ai-business",
  },
  {
    id: 3,
    tag: "Global EMS/ODM",
    title: "Smart Factory",
    description: "글로벌 EMS·ODM 사업으로 고객의 제품이 세계 시장에서 경쟁력을 갖출 수 있도록 지원합니다.",
    image: "./images/factory.avif",
    stat: { value: "99%", label: "Success Rate" },
    href: "/global-ems",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 pb-10 pt-8 md:pt-6">
      <div className="section-shell relative w-full min-h-[620px] md:min-h-[760px] overflow-hidden">

        <AnimatePresence initial={false}>
          <motion.div key={current} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#030711]/90 via-[#0b1731]/75 to-[#071327]/35 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 p-8 md:p-12 lg:p-16">
          <div className="h-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
            <div className="self-center">
              <AnimatePresence mode="wait">
                <motion.div key={`content-${current}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <span className="section-title-chip mb-6">{slide.tag}</span>
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-white mb-6 tracking-tight leading-[0.96]">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg text-slate-200/95 leading-relaxed max-w-xl mb-10">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link href={slide.href}>
                      <button className="flex items-center gap-2 bg-[#4f7cff] text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-[#345af0] transition-colors cursor-pointer">
                        프로젝트 보기
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <span className="text-xs tracking-[0.18em] uppercase text-slate-300">
                      {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="self-end">
              <AnimatePresence mode="wait">
                <motion.div key={`stat-${current}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-slate-400/35 bg-[#0a1325]/70 backdrop-blur-xl p-7 text-white">
                  <p className="text-xs tracking-[0.18em] text-slate-300 uppercase mb-4">Performance</p>
                  <div className="text-6xl font-semibold mb-1 tabular-nums">{slide.stat.value}</div>
                  <div className="text-sm text-slate-300">{slide.stat.label}</div>
                  <div className="mt-8 flex items-center gap-2">
                    {slides.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === current ? "w-10 bg-white" : "w-4 bg-white/30"}`} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
