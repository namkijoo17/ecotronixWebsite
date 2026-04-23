import React from 'react';

export function LogosSection() {
  return (
    <section className="w-full bg-[#F7F8FB] border-y border-[#E5E8EF] py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-[0.16em] uppercase text-[#8896A8] mb-8">Partners & Clients</p>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] opacity-50 hover:opacity-70 transition-opacity duration-500">
        <div className="flex items-center gap-20 px-10">
          {['SAMSUNG', 'HYUNDAI', 'LG CNS', 'DAEWOO', 'HANWHA', 'POSCO', 'KT'].map((name) => (
            <span key={name} className="text-sm font-bold tracking-[0.12em] text-[#4B5C73]">{name}</span>
          ))}
        </div>
        <div className="flex items-center gap-20 px-10">
          {['SAMSUNG', 'HYUNDAI', 'LG CNS', 'DAEWOO', 'HANWHA', 'POSCO', 'KT'].map((name) => (
            <span key={`${name}-2`} className="text-sm font-bold tracking-[0.12em] text-[#4B5C73]">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
