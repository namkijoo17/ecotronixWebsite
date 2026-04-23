"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/routing';

const slides = [
  {
    id: 1,
    index: "01",
    label: "Marine Electronics",
    title: "Marine\nElectronics",
    description: "30년 이상의 기술력으로 해양 선박용 항해 전자장비를 개발하고 글로벌 시장에 공급합니다.",
    image: "./images/ship.avif",
    stat: { value: "30+", label: "Years of Excellence" },
    href: "/marine-electronics",
  },
  {
    id: 2,
    index: "02",
    label: "Vision AI",
    title: "AI\nSolutions",
    description: "AI 기반 자동화 검사기와 스마트팩토리 솔루션으로 제조 현장의 미래를 선도합니다.",
    image: "./images/Ai.avif",
    stat: { value: "100+", label: "Industries Served" },
    href: "/ai-business",
  },
  {
    id: 3,
    index: "03",
    label: "Global EMS/ODM",
    title: "Smart\nFactory",
    description: "글로벌 EMS·ODM 사업으로 고객의 제품이 세계 시장에서 경쟁력을 갖출 수 있도록 지원합니다.",
    image: "./images/factory.avif",
    stat: { value: "99%", label: "Client Satisfaction" },
    href: "/global-ems",
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
    <section className="w-full min-h-[100svh] flex flex-col lg:flex-row bg-white pt-[72px]">
      {/* Left: Text Panel */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between px-8 md:px-14 lg:px-16 py-12 lg:py-16 order-2 lg:order-1">
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="section-label mb-6">{slide.label}</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-[#0A1628] tracking-tight leading-[1.0] mb-8 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-[#4B5C73] text-base md:text-lg leading-relaxed mb-10 max-w-md">
                {slide.description}
              </p>
              <div className="flex items-center gap-4">
                <Link href={slide.href}>
                  <button className="btn-primary">
                    자세히 보기
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls */}
        <div className="mt-12">
          {/* Progress Bars */}
          <div className="flex items-center gap-3 mb-8">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrent(idx); setProgress(0); }}
                className="flex-1 group cursor-pointer"
              >
                <div className="h-[2px] bg-[#E5E8EF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0A1628] transition-none rounded-full"
                    style={{
                      width: idx === current ? `${progress}%` : idx < current ? '100%' : '0%',
                    }}
                  />
                </div>
                <p className="text-xs text-[#8896A8] mt-2 font-medium group-hover:text-[#0A1628] transition-colors">{s.index}</p>
              </button>
            ))}
          </div>

          {/* Stat Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stat-${current}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-6 p-5 border border-[#E5E8EF] rounded-xl bg-[#F7F8FB]"
            >
              <div>
                <p className="text-3xl font-semibold text-[#0A1628] tracking-tight">{slide.stat.value}</p>
                <p className="text-xs text-[#8896A8] mt-0.5">{slide.stat.label}</p>
              </div>
              <div className="w-px h-10 bg-[#E5E8EF]" />
              <p className="text-xs text-[#4B5C73] leading-relaxed flex-1">
                ECOTRONIX — 기술과 신뢰로 글로벌 시장을 선도합니다
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-[55%] relative min-h-[50svh] lg:min-h-0 order-1 lg:order-2 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={`img-${current}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide number overlay */}
        <div className="absolute top-8 right-8 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`num-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/60 text-xs font-medium tracking-[0.2em]"
            >
              {slide.index} / {String(slides.length).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow nav */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={() => { setCurrent((c) => (c + 1) % slides.length); setProgress(0); }}
            className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/30 rounded-full text-white hover:bg-white hover:text-[#0A1628] transition-all cursor-pointer backdrop-blur-sm"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
