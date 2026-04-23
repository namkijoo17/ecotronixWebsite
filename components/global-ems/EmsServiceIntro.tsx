'use client'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const EmsServiceIntro = (props: Props) => {
    return (
        <section id="ems" className="w-full py-24 md:py-32 bg-[#F7F8FB] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
                            alt="EMS Service"
                            className="w-full aspect-[4/3] rounded-[2rem] object-cover shadow-sm"
                        />
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#111] leading-[1.2] tracking-tight mb-8 md:mb-10">
                            전자기기제조위탁<br />
                            (EMS) 서비스
                        </h2>
                        <p className="text-[#444] text-base md:text-[17px] leading-[1.8] font-light break-keep">
                            에코트로닉스의 최신 제조 서비스는 고객사의 비용 절감과 시장에 신속하게 대응할 수 있는 신뢰성 있는 제품 공급으로 경쟁력을 제공합니다. 다품종 소량 제조 대응은 PCB Assembly 부터 완성품 제조 대응까지 End-to-end solution을 제공합니다. 정밀통신기기부터 다양한 IoT기기, 산업용 제어기기, 의료기기 등 고객의 요구에 따라 광범위한 통합된 디자인, 엔지니어링, 조립, 물류 등의 통합된 서비스로 지원됩니다.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default EmsServiceIntro