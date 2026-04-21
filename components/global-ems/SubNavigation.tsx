'use client';

import React from 'react';
import { useRouter } from '@/routing';


export function SubNavigation() {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const sections = ['odm', 'ems', 'trading', 'other'];
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
                        Global EMS/ODM
                    </h1>
                </button>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#odm" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'odm' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>ODM 서비스</a>
                    <a href="#ems" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'ems' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>EMS 서비스</a>
                    <a href="#trading" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'trading' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>글로벌 상사</a>
                    <a href="#other" className={`text-sm transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'other' ? 'font-bold text-gray-900 scale-105' : 'font-medium text-gray-500 hover:text-gray-900'}`}>추가 서비스</a>
                </nav>
            </div>
        </div>
    );
}
