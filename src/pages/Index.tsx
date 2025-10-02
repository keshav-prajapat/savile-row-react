import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationsSection } from "@/components/LocationsSection";
import { ProductSection } from "@/components/ProductSection";
import { HeritageSection } from "@/components/HeritageSection";
import { JournalSection } from "@/components/JournalSection";
import { WomenswearSection } from "@/components/WomenswearSection";
import { Footer } from "@/components/Footer";
import { NewsletterModal } from "@/components/NewsletterModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LocationsSection />
        <ProductSection />
        <HeritageSection />
        <JournalSection />
        <WomenswearSection />
      </main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};

export default Index;
