import React from 'react';

const partners = ['SAMSUNG', 'HYUNDAI', 'LG CNS', 'DAEWOO', 'HANWHA', 'POSCO', 'KT', 'SK'];

export function LogosSection() {
  return (
    <section className="w-full bg-white border-y border-[#E5E8EF] py-8 overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...partners, ...partners].map((name, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="text-xs font-bold tracking-[0.18em] text-[#C8D0DC] hover:text-[#8896A8] transition-colors cursor-default">
              {name}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#E5E8EF]" />
          </div>
        ))}
      </div>
    </section>
  );
}
