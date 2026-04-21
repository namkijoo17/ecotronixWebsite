import React from 'react';
import { SubNavigation } from '@/components/ai-business/SubNavigation';
import { HeroSection } from '@/components/ai-business/HeroSection';
import { GoalSection } from '@/components/ai-business/GoalSection';
import { MainProductsSection } from '@/components/ai-business/MainProductsSection';
import { CoreTechnologiesSection } from '@/components/ai-business/CoreTechnologiesSection';
import { OtherServicesSection } from '@/components/ai-business/OtherServicesSection';

export default function AIBusinessPage() {
    return (
        <div className="w-full flex flex-col bg-transparent">
            <SubNavigation />
            <div className="h-16" />
            <HeroSection />
            <GoalSection />
            <MainProductsSection />
            <CoreTechnologiesSection />
            <OtherServicesSection />
        </div>
    );
}
