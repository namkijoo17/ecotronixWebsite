'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const SupplyChain = (props: Props) => {
    return (
        <section id="trading" className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/supply_bg.JPG"
                    alt="Global Network"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scaleX(-1)' }}
                    referrerPolicy="no-referrer"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1a]/90"></div> */}
            </div>

            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header Content */}
                    <div className="max-w-3xl mb-12 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-[1.15]"
                        >
                            Supply<br />Chain Excellence
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300 text-base md:text-lg leading-relaxed"
                        >
                            30년 이상의 풍부한 구매 실적을 통한 글로벌 조달 서비스 제공<br />
                            설계/양산을 동시에 고려한 최적의 조달 서비스 제공
                        </motion.p>
                    </div>

                    {/* Divider Line */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full h-[1px] bg-white/10 mb-12 md:mb-16 origin-left"
                    ></motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10 hover:bg-white/15 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-1 bg-[#8dc63f]"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">제조관점</h3>
                            </div>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                최적의 하네스 부재 추천<br />
                                사출, 판금 등 전문적 대응
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10 hover:bg-white/15 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-1 bg-[#8dc63f]"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">설계/개발 관점</h3>
                            </div>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                최적의 부재 선정<br />
                                대체품, 대체회로 제안
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10 hover:bg-white/15 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-1 bg-[#8dc63f]"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">조달 관점</h3>
                            </div>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                풍부한 글로벌 공급망을<br />
                                통한 안정적인 부재 공급
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupplyChain