import React from 'react';

export function LogosSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto pb-12 pt-4 overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] opacity-40 grayscale hover:grayscale-0 transition-all duration-15000">
        {/* First set of logos */}
        <div className="flex items-center gap-16 px-8">
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
        </div>
        {/* Second set of logos for seamless loop */}
        <div className="flex items-center gap-16 px-8">
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
          <div className="text-2xl font-bold tracking-tighter">LOGOIPSUM</div>
        </div>
      </div>
    </section>
  );
}
