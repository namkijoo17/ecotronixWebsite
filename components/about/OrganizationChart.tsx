import React from 'react';
import { OrgIcon } from './OrgIcon';

const orgData = [
    { id: 'qa', color: '#1D4ED8', title: '품질보증실', icon: 'female', teams: [] },
    { id: 'prod', color: '#EAB308', title: '생산본부', icon: 'female', teams: ['기판생산팀', '제품생산팀', '품질기술팀', '생산관리팀'] },
    { id: 'fin', color: '#84CC16', title: '재무관리실', icon: 'male', teams: ['회계팀', '인사총무팀'] },
    { id: 'newbiz', color: '#06B6D4', title: '신사업실', icon: 'male', teams: ['신사업팀'] },
    { id: 'scm', color: '#3B82F6', title: 'SCM실', icon: 'female', teams: ['영업팀', '구매팀'] },
    { id: 'rnd', color: '#A855F7', title: '연구소', icon: 'male', teams: ['AI팀', 'SW팀', 'HW팀', '기구개발팀'] },
];

export function OrganizationChart() {
    return (
        <section id='org-chart' className="py-24 bg-[#1A1B2F] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-4 h-[3px] bg-[#6B8E23]"></div>
                        <span className="text-sm font-bold tracking-wider text-white uppercase">About Company</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                        조직도
                    </h2>
                </div>

                {/* Chart Container - Scrollable on mobile */}
                <div className="w-full overflow-x-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="w-[1050px] mx-auto relative pt-4 h-[500px]">

                        {/* SVG Routing Lines */}
                        <svg width="1050" height="230" viewBox="0 0 1050 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 z-10">
                            {/* Vertical line from 대표이사 to 상무이사 */}
                            <line x1="617" y1="50" x2="617" y2="110" stroke="white" strokeWidth="1.5" />

                            {/* Horizontal line to 품질보증실 */}
                            <line x1="617" y1="80" x2="65" y2="80" stroke="white" strokeWidth="1.5" />
                            {/* Vertical line down to 품질보증실 */}
                            <line x1="65" y1="80" x2="65" y2="230" stroke="white" strokeWidth="1.5" />

                            {/* Vertical line from 상무이사 down */}
                            <line x1="617" y1="160" x2="617" y2="200" stroke="white" strokeWidth="1.5" />

                            {/* Horizontal line for the 5 departments */}
                            <line x1="249" y1="200" x2="985" y2="200" stroke="white" strokeWidth="1.5" />

                            {/* Vertical lines down to the 5 departments */}
                            <line x1="249" y1="200" x2="249" y2="230" stroke="white" strokeWidth="1.5" />
                            <line x1="433" y1="200" x2="433" y2="230" stroke="white" strokeWidth="1.5" />
                            <line x1="617" y1="200" x2="617" y2="230" stroke="white" strokeWidth="1.5" />
                            <line x1="801" y1="200" x2="801" y2="230" stroke="white" strokeWidth="1.5" />
                            <line x1="985" y1="200" x2="985" y2="230" stroke="white" strokeWidth="1.5" />
                        </svg>

                        {/* Top Boxes */}
                        <div className="absolute left-[617px] -translate-x-1/2 top-0 z-20 w-[120px] h-[50px] bg-[#3bc0d8] rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-[15px]">대표이사</span>
                        </div>

                        <div className="absolute left-[617px] -translate-x-1/2 top-[110px] z-20 w-[120px] h-[50px] bg-[#3bc0d8] rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-[15px]">상무이사</span>
                        </div>

                        {/* Department Columns */}
                        {orgData.map((col, index) => {
                            const centers = [65, 249, 433, 617, 801, 985];
                            return (
                                <div key={col.id} className="absolute top-[230px] w-[120px] flex flex-col items-center z-20" style={{ left: `${centers[index]}px`, transform: 'translateX(-50%)' }}>
                                    <div className="w-full bg-white rounded-lg h-[50px] flex items-center justify-center shadow-lg">
                                        <span className="text-[#3bc0d8] font-bold text-[15px]">{col.title}</span>
                                    </div>
                                    {col.teams.length > 0 && (
                                        <div className="mt-6 flex flex-col gap-4 w-full pl-2">
                                            {col.teams.map(team => (
                                                <div key={team} className="flex items-center gap-3">
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <span className="text-white text-[14px] tracking-wide">{team}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
