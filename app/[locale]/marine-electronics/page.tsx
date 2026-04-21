import React from 'react';
import { SubNavigation } from '@/components/marine-electronics/SubNavigation';
import { HeroSection } from '@/components/marine-electronics/HeroSection';
import { GoalSection } from '@/components/marine-electronics/GoalSection';
import { ProductsSection } from '@/components/marine-electronics/ProductsSection';
import { KeyTechnologiesSection } from '@/components/marine-electronics/KeyTechnologiesSection';
import { OtherServicesSection } from '@/components/marine-electronics/OtherServicesSection';

export default function MarineElectronicsPage() {
    return (
        <div className="w-full flex flex-col bg-transparent">
            <SubNavigation />
            <div className="h-16" />
            <HeroSection />
            <GoalSection />
            <ProductsSection />
            <KeyTechnologiesSection />
            <OtherServicesSection />
        </div>
    );
}
