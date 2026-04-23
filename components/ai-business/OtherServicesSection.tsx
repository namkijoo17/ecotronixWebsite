"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        href: "/marine-electronics",
        title: "Marine Electronics",
        desc: "해양 선박용 항해 전자장비 개발 및 공급",
        image: "/images/marine-thumb.png",
    },
    {
        href: "/global-ems",
        title: "Global EMS/ODM",
        desc: "Global Trading, EMS 및 ODM 사업",
        image: "/images/global-ems.png",
    },
];

export function OtherServicesSection() {
    return (
        <section id="services" className="w-full bg-[#F7F8FB] py-20 md:py-28">
            <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

                <p className="section-label mb-5">Other Services</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0A1628] tracking-tight mb-12">추가 서비스</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((svc, idx) => (
                        <Link key={idx} href={svc.href} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="premium-card overflow-hidden group cursor-pointer"
                            >
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#0A1628]/10 group-hover:bg-[#0A1628]/0 transition-colors" />
                                </div>
                                <div className="p-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-base font-semibold text-[#0A1628]">{svc.title}</h3>
                                        <p className="text-xs text-[#8896A8] mt-1">{svc.desc}</p>
                                    </div>
                                    <div className="w-9 h-9 flex items-center justify-center border border-[#E5E8EF] rounded-lg group-hover:bg-[#0A1628] group-hover:border-[#0A1628] transition-all">
                                        <ArrowUpRight className="w-4 h-4 text-[#8896A8] group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
