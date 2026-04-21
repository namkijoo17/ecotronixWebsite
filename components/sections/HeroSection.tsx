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
      <div className="section-shell relative w-full min-h-[580px] md:min-h-[700px] overflow-hidden">

        <AnimatePresence initial={false}>
          <motion.div key={current} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/55 to-[#020617]/20 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-14 lg:p-20">

          {/* Top */}
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.span key={`tag-${current}`} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-[0.1em] uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4D9FFF]" />
                {slide.tag}
              </motion.span>
            </AnimatePresence>
            <span className="text-white/50 text-sm font-medium tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Main */}
          <div className="flex flex-col lg:flex-row items-end justify-between gap-10">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div key={`content-${current}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.05] drop-shadow-[0_8px_24px_rgba(2,6,23,0.4)]">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg text-white/85 font-normal leading-relaxed max-w-lg mb-9">
                    {slide.description}
                  </p>
                  <Link href={slide.href}>
                    <button className="flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                      자세히 보기
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:block flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div key={`stat-${current}`} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white/12 backdrop-blur-md border border-white/25 rounded-2xl p-8 text-white min-w-[200px] shadow-[0_20px_50px_-35px_rgba(0,0,0,0.8)]">
                  <div className="text-5xl font-semibold mb-2 tabular-nums">{slide.stat.value}</div>
                  <div className="text-sm text-white/70 font-medium tracking-wide">{slide.stat.label}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)} className="relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer" style={{ width: idx === current ? 36 : 14 }}>
                <span className="absolute inset-0 bg-white/30 rounded-full" />
                {idx === current && <motion.span layoutId="slideProgress" className="absolute inset-0 bg-white rounded-full" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
