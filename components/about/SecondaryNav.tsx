'use client';

import { Link } from '@/routing';
import React from 'react';

export function SecondaryNav() {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        const sections = ['ceo-message', 'history', 'certificates', 'org-chart', 'map'];
        const handleScrollEvent = () => {
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
        window.addEventListener('scroll', handleScrollEvent);
        handleScrollEvent();
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const yOffset = -130; // Adjust for the sticky nav and header height
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full border-b border-gray-200 bg-white fixed top-20 left-0 z-40">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-6 flex items-center justify-start gap-12">
                <Link href="/#about"><h2 className="text-3xl font-medium text-gray-900 hover:text-[#6b8e23] transition-colors">About us</h2></Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
                    <a href="#ceo-message" onClick={(e) => handleScroll(e, 'ceo-message')} className={`transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'ceo-message' ? 'font-bold text-blue-600 scale-105' : 'font-medium hover:text-blue-600'}`}>CEO인사말</a>
                    <a href="#history" onClick={(e) => handleScroll(e, 'history')} className={`transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'history' ? 'font-bold text-blue-600 scale-105' : 'font-medium hover:text-blue-600'}`}>연혁</a>
                    <a href="#certificates" onClick={(e) => handleScroll(e, 'certificates')} className={`transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'certificates' ? 'font-bold text-blue-600 scale-105' : 'font-medium hover:text-blue-600'}`}>인증 수상</a>
                    <a href="#org-chart" onClick={(e) => handleScroll(e, 'org-chart')} className={`transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'org-chart' ? 'font-bold text-blue-600 scale-105' : 'font-medium hover:text-blue-600'}`}>조직도</a>
                    <a href="#map" onClick={(e) => handleScroll(e, 'map')} className={`transition-all duration-300 transform hover:scale-110 inline-block ${activeSection === 'map' ? 'font-bold text-blue-600 scale-105' : 'font-medium hover:text-blue-600'}`}>Location</a>
                </nav>
            </div>
        </div>
    );
}
