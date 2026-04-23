'use client';

import React from 'react';
import { useRouter } from '@/routing';

const navItems = [
    { label: '목표', id: 'goal' },
    { label: '주요 제품', id: 'products' },
    { label: '주요 기술', id: 'technology' },
    { label: '추가 서비스', id: 'services' },
];

export function SubNavigation() {
    const router = useRouter();
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const sections = navItems.map(n => n.id);
        const handleScroll = () => {
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) current = section;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full border-b border-[#E5E8EF] bg-white fixed top-[72px] left-0 z-40">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 h-14 flex items-center justify-between">
                <button onClick={() => router.push('/#business')} className="text-base font-semibold text-[#0A1628] hover:text-[#1E3A5F] transition-colors">
                    Vision AI 솔루션
                </button>
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(({ label, id }) => (
                        <a key={id} href={`#${id}`}
                            className={`text-sm font-medium transition-colors ${activeSection === id ? 'text-[#0A1628] border-b-2 border-[#B8965F] pb-0.5' : 'text-[#4B5C73] hover:text-[#0A1628]'}`}>
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
