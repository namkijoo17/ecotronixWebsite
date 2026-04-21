"use client";

import React from "react";
import { NewsAnnouncement } from "./NewsAnnouncement";
import { ResourceDownloadSection } from "./ResourceDownloadSection";
import { ContactUsSection } from "./ContactUsSection";

export function CustomerSupportSection() {
  return (
    <section id="customer_support" className="w-full py-12 md:py-16">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="section-shell !bg-[#f8fbff] !border-slate-200 p-6 md:p-8 lg:p-10">
          <div className="mb-10 md:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#2d5bcb] uppercase">Customer Support</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-4">고객지원</h2>
          </div>
          <div className="space-y-10 md:space-y-12">
            <NewsAnnouncement />
            <ResourceDownloadSection />
            <ContactUsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
