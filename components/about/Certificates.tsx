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

const CLONE_COUNT = 3;
const AUTO_MS = 3500;
const TRANS_MS = 650;

export function Certificates() {
    const total = certificates.length;
    const extended = [
        ...certificates.slice(-CLONE_COUNT),
        ...certificates,
        ...certificates.slice(0, CLONE_COUNT),
    ];

    const [trackIdx, setTrackIdx] = useState(CLONE_COUNT);
    const [animating, setAnimating] = useState(false);
    const animatingRef = useRef(false);
    const [paused, setPaused] = useState(false);
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

    const activeDot = ((trackIdx - CLONE_COUNT) % total + total) % total;

    const advance = useCallback((dir: 1 | -1) => {
        if (animatingRef.current) return;
        animatingRef.current = true;
        setAnimating(true);
        setTrackIdx(prev => prev + dir);
    }, []);

    const next = useCallback(() => advance(1), [advance]);
    const prev = useCallback(() => advance(-1), [advance]);

    const handleTransitionEnd = useCallback(() => {
        setAnimating(false);
        animatingRef.current = false;
        setTrackIdx(idx => {
            if (idx >= CLONE_COUNT + total) return idx - total;
            if (idx < CLONE_COUNT) return idx + total;
            return idx;
        });
    }, [total]);

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

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [prev, next]);

    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart.current) return;
        const dx = e.changedTouches[0].clientX - touchStart.current.x;
        const dy = e.changedTouches[0].clientY - touchStart.current.y;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) dx < 0 ? next() : prev();
        touchStart.current = null;
    };

    const translateX = -(trackIdx * cardPct);

    return (
        <section id="certificates" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 mb-12">
                <p className="section-label mb-5">Certificates & Awards</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight">인증 수상</h2>
            </div>

            <div
                className="relative w-full max-w-[1920px] mx-auto px-16 md:px-20"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <button onClick={prev} aria-label="Previous"
                    className="absolute left-4 top-[120px] z-20 w-10 h-10 rounded-full bg-white border border-[#E5E8EF] shadow-sm flex items-center justify-center hover:bg-[#0A1628] hover:border-[#0A1628] transition-all group cursor-pointer">
                    <ChevronLeft size={18} className="text-[#4B5C73] group-hover:text-white transition-colors" />
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(${translateX}%)`,
                            transition: animating ? `transform ${TRANS_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : 'none',
                            willChange: 'transform',
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extended.map((cert, i) => (
                            <div key={i} className="shrink-0 px-3" style={{ width: `${cardPct}%` }}>
                                <div className="premium-card p-4 flex flex-col items-center gap-4">
                                    <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-[#F7F8FB]">
                                        <Image
                                            src={cert.image}
                                            alt={cert.name}
                                            className="object-contain p-4"
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <p className="text-sm font-medium text-[#0A1628] text-center">{cert.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={next} aria-label="Next"
                    className="absolute right-4 top-[120px] z-20 w-10 h-10 rounded-full bg-white border border-[#E5E8EF] shadow-sm flex items-center justify-center hover:bg-[#0A1628] hover:border-[#0A1628] transition-all group cursor-pointer">
                    <ChevronRight size={18} className="text-[#4B5C73] group-hover:text-white transition-colors" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-8">
                    {certificates.map((_, i) => (
                        <button key={i} onClick={() => {
                            if (animatingRef.current) return;
                            animatingRef.current = true;
                            setAnimating(true);
                            setTrackIdx(CLONE_COUNT + i);
                        }}
                            className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeDot ? 'w-6 h-2 bg-[#B8965F]' : 'w-2 h-2 bg-[#D1D8E0] hover:bg-[#8896A8]'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
