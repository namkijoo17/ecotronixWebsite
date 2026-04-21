"use client";

import React from "react";
import { NewsAnnouncement } from "./NewsAnnouncement";
import { ResourceDownloadSection } from "./ResourceDownloadSection";
import { ContactUsSection } from "./ContactUsSection";

export function CustomerSupportSection() {
  return (
    <section id="customer_support" className="w-full bg-[#F0F4F8] py-20 md:py-28">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-5 h-[2px] bg-[#0057FF]" />
            <span className="text-xs font-semibold tracking-[0.12em] text-[#0057FF] uppercase">Customer Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">고객지원</h2>
        </div>

        <div className="space-y-20">
          <NewsAnnouncement />
          <ResourceDownloadSection />
          <ContactUsSection />
        </div>
      </div>
    </section>
  );
}
