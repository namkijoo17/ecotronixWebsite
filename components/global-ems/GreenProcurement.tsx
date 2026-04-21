'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, ClipboardCheck, Settings } from 'lucide-react';
import Image from 'next/image';

type Props = {}

const GreenProcurement = (props: Props) => {
    return (
        <section className="w-full py-24 md:py-32 bg-[#F4F6F5] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 tracking-tight">
                            완벽한 Green 조달 서비스 제공
                        </h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-[#8dc63f] flex flex-col h-full"
                        >
                            <div className="w-24 h-24 mb-8">
                                <Image src="/images/rohs.JPG" alt="Green Procurement 1" width={96} height={96} />
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed break-keep">
                                RoHS 대응, WEEE 대응 등 제품의 각종 환경 규제에 따른 대응 체제 유지
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-[#8dc63f] flex flex-col h-full"
                        >
                            <div className="w-24 h-24 mb-8">
                                <Users className="w-full h-full text-[#8dc63f]" strokeWidth={1.5} />
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed break-keep">
                                원부자재 협력업체와 상호 협력 체제 유지
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-[#8dc63f] flex flex-col h-full"
                        >
                            <div className="w-24 h-24 mb-8">
                                <ClipboardCheck className="w-full h-full text-[#8dc63f]" strokeWidth={1.5} />
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed break-keep">
                                모든 해외 조달품 및 신제품에 채용되는 모든 원부자재에 대한 엄격한 사전 심사 진행
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-[#8dc63f] flex flex-col h-full"
                        >
                            <div className="w-24 h-24 mb-8">
                                <Settings className="w-full h-full text-[#8dc63f]" strokeWidth={1.5} />
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed break-keep">
                                전략물자통제 등 분쟁 광물에 대한 대응 체제
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default GreenProcurement