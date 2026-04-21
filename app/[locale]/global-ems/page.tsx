import React from 'react';
import { SubNavigation } from '@/components/global-ems/SubNavigation';
import { HeroSection } from '@/components/global-ems/HeroSection';
import { ManufacturingSection } from '@/components/global-ems/ManufacturingSection';
import { TradingSection } from '@/components/global-ems/TradingSection';
import { OtherServicesSection } from '@/components/global-ems/OtherServicesSection';
import AnalysisOfReq from '@/components/global-ems/AnalysisOfReq';
import EmsServiceIntro from '@/components/global-ems/EmsServiceIntro';
import EmsService from '@/components/global-ems/EmsService';
import EmsProcess from '@/components/global-ems/EmsProcess';
import SupplyChain from '@/components/global-ems/SupplyChain';
import EcotronixKnowHow from '@/components/global-ems/EcotronixKnowHow';
import Production from '@/components/global-ems/Production';
import GreenProcurement from '@/components/global-ems/GreenProcurement';
import GreenProcurementDesign from '@/components/global-ems/GreenProcurementDesign';

export default function GlobalEMSPage() {
    return (
        <div className="w-full flex flex-col bg-white">
            <SubNavigation />
            <div className="h-11" />
            <HeroSection />
            <ManufacturingSection />
            <TradingSection />
            <AnalysisOfReq />
            <EmsServiceIntro />
            <EmsService />
            <EmsProcess />
            <SupplyChain />
            <EcotronixKnowHow />
            <Production />
            <GreenProcurement />
            <GreenProcurementDesign />
            <OtherServicesSection />
        </div>
    );
}
