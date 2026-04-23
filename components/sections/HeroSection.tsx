"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/routing';

const slides = [
  {
    id: 1,
    index: "01",
    label: "Marine Electronics",
    title: "Marine",
    subtitle: "Electronics",
    description: "30년 이상의 기술력으로 해양 선박용 항해 전자장비를 개발하고 글로벌 시장에 공급합니다.",
    image: "./images/ship.avif",
    stat: "30+",
    statLabel: "Years",
    href: "/marine-electronics",
    tag: "해양전자장비",
  },
  {
    id: 2,
    index: "02",
    label: "Vision AI",
    title: "AI",
    subtitle: "Solutions",
    description: "AI 기반 자동화 검사기와 스마트팩토리 솔루션으로 제조 현장의 미래를 선도합니다.",
    image: "./images/Ai.avif",
    stat: "100+",
    statLabel: "Industries",
    href: "/ai-business",
    tag: "스마트팩토리",
  },
  {
    id: 3,
    index: "03",
    label: "Global EMS/ODM",
    title: "Smart",
    subtitle: "Factory",
    description: "글로벌 EMS·ODM 사업으로 고객의 제품이 세계 시장에서 경쟁력을 갖출 수 있도록 지원합니다.",
    image: "./images/factory.avif",
    stat: "99%",
    statLabel: "Satisfaction",
    href: "/global-ems",
    tag: "글로벌 EMS",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  return (
    /* -mt-16 cancels the layout's pt-16, making image flush with navbar */
    <section className="relative -mt-16 w-full h-[100svh] overflow-hidden bg-[#0A1628]">

      {/* Background Image */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0"
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/60 to-[#0A1628]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-[#0A1628]/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-8 md:px-14 lg:px-20 pt-[88px] pb-10">

        {/* Top row: label + index */}
        <div className="flex items-center justify-between mb-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${current}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="w-6 h-[1px] bg-[#B8965F]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B8965F]">
                {slide.label}
              </span>
            </motion.div>
          </AnimatePresence>

          <div className="hidden md:flex items-center gap-2 text-white/30 text-xs tracking-[0.2em]">
            <span className="text-white/70">{slide.index}</span>
            <span>/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Main content: centered vertically */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Display title */}
              <h1 className="text-[clamp(64px,10vw,140px)] font-semibold text-white leading-[0.92] tracking-tight mb-6">
                {slide.title}
                <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)]">
                  {slide.subtitle}
                </span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-end gap-8">
                <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-md">
                  {slide.description}
                </p>

                <div className="flex items-center gap-4 md:ml-auto shrink-0">
                  <div className="text-right hidden md:block">
                    <p className="text-3xl font-semibold text-white tabular-nums">{slide.stat}</p>
                    <p className="text-xs text-white/40 tracking-wider">{slide.statLabel}</p>
                  </div>
                  <div className="w-px h-10 bg-white/20 hidden md:block" />
                  <Link href={slide.href}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-2 bg-white text-[#0A1628] text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#B8965F] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      자세히 보기
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between gap-6">

          {/* Slide indicators */}
          <div className="flex items-center gap-4">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrent(idx); setProgress(0); }}
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="w-16 h-[1px] bg-white/20 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-[#B8965F] rounded-full"
                    style={{
                      width: idx === current ? `${progress}%` : idx < current ? '100%' : '0%',
                    }}
                  />
                </div>
                <span className={`text-[10px] tracking-[0.15em] font-medium transition-colors ${idx === current ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                  {s.index}
                </span>
              </button>
            ))}
          </div>

          {/* Side nav arrow + tag */}
          <div className="hidden md:flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={`tag-${current}`}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs font-medium tracking-wider text-white/40 uppercase"
              >
                {slide.tag}
              </motion.span>
            </AnimatePresence>
            <button
              onClick={() => { setCurrent((c) => (c + 1) % slides.length); setProgress(0); }}
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/60 hover:border-[#B8965F] hover:text-[#B8965F] transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right-side vertical text decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-4">
        <div className="h-16 w-[1px] bg-white/15" />
        <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase [writing-mode:vertical-lr]">
          ECOTRONIX
        </p>
        <div className="h-16 w-[1px] bg-white/15" />
      </div>
    </section>
  );
}
