"use client";

import * as React from "react";
import { Link, usePathname, useRouter } from "@/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "회사소개", href: "/#about" },
    { name: "사업분야", href: "/#business" },
    { name: "연구개발", href: "/#rnd" },
    { name: "고객지원", href: "/#customer_support" },
];

const aboutSubMenu = [
    { title: "CEO 인사말", desc: "에코트로닉스는 1991년 10월에 설립", image: "/images/ceomenu.png", href: "/about#ceo" },
    { title: "주요 연혁", desc: "창립 이래 주요 이정표와 성장", image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop", href: "/about#history" },
    { title: "인증 수상", desc: "우리의 인증, 인정, 그리고 성과", image: "https://images.unsplash.com/photo-1559077670-05b01355df09?q=80&w=2070&auto=format&fit=crop", href: "/about#certificates" },
    { title: "조직도", desc: "우리 팀이 어떻게 성과를 낼 수 있는지", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop", href: "/about#org-chart" },
    { title: "Location", desc: "본사 및 공장 주소와 지시 사항", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop", href: "/about#map" },
];

const rndSubMenu = [
    { title: "IoT Devices", desc: "RFID 모듈, 산업용 PDA, GPS Tracker, 센서 기반 IoT 기기", image: "/images/iot_img.png", href: "/?rndTab=iot#rnd" },
    { title: "Industrial Electronics", desc: "산업용 컨트롤러, 무선통신기기, 계측기/검사기", image: "/images/indus_electronics.png", href: "/?rndTab=ind_electronics#rnd" },
    { title: "Medical Electronics", desc: "환자 모니터링, 골밀도·혈압계 등 의료 기기", image: "/images/medical_electronics.png", href: "/?rndTab=medical_electronics#rnd" },
];

const servicesSubMenu = [
    { title: "Marine Electronics", desc: "해양 선박용 항해 전자장비 개발", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop", href: "/marine-electronics" },
    { title: "Vision AI 솔루션", desc: "AI 자동화 검사기 & 스마트팩토리 Robot 솔루션", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", href: "/ai-business" },
    { title: "Global EMS/ODM", desc: "Global Trading, EMS 및 ODM 사업", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", href: "/global-ems" },
];

const supportSubMenu = [
    { title: "뉴스/공지", desc: "새로운 소식과 주요 공지사항", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop", href: "/#customer_support" },
    { title: "자료 다운로드", desc: "제품 카탈로그, 매뉴얼 및 인증서", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", href: "/#downloads" },
    { title: "상담 요청", desc: "프로젝트 문의를 남겨주시면 신속히 답변드립니다", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2073&auto=format&fit=crop", href: "/#contact" },
];

const subMenuMap: Record<string, typeof aboutSubMenu> = {
    "회사소개": aboutSubMenu,
    "사업분야": servicesSubMenu,
    "연구개발": rndSubMenu,
    "고객지원": supportSubMenu,
};

function DropdownMenu({ items, onLinkClick }: { items: typeof aboutSubMenu; onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:pointer-events-auto transition-all duration-200 w-[440px] z-50">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">
                {items.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        onClick={onLinkClick ? (e) => onLinkClick(e, item.href) : undefined}
                        className="flex items-center gap-4 px-5 py-4 hover:bg-[#F5F7FF] transition-colors group/item border-b border-gray-50 last:border-0 cursor-pointer"
                    >
                        <div className="flex-shrink-0 w-16 h-12 relative rounded-lg overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover/item:scale-110" unoptimized />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                            <span className="text-sm font-semibold text-gray-900 group-hover/item:text-[#0057FF] transition-colors">
                                {item.title}
                            </span>
                            <span className="text-xs text-gray-500 mt-0.5 leading-snug">
                                {item.desc}
                            </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#0057FF] flex-shrink-0 transition-colors" />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const handleLocaleChange = (newLocale: string) => router.replace(pathname, { locale: newLocale });

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => { setIsOpen(false); }, [pathname]);

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const hashIndex = href.indexOf('#');
        const hasHash = hashIndex >= 0;
        const isHashLink = href.startsWith('/#') || href.startsWith('#') || (href.startsWith('/') && hasHash);
        if (isHashLink) {
            setIsOpen(false);
            if (pathname === '/') {
                const targetId = hasHash ? href.substring(hashIndex + 1) : href.substring(1);
                if (!targetId) return;
                const element = document.getElementById(targetId);
                if (!element) return;
                e.preventDefault();
                router.push(href);
                try {
                    const hrefNoHash = hasHash ? href.substring(0, hashIndex) : href;
                    const qs = hrefNoHash.indexOf('?') >= 0 ? hrefNoHash.substring(hrefNoHash.indexOf('?') + 1) : '';
                    const tabId = qs ? new URLSearchParams(qs).get('rndTab') : null;
                    if (tabId) window.dispatchEvent(new CustomEvent('rndTabSelect', { detail: { tabId } }));
                } catch { /* ignore */ }
                setTimeout(() => {
                    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }, 100);
            }
        }
    };

    const localeLabels: Record<string, string> = { ko: "KO", en: "EN", ja: "JP" };
    const allLocales = [
        { code: "ko", label: "한국어" },
        { code: "en", label: "English" },
        { code: "ja", label: "日本語" },
    ];

    return (
        <>
            <header className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-sm"
                    : "bg-white/90 backdrop-blur-md border-b border-gray-100"
            )}>
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 h-18 flex items-center justify-between">

                    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0">
                        <Image src="/images/eco_logo.svg" alt="ECOTRONIX" width={160} height={40} className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const subItems = subMenuMap[link.name];
                            return (
                                <div key={link.name} className="relative group/nav-item">
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleScrollToSection(e, link.href)}
                                        className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                                    >
                                        {link.name}
                                        {subItems && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover/nav-item:opacity-100 transition-opacity" />}
                                    </Link>
                                    {subItems && <DropdownMenu items={subItems} onLinkClick={handleScrollToSection} />}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="relative group/lang">
                            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                <span>{localeLabels[locale] ?? locale.toUpperCase()}</span>
                                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                            </button>
                            <div className="absolute top-full right-0 pt-2 opacity-0 pointer-events-none group-hover/lang:opacity-100 group-hover/lang:pointer-events-auto transition-all duration-200 w-36 z-50">
                                <div className="bg-white border border-gray-100 rounded-xl shadow-2xl shadow-black/10 overflow-hidden py-1">
                                    {allLocales.map(({ code, label }) => (
                                        <button key={code} onClick={() => handleLocaleChange(code)}
                                            className={cn("w-full text-left px-4 py-3 text-sm transition-colors hover:bg-[#F5F7FF] cursor-pointer",
                                                locale === code ? "text-[#0057FF] font-semibold bg-[#F5F7FF]" : "text-gray-700 font-medium")}>
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-px h-5 bg-gray-200" />
                        <button onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-[#0057FF] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0046CC] transition-colors shadow-sm shadow-blue-500/20 cursor-pointer">
                            문의하기
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-gray-100 bg-white overflow-hidden">
                            <div className="px-6 py-4 space-y-1">
                                {navLinks.map((link) => {
                                    const subItems = subMenuMap[link.name];
                                    const isExpanded = mobileOpen === link.name;
                                    return (
                                        <div key={link.name}>
                                            <div className="flex items-center justify-between">
                                                <Link href={link.href} onClick={(e) => handleScrollToSection(e, link.href)}
                                                    className="flex-1 px-3 py-3.5 text-sm font-medium text-gray-800 hover:text-[#0057FF] transition-colors">
                                                    {link.name}
                                                </Link>
                                                {subItems && (
                                                    <button onClick={() => setMobileOpen(isExpanded ? null : link.name)} className="p-2 text-gray-400 cursor-pointer">
                                                        <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                                                    </button>
                                                )}
                                            </div>
                                            <AnimatePresence>
                                                {subItems && isExpanded && (
                                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                                                        <div className="pl-4 pb-2 space-y-1">
                                                            {subItems.map((item, idx) => (
                                                                <Link key={idx} href={item.href} onClick={() => setIsOpen(false)}
                                                                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F5F7FF] transition-colors">
                                                                    <div className="w-9 h-9 rounded-md overflow-hidden flex-shrink-0 relative">
                                                                        <Image src={item.image} alt={item.title} fill className="object-cover" unoptimized />
                                                                    </div>
                                                                    <span className="text-sm font-medium text-gray-700">{item.title}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                                <div className="pt-4 pb-1 flex items-center justify-between border-t border-gray-100 mt-2">
                                    <div className="flex items-center gap-1">
                                        {allLocales.map(({ code, label }) => (
                                            <button key={code} onClick={() => handleLocaleChange(code)}
                                                className={cn("px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer",
                                                    locale === code ? "bg-[#F5F7FF] text-[#0057FF] font-semibold" : "text-gray-600")}>
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                    <button onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                                        className="flex items-center gap-1.5 bg-[#0057FF] text-white text-sm font-semibold px-4 py-2.5 rounded-lg cursor-pointer">
                                        문의하기 <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}>
                        <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 16 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-100">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.12em] text-[#0057FF] uppercase mb-1.5">ECOTRONIX</p>
                                    <h3 className="text-xl font-semibold text-gray-900">문의하기</h3>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="px-8 py-6 overflow-y-auto max-h-[65vh]">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { label: "성 *", placeholder: "홍", type: "text" },
                                            { label: "이름 *", placeholder: "길동", type: "text" },
                                            { label: "이메일", placeholder: "example@email.com", type: "email" },
                                            { label: "전화번호", placeholder: "010-0000-0000", type: "tel" },
                                        ].map(({ label, placeholder, type }) => (
                                            <div key={label}>
                                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{label}</label>
                                                <input type={type} placeholder={placeholder} className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-400 outline-none transition-colors text-sm" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">문의 내용</label>
                                        <textarea rows={4} placeholder="문의하실 내용을 입력해 주세요" className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-[#0057FF] bg-transparent text-gray-900 placeholder-gray-400 outline-none transition-colors resize-none text-sm" />
                                    </div>
                                </form>
                            </div>
                            <div className="px-8 pb-8 pt-4 flex justify-end gap-3">
                                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer">취소</button>
                                <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#0057FF] text-white hover:bg-[#0046CC] transition-colors cursor-pointer">제출하기</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
