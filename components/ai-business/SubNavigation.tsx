'use client';

import React from 'react';
import { useRouter } from '@/routing';


export function SubNavigation() {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const sections = ['goal', 'products', 'technology', 'services'];
        const handleScroll = () => {
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 250) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full border-b border-gray-200 fixed top-20 left-0 bg-white z-40">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 h-16 flex items-center justify-start gap-12">
                <button
                    onClick={() => router.push('/#business')}
                    className="flex items-center gap-1.5 group"
                    aria-label="Go to Services"
                >
                    <h1 className="text-2xl font-medium text-gray-900 group-hover:text-[#6B8E23] transition-colors">
                        Vision AI기반 솔루션
                    </h1>
                </button>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#goal" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'goal' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>목표</a>
                    <a href="#products" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'products' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>주요 제품</a>
                    <a href="#technology" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'technology' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>주요 기술</a>
                    <a href="#services" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'services' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>추가 서비스</a>
                </nav>
            </div>
        </div>
    );
}
