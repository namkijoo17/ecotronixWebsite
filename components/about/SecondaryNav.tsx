'use client';

import { Link } from '@/routing';
import React from 'react';

const navItems = [
    { label: 'CEO 인사말', id: 'ceo-message' },
    { label: '연혁', id: 'history' },
    { label: '인증 수상', id: 'certificates' },
    { label: '조직도', id: 'org-chart' },
    { label: 'Location', id: 'map' },
];

export function SecondaryNav() {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const sections = navItems.map(n => n.id);
        const handleScrollEvent = () => {
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
        window.addEventListener('scroll', handleScrollEvent);
        handleScrollEvent();
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 140;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full border-b border-[#E5E8EF] bg-white fixed top-[72px] left-0 z-40">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20 h-14 flex items-center justify-between">
                <Link href="/#about">
                    <span className="text-base font-semibold text-[#0A1628] hover:text-[#1E3A5F] transition-colors">About</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(({ label, id }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleScroll(e, id)}
                            className={`text-sm font-medium transition-colors ${
                                activeSection === id
                                    ? 'text-[#0A1628] border-b-2 border-[#B8965F] pb-0.5'
                                    : 'text-[#4B5C73] hover:text-[#0A1628]'
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
