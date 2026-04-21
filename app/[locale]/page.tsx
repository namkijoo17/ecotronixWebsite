import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { IntroToBusinessSection } from "@/components/sections/IntroToBusinessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ResearchAndDevSection } from "@/components/sections/ResearchAndDevSection";
import { CustomerSupportSection } from "@/components/sections/CustomerSupportSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col w-full overflow-hidden">
      <HeroSection />
      <IntroToBusinessSection />
      <ServicesSection />
      <ResearchAndDevSection />
      <CustomerSupportSection />
      <ScrollToTop />
    </div>
  );
}
