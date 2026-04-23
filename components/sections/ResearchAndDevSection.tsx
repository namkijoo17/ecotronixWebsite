"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
    <section className="w-full bg-[#F7F8FB] py-20 md:py-28" id="rnd">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Research & Development</p>
            <h2 className="section-heading">연구개발</h2>
          </div>
          <p className="text-[#4B5C73] text-sm leading-relaxed max-w-xs md:text-right">
            지속 가능하고 효율적인 내일의 산업을 위해 연구 개발에 매진합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Tabs */}
          <div className="bg-white border border-[#E5E8EF] rounded-2xl overflow-hidden">
            {rdTabs.map((tab, idx) => {
              const isActive = activeTab.id === tab.id;
              return (
                <div key={tab.id} className={idx < rdTabs.length - 1 ? "border-b border-[#E5E8EF]" : ""}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className="w-full flex items-center gap-6 px-8 py-7 text-left group cursor-pointer hover:bg-[#F7F8FB] transition-colors"
                  >
                    <span className={`text-sm font-semibold tabular-nums w-6 flex-shrink-0 transition-colors ${isActive ? 'text-[#B8965F]' : 'text-[#D1D8E0]'}`}>
                      {tab.index}
                    </span>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold tracking-tight transition-colors ${isActive ? 'text-[#0A1628]' : 'text-[#8896A8]'}`}>
                        {tab.title}
                      </h3>
                      <p className={`text-xs mt-0.5 transition-colors ${isActive ? 'text-[#B8965F]' : 'text-transparent'}`}>
                        {tab.titleKo}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all ${isActive ? 'text-[#0A1628] translate-x-1' : 'text-[#D1D8E0]'}`} />
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
                        <div className="px-8 pb-8 pl-20">
                          {/* Mobile image */}
                          <div className="lg:hidden relative rounded-xl overflow-hidden mb-5 aspect-[4/3]">
                            <img src={tab.image} alt={tab.title} className="w-full h-full object-cover" />
                          </div>

                          <p className="text-sm text-[#4B5C73] leading-relaxed mb-5 max-w-sm">
                            {tab.desc}
                          </p>

                          <ul className="space-y-2.5 mb-7">
                            {tab.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[#4B5C73]">
                                <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#B8965F] mt-2" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex items-center gap-6 pt-5 border-t border-[#E5E8EF]">
                            {[
                              { value: "30+", label: "Years R&D" },
                              { value: "100+", label: "Products" },
                              { value: "15+", label: "Patents" },
                            ].map((stat, i) => (
                              <React.Fragment key={stat.label}>
                                {i > 0 && <div className="w-px h-6 bg-[#E5E8EF]" />}
                                <div>
                                  <p className="text-base font-semibold text-[#0A1628] tabular-nums">{stat.value}</p>
                                  <p className="text-xs text-[#8896A8] mt-0.5">{stat.label}</p>
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F7F8FB] border border-[#E5E8EF]">
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

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A1628]/80 to-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#B8965F] uppercase mb-1">{activeTab.titleKo}</p>
                    <p className="text-base font-semibold text-white">{activeTab.title}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-white">{activeTab.index}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
