import Header from "@/components/Header";
import HeroSection from "./sections/HeroSection";
import PlatformRow from "./sections/PlatformRow";
import HowItWorks from "./sections/HowItWorks";
import FeatureGrid from "./sections/FeatureGrid";
import ProductMock from "./sections/ProductMock";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import FinalCTA from "./sections/FinalCTA";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PlatformRow />
        <HowItWorks />
        <FeatureGrid />
        <ProductMock />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  );
}
