import React from 'react';

const orgData = [
    { id: 'qa', title: '품질보증실', teams: [] },
    { id: 'prod', title: '생산본부', teams: ['기판생산팀', '제품생산팀', '품질기술팀', '생산관리팀'] },
    { id: 'fin', title: '재무관리실', teams: ['회계팀', '인사총무팀'] },
    { id: 'newbiz', title: '신사업실', teams: ['신사업팀'] },
    { id: 'scm', title: 'SCM실', teams: ['영업팀', '구매팀'] },
    { id: 'rnd', title: '연구소', teams: ['AI팀', 'SW팀', 'HW팀', '기구개발팀'] },
];

export function OrganizationChart() {
    return (
        <section id="org-chart" className="py-20 md:py-28 bg-[#0A1628] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

                <p className="section-label mb-5 text-[#B8965F]">Organization</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-14">조직도</h2>

                <div className="w-full overflow-x-auto pb-8 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20">
                    <div className="w-[1050px] mx-auto relative pt-4 h-[520px]">

                        <svg width="1050" height="230" viewBox="0 0 1050 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 z-10">
                            <line x1="617" y1="50" x2="617" y2="110" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="617" y1="80" x2="65" y2="80" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="65" y1="80" x2="65" y2="230" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="617" y1="160" x2="617" y2="200" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="249" y1="200" x2="985" y2="200" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="249" y1="200" x2="249" y2="230" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="433" y1="200" x2="433" y2="230" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="617" y1="200" x2="617" y2="230" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="801" y1="200" x2="801" y2="230" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                            <line x1="985" y1="200" x2="985" y2="230" stroke="#B8965F" strokeWidth="1" strokeOpacity="0.6" />
                        </svg>

                        {[
                            { label: "대표이사", left: 617, top: 0 },
                            { label: "상무이사", left: 617, top: 110 },
                        ].map(({ label, left, top }) => (
                            <div key={label}
                                className="absolute z-20 w-[120px] h-[50px] bg-[#1E3A5F] border border-[#B8965F]/30 rounded-lg flex items-center justify-center"
                                style={{ left: `${left}px`, top: `${top}px`, transform: 'translateX(-50%)' }}
                            >
                                <span className="text-white font-semibold text-sm">{label}</span>
                            </div>
                        ))}

                        {orgData.map((col, index) => {
                            const centers = [65, 249, 433, 617, 801, 985];
                            return (
                                <div key={col.id} className="absolute top-[230px] w-[120px] flex flex-col items-center z-20" style={{ left: `${centers[index]}px`, transform: 'translateX(-50%)' }}>
                                    <div className="w-full bg-white rounded-lg h-[50px] flex items-center justify-center shadow-sm">
                                        <span className="text-[#0A1628] font-semibold text-xs text-center px-2">{col.title}</span>
                                    </div>
                                    {col.teams.length > 0 && (
                                        <div className="mt-5 flex flex-col gap-3 w-full pl-2">
                                            {col.teams.map(team => (
                                                <div key={team} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-[#B8965F]" />
                                                    <span className="text-[#8896A8] text-xs">{team}</span>
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
