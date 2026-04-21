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
        <div className="w-full fixed top-20 left-0 z-40">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-3">
                <div className="h-14 rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-xl flex items-center justify-start gap-12 px-4 md:px-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)]">
                <button
                    onClick={() => router.push('/#business')}
                    className="flex items-center gap-1.5 group"
                    aria-label="Go to Services"
                >
                    <h1 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-[#0057FF] transition-colors">
                        Global EMS/ODM
                    </h1>
                </button>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#odm" className={`text-sm transition-colors ${activeSection === 'odm' ? 'font-semibold text-[#0057FF]' : 'font-medium text-gray-500 hover:text-gray-900'}`}>ODM 서비스</a>
                    <a href="#ems" className={`text-sm transition-colors ${activeSection === 'ems' ? 'font-semibold text-[#0057FF]' : 'font-medium text-gray-500 hover:text-gray-900'}`}>EMS 서비스</a>
                    <a href="#trading" className={`text-sm transition-colors ${activeSection === 'trading' ? 'font-semibold text-[#0057FF]' : 'font-medium text-gray-500 hover:text-gray-900'}`}>글로벌 상사</a>
                    <a href="#other" className={`text-sm transition-colors ${activeSection === 'other' ? 'font-semibold text-[#0057FF]' : 'font-medium text-gray-500 hover:text-gray-900'}`}>추가 서비스</a>
                </nav>
            </div>
            </div>
        </div>
    );
}
