import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    title: React.ReactNode;
    subtitle?: string;
    items: React.ReactNode[];
    itemClassName?: string;
    gap?: number;
    onPageChange?: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({
    title,
    subtitle,
    items,
    itemClassName = "min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]",
    gap = 24,
    onPageChange,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    useEffect(() => {
        const updateMaxIndex = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;
                const firstChild = sliderRef.current.firstElementChild as HTMLElement;
                if (firstChild) {
                    const itemWidth = firstChild.offsetWidth + gap;
                    const visibleItems = Math.floor((containerWidth + gap) / itemWidth);
                    setMaxIndex(Math.max(0, items.length - visibleItems));
                }
            }
        };

        updateMaxIndex();
        window.addEventListener('resize', updateMaxIndex);
        return () => window.removeEventListener('resize', updateMaxIndex);
    }, [items.length, gap]);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const firstChild = sliderRef.current.firstElementChild as HTMLElement;
            if (firstChild) {
                const itemWidth = firstChild.offsetWidth + gap;
                sliderRef.current.scrollBy({
                    left: direction === 'left' ? -itemWidth : itemWidth,
                    behavior: 'smooth'
                });
                onPageChange?.();
            }
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const firstChild = sliderRef.current.firstElementChild as HTMLElement;
            if (firstChild) {
                const itemWidth = firstChild.offsetWidth + gap;
                const newIndex = Math.round(scrollLeft / itemWidth);
                setCurrentIndex(newIndex);
            }
        }
    };

    const scrollTo = (index: number) => {
        if (sliderRef.current) {
            const firstChild = sliderRef.current.firstElementChild as HTMLElement;
            if (firstChild) {
                const itemWidth = firstChild.offsetWidth + gap;
                sliderRef.current.scrollTo({
                    left: itemWidth * index,
                    behavior: 'smooth'
                });
                onPageChange?.();
            }
        }
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
                <div>
                    {subtitle && (
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-1 bg-[#B8965F]"></div>
                            <span className="text-sm font-bold tracking-widest text-[#0A1628] uppercase">{subtitle}</span>
                        </div>
                    )}
                    <h2 className="text-4xl md:text-5xl font-medium text-[#0A1628] tracking-tight">{title}</h2>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 mt-5 md:mt-0">
                    <button
                        onClick={() => scroll('left')}
                        disabled={currentIndex === 0}
                        className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${currentIndex === 0
                            ? 'border-[#E5E8EF] text-[#D1D8E0] cursor-not-allowed'
                            : 'border-[#E5E8EF] text-[#4B5C73] hover:border-[#0A1628] hover:text-[#0A1628] cursor-pointer'
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={currentIndex >= maxIndex}
                        className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${currentIndex >= maxIndex
                            ? 'border-[#E5E8EF] text-[#D1D8E0] cursor-not-allowed'
                            : 'border-[#0A1628] bg-[#0A1628] text-white hover:bg-[#1E3A5F] hover:border-[#1E3A5F] cursor-pointer'
                            }`}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Slider Container */}
            <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
                style={{ gap: `${gap}px`, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((child, index) => (
                    <div key={index} className={`${itemClassName} snap-start shrink-0`}>
                        {child}
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            {maxIndex > 0 && (
                <div className="flex items-center justify-center gap-3 mt-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#0A1628]' : 'w-1.5 bg-[#D1D8E0] hover:bg-[#8896A8]'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
