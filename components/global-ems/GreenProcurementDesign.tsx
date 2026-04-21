'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

type Props = {}

const GreenProcurementDesign = (props: Props) => {
    return (
        <section className="w-full pb-24 md:pb-32 bg-[#F4F6F5] overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Top Line */}
                    <div className="w-full h-px bg-gray-300/60 mb-16"></div>

                    {/* Diagram Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex justify-center"
                    >
                        <img
                            src="images/green-image.svg"
                            alt="Green Procurement Flow Diagram"
                            className="w-full h-auto object-contain shadow-sm rounded-xl"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GreenProcurementDesign