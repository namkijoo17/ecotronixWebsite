import { ArrowUpRight } from 'lucide-react';

export default function ButtonStyle() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <button className="group flex items-center justify-between w-[280px] h-[80px] pl-10 pr-3 bg-gradient-to-r from-[#5A8DFF] via-[#1E78FF] to-[#9D28F0] rounded-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                <span className="text-white font-bold text-[26px] tracking-wide">
                    문의하기
                </span>
                <div className="flex items-center justify-center w-[60px] h-[60px] bg-white rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <ArrowUpRight className="w-7 h-7 text-black" strokeWidth={1.5} />
                </div>
            </button>
        </div>
    );
}