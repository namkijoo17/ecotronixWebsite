"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming this utility exists, or simple className concatenation

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        "fixed right-6 bottom-6 md:right-10 md:bottom-10 w-11 h-11 rounded-xl bg-[#0A1628] flex items-center justify-center text-white shadow-lg shadow-[#0A1628]/20 hover:bg-[#1E3A5F] hover:shadow-xl transition-all duration-300 z-[100]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4.5 h-4.5" />
    </button>
  );
}
