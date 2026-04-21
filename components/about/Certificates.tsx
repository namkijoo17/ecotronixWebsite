'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
    { id: 1, name: "ISO 9001 인증서", image: "/images/1.jpg" },
    { id: 2, name: "ISO 14001 인증서", image: "/images/2.jpg" },
    { id: 3, name: "INNOBIZ 확인서", image: "/images/3.jpg" },
    { id: 4, name: "벤처기업 확인서", image: "/images/4.jpg" },
    { id: 5, name: "수출유망중소기업 지정증", image: "/images/5.jpg" },
];

const CLONE_COUNT = 3;   // clones prepended & appended for seamless loop
const AUTO_MS = 3500;    // ms between auto-advances
const TRANS_MS = 650;    // slide animation duration (ms)

export function Certificates() {
    const total = certificates.length;

    // Extended track: [last-3 clones | all real | first-3 clones]
    const extended = [
        ...certificates.slice(-CLONE_COUNT),
        ...certificates,
        ...certificates.slice(0, CLONE_COUNT),
    ];

    // trackIdx points into the extended array; real slides start at CLONE_COUNT
    const [trackIdx, setTrackIdx] = useState(CLONE_COUNT);
    const [animating, setAnimating] = useState(false);
    const animatingRef = useRef(false);
    const [paused, setPaused] = useState(false);

    // Per-card width as % of the track (responsive: 1/3 desktop, 1/2 tablet, 1 mobile)
    const [cardPct, setCardPct] = useState(100 / 3);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setCardPct(100 / 3);
            else if (window.innerWidth >= 640) setCardPct(100 / 2);
            else setCardPct(100);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // Active dot index (0-based, real slides)
    const activeDot = ((trackIdx - CLONE_COUNT) % total + total) % total;

    // Core advance function
    const advance = useCallback((dir: 1 | -1) => {
        if (animatingRef.current) return;
        animatingRef.current = true;
        setAnimating(true);
        setTrackIdx(prev => prev + dir);
    }, []);

    const next = useCallback(() => advance(1), [advance]);
    const prev = useCallback(() => advance(-1), [advance]);

    // After CSS transition ends: invisibly jump from clone back to real slide
    const handleTransitionEnd = useCallback(() => {
        setAnimating(false);
        animatingRef.current = false;
        setTrackIdx(idx => {
            if (idx >= CLONE_COUNT + total) return idx - total; // jumped past end → reset to start
            if (idx < CLONE_COUNT) return idx + total; // jumped past start → reset to end
            return idx;
        });
    }, [total]);

    // Auto-advance (slow default movement)
    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            if (!animatingRef.current) {
                animatingRef.current = true;
                setAnimating(true);
                setTrackIdx(i => i + 1);
            }
        }, AUTO_MS);
        return () => clearInterval(id);
    }, [paused]);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [prev, next]);

    // Touch / swipe
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart.current) return;
        const dx = e.changedTouches[0].clientX - touchStart.current.x;
        const dy = e.changedTouches[0].clientY - touchStart.current.y;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
            dx < 0 ? next() : prev();
        }
        touchStart.current = null;
    };

    const translateX = -(trackIdx * cardPct);

    return (
        <section id="certificates" className="py-24 bg-white overflow-hidden">
            {/* Header */}
            <div className="mx-auto px-8 md:px-16 lg:px-24 mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-[3px] bg-[#6B8E23]"></div>
                    <span className="text-sm font-bold tracking-wider text-gray-800 uppercase">
                        Certificates &amp; Awards
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
                    인증 수상
                </h2>
            </div>

            {/* Carousel */}
            <div
                className="relative max-w-7xl mx-auto px-12 md:px-20 lg:px-20"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {/* Prev Button */}
                <button
                    onClick={prev}
                    aria-label="Previous certificate"
                    className="absolute left-0 md:left-4 top-[140px] z-20
                               w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md
                               flex items-center justify-center
                               hover:bg-[#6B8E23] hover:border-[#6B8E23]
                               transition-all duration-200 group"
                >
                    <ChevronLeft size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>

                {/* Sliding Track */}
                <div className="overflow-hidden">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(${translateX}%)`,
                            transition: animating
                                ? `transform ${TRANS_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                                : 'none',
                            willChange: 'transform',
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extended.map((cert, i) => (
                            <div
                                key={i}
                                className="shrink-0 px-3 sm:px-4"
                                style={{ width: `${cardPct}%` }}
                            >
                                <div className="flex flex-col gap-5 items-center">
                                    <div className="relative w-full h-[280px] border border-gray-100 rounded bg-gray-50">
                                        <Image
                                            src={cert.image}
                                            alt={cert.name}
                                            className="object-contain p-4"
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <h3 className="text-base md:text-lg font-medium text-gray-900 text-center">
                                        {cert.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={next}
                    aria-label="Next certificate"
                    className="absolute right-0 md:right-4 top-[140px] z-20
                               w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md
                               flex items-center justify-center
                               hover:bg-[#6B8E23] hover:border-[#6B8E23]
                               transition-all duration-200 group"
                >
                    <ChevronRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>

                {/* Dot navigation */}
                <div className="flex items-center justify-center gap-3 mt-10">
                    {certificates.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (animatingRef.current) return;
                                animatingRef.current = true;
                                setAnimating(true);
                                setTrackIdx(CLONE_COUNT + i);
                            }}
                            aria-label={`Go to certificate ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${i === activeDot
                                ? 'w-7 h-2.5 bg-[#6B8E23]'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
