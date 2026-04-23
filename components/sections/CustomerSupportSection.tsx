"use client";

import React from "react";
import { NewsAnnouncement } from "./NewsAnnouncement";
import { ResourceDownloadSection } from "./ResourceDownloadSection";
import { ContactUsSection } from "./ContactUsSection";

export function CustomerSupportSection() {
  return (
    <section id="customer_support" className="w-full bg-white py-20 md:py-28">
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="mb-12">
          <p className="section-label mb-4">Customer Support</p>
          <h2 className="section-heading">고객지원</h2>
        </div>
        <div className="space-y-14">
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
