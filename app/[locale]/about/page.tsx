import React from 'react';
import { SecondaryNav } from '@/components/about/SecondaryNav';
import { AboutHero } from '@/components/about/AboutHero';
import { CEOMessage } from '@/components/about/CEOMessage';
import { CompanyHistory } from '@/components/about/CompanyHistory';
import { Timeline } from '@/components/about/Timeline';
import { Certificates } from '@/components/about/Certificates';
import { CertificationLogos } from '@/components/about/CertificationLogos';
import { OrganizationChart } from '@/components/about/OrganizationChart';
import { MapSection } from '@/components/about/MapSection';

export default function About() {
    return (
        <div className="w-full flex flex-col">
            <SecondaryNav />
            <div className="h-11" />
            {/* <AboutHero /> */}
            <CEOMessage />
            <CompanyHistory />
            <Timeline />
            <Certificates />
            <CertificationLogos />
            <OrganizationChart />
            <MapSection />
        </div>
    );
}
