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
                            <div className="w-3 h-1 bg-[#0066ff]"></div>
                            <span className="text-sm font-bold tracking-widest text-gray-900 uppercase">{subtitle}</span>
                        </div>
                    )}
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">{title}</h2>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 mt-5 md:mt-0">
                    <button
                        onClick={() => scroll('left')}
                        disabled={currentIndex === 0}
                        className={`w-14 h-14 rounded-full shadow-sm flex items-center justify-center transition-colors ${currentIndex === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={currentIndex >= maxIndex}
                        className={`w-14 h-14 rounded-full shadow-md flex items-center justify-center transition-colors ${currentIndex >= maxIndex
                            ? 'bg-blue-300 text-white cursor-not-allowed'
                            : 'bg-[#0066ff] text-white hover:bg-blue-700'
                            }`}
                    >
                        <ChevronRight className="w-6 h-6" />
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
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#0066ff]' : 'w-1.5 bg-gray-400 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
