import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationsSection } from "@/components/LocationsSection";
import { ProductSection } from "@/components/ProductSection";
import { HeritageSection } from "@/components/HeritageSection";
import { JournalSection } from "@/components/JournalSection";
import { WomenswearSection } from "@/components/WomenswearSection";
import { MobileSlider } from "@/components/MobileSlider";
import { Footer } from "@/components/Footer";
import { NewsletterModal } from "@/components/NewsletterModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background parallax-container">
      <Header />
      <main>
        <HeroSection />
        <LocationsSection />
        <ProductSection />
        
        {/* Last three sections with mobile slider */}
        <MobileSlider className="space-y-0">
          <HeritageSection />
          <JournalSection />
          <WomenswearSection />
        </MobileSlider>
      </main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};

export default Index;
