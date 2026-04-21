"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const rdTabs = [
  {
    id: 'iot',
    index: '01',
    title: 'IoT Devices',
    titleKo: 'IoT 기기',
    desc: '산업 현장과 물류 환경에서 데이터를 수집·전송하는 다양한 IoT 기기를 연구·개발합니다. RFID, GPS, 센서 통합 솔루션으로 스마트 현장을 구현합니다.',
    items: [
      'RFID 모듈, 리더 등 관련 기기',
      '산업용 PDA, 바코드 리더',
      'GPS Tracker 등 GPS 관련 기기',
      '센서 기반의 각종 IoT 기기',
    ],
    image: '/images/iot_img.png',
  },
  {
    id: 'ind_electronics',
    index: '02',
    title: 'Industrial Electronics',
    titleKo: '산업용 전자통신기기',
    desc: '제조·산업 자동화에 필요한 고신뢰성 전자통신기기를 설계하고 양산합니다. 현장의 가혹한 환경에서도 안정적으로 작동하는 제품을 공급합니다.',
    items: [
      '각종 산업용 컨트롤러',
      '통신용 중계기 등 정밀 무선통신기기',
      '각종 계측기/검사기',
    ],
    image: '/images/indus_electronics.png',
  },
  {
    id: 'medical_electronics',
    index: '03',
    title: 'Medical Electronics',
    titleKo: '의료 기기',
    desc: '환자 안전과 정확한 진단을 지원하는 의료용 전자기기를 연구·개발합니다. 국제 의료기기 규격에 부합하는 신뢰성 높은 제품을 제공합니다.',
    items: [
      '환자감시 등 각종 모니터링 기기',
      '골밀도, 혈압계 등 일반 의료 기기',
    ],
    image: '/images/medical_electronics.png',
  },
];

export function ResearchAndDevSection() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === 'undefined') return rdTabs[0];
    const requested = new URLSearchParams(window.location.search).get('rndTab');
    return (requested && rdTabs.find(t => t.id === requested)) || rdTabs[0];
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('rndTab');
    if (!requested) return;
    setTimeout(() => {
      const el = document.getElementById('rnd');
      if (!el) return;
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }, 100);
  }, []);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const tabId = (e as CustomEvent<{ tabId?: string }>).detail?.tabId;
      if (!tabId) return;
      const match = rdTabs.find(t => t.id === tabId);
      if (match) setActiveTab(match);
    };
    window.addEventListener('rndTabSelect', onSelect);
    return () => window.removeEventListener('rndTabSelect', onSelect);
  }, []);

  return (
    <section className="w-full pt-7 md:pt-10 pb-14 md:pb-20" id="rnd">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="section-shell p-6 md:p-10 lg:p-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-[2px] bg-[#0057FF]" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[#0057FF] uppercase">Research &amp; Development</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">연구개발</h2>
          </div>
          <p className="text-gray-600 text-base leading-relaxed max-w-xs md:text-right">
            지속 가능하고 효율적인 내일의 산업을 위해 연구 개발에 매진합니다.
          </p>
        </div>

        {/* Content: Accordion + Sticky Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 lg:gap-16 items-start">

          {/* Left: Vertical Accordion Tabs */}
          <div className="divide-y divide-gray-100 rounded-2xl border border-slate-200/70 bg-white/70 px-4 md:px-6">
            {rdTabs.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <div key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className="w-full flex items-center justify-between py-7 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className="text-xs font-semibold tabular-nums transition-colors duration-300"
                        style={{ color: isActive ? '#0057FF' : '#CBD5E1' }}
                      >
                        {tab.index}
                      </span>
                      <div>
                        <p
                          className="text-xs font-semibold tracking-[0.12em] uppercase mb-0.5 transition-colors duration-300"
                          style={{ color: isActive ? '#0057FF' : 'transparent' }}
                        >
                          {tab.titleKo}
                        </p>
                        <h3
                          className="text-[18px] md:text-[20px] font-semibold tracking-tight transition-colors duration-300"
                          style={{ color: isActive ? '#0F172A' : '#64748B' }}
                        >
                          {tab.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 flex-shrink-0 transition-all duration-300"
                      style={{
                        color: isActive ? '#0057FF' : '#CBD5E1',
                        transform: isActive ? 'rotate(0deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-[52px] pb-8">
                          {/* Mobile: image here */}
                          <div className="lg:hidden relative rounded-xl overflow-hidden mb-6 aspect-[4/3]">
                            <img src={tab.image} alt={tab.title} className="w-full h-full object-cover" />
                          </div>

                          <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-md">
                            {tab.desc}
                          </p>

                          <ul className="space-y-2.5 mb-8">
                            {tab.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#0057FF] mt-[7px]" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                            <div>
                              <p className="text-lg font-semibold text-gray-900 tabular-nums">30+</p>
                              <p className="text-xs text-gray-500 mt-0.5 tracking-wide">Years R&amp;D</p>
                            </div>
                            <div className="w-px h-7 bg-gray-100" />
                            <div>
                              <p className="text-lg font-semibold text-gray-900 tabular-nums">100+</p>
                              <p className="text-xs text-gray-500 mt-0.5 tracking-wide">Products</p>
                            </div>
                            <div className="w-px h-7 bg-gray-100" />
                            <div>
                              <p className="text-lg font-semibold text-gray-900 tabular-nums">15+</p>
                              <p className="text-xs text-gray-500 mt-0.5 tracking-wide">Patents</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Image */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-50 border border-slate-200/70">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab.id}
                  src={activeTab.image}
                  alt={activeTab.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="text-xs font-semibold tracking-[0.15em] text-white/60 uppercase mb-1">{activeTab.titleKo}</p>
                    <p className="text-lg font-semibold text-white">{activeTab.title}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Index badge */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-white tabular-nums">{activeTab.index}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
}
