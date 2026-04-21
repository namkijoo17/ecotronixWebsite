'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const EcotronixKnowHow = (props: Props) => {
    return (
        <section className="w-full py-24 md:py-32 bg-[#F4F6F5] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                                    alt="ECOTRONIX know-how"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1e6bb8] mb-8 leading-tight">
                                ECOTRONIX<br />
                                know-how
                            </h2>
                            <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed break-keep">
                                <p>
                                    에코트로닉스는 30년 이상의 다양하고 고품질 제품들의 EMS 경험을 통해 구축된 글로벌 공급망을 통해 안정적이고 검증된 부재 조달망을 구축하고 있습니다.
                                </p>
                                <p>
                                    하네스부터, 회로부재, 각종 사출, 판금류 등 수천여 종이 넘는 다양한 부재에 대한 노하우를 통해 안정적인 조달 서비스를 제공합니다.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcotronixKnowHow