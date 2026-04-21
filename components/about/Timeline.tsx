import React from 'react';

const timelineData = [
    {
        decade: "1990's",
        direction: "up",
        events: [
            { year: "1991", text: "에어로텍닉스(주) 설립" }
        ]
    },
    {
        decade: "2000's",
        direction: "down",
        events: [
            { year: "2007", text: "전자제조공장 설립" },
            { year: "2003", text: "기업부설연구소 설립" },
            { year: "2002", text: "ISO 9001인증" },
            { year: "2000", text: "에어로텍닉스(주) 설립" }
        ]
    },
    {
        decade: "2010's",
        direction: "up",
        events: [
            { year: "2011", text: "ISO 14001 & INNOBIZ인증" },
            { year: "2013", text: "2천만불 수출의 탑 수상" },
            { year: "2014", text: "전자제조공장 설립" }
        ]
    },
    {
        decade: "2020's",
        direction: "down",
        events: [
            { year: "2025", text: "산업포장 수상" },
            { year: "2023", text: "대정공장본부\n현미래지식산업 선정" },
            { year: "2023", text: "대정공장본부\n현미래지식산업 선정" }
        ]
    }
];

export function Timeline() {
    return (
        <section className="py-24 bg-[#F0F0F0] overflow-hidden">
            <div className="mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20 lg:mb-48">
                    제조기반 확대 / R&D 지속투자 / 지속성장
                </h2>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative w-full mb-32">
                    {/* Central Bar */}
                    <div className="bg-[#4285F4] rounded-full flex items-center h-16 relative z-10">
                        {timelineData.map((item, index) => (
                            <div key={item.decade} className="flex-1 flex items-center justify-center relative h-full">
                                <span className="text-2xl font-bold text-gray-900">{item.decade}</span>

                                {/* Separator */}
                                {index < 3 && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-black/20"></div>}

                                {/* Timeline Content */}
                                {item.direction === 'up' ? (
                                    <div className="absolute bottom-full left-1/2 w-[2px] h-32 bg-black origin-bottom">
                                        {/* Dot */}
                                        <div className="absolute -top-3 -left-[11px] w-6 h-6 rounded-full bg-black border-4 border-[#4285F4] z-10"></div>
                                        {/* Text Container */}
                                        <div className="absolute top-[-10px] left-8 w-max">
                                            <div className="flex flex-col gap-2">
                                                {item.events.map((event, i) => (
                                                    <div key={i} className="flex items-start gap-3 mb-4">
                                                        <span className="text-[#4285F4] font-bold w-10 text-right">{event.year}</span>
                                                        <span className="text-gray-700 text-sm whitespace-pre-line">{event.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute top-full left-1/2 w-[2px] h-32 bg-black origin-top">
                                        {/* Dot */}
                                        <div className="absolute -bottom-3 -left-[11px] w-6 h-6 rounded-full bg-black border-4 border-[#4285F4] z-10"></div>
                                        {/* Text Container */}
                                        <div className="absolute bottom-[-10px] right-8 w-max">
                                            <div className="flex flex-col gap-2">
                                                {item.events.map((event, i) => (
                                                    <div key={i} className="flex items-start gap-3">
                                                        <span className="text-[#4285F4] font-bold w-10 text-right">{event.year}</span>
                                                        <span className="text-gray-700 text-sm whitespace-pre-line">{event.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden flex flex-col gap-12">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-[#4285F4]">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-black border-4 border-[#4285F4]"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 -mt-1">{item.decade}</h3>
                            <div className="flex flex-col gap-4">
                                {item.events.map((event, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                        <span className="text-[#4285F4] font-bold w-12 flex-shrink-0">{event.year}</span>
                                        <span className="text-gray-700 text-sm whitespace-pre-line">{event.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
