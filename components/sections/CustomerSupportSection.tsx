"use client";

import React from "react";
import { NewsAnnouncement } from "./NewsAnnouncement";
import { ResourceDownloadSection } from "./ResourceDownloadSection";
import { ContactUsSection } from "./ContactUsSection";

export function CustomerSupportSection() {
  return (
    <section id="customer_support" className="w-full bg-[#F7F8FB] py-24 md:py-32">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8896A8]">Customer Support</span>
          <div className="h-px bg-[#E5E8EF] w-16" />
        </div>
        <h2 className="text-5xl md:text-6xl font-semibold text-[#0A1628] tracking-tight mb-16">고객지원</h2>

        <div className="space-y-16">
          <NewsAnnouncement />
          <div className="h-px bg-[#E5E8EF]" />
          <ResourceDownloadSection />
          <div className="h-px bg-[#E5E8EF]" />
          <ContactUsSection />
        </div>
      </div>
    </section>
  );
}
