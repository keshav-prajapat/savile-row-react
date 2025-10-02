import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroLuxury from "@/assets/hero-luxury.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroLuxury}
          alt="Autumn-Winter 2025 Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest mb-8">
          AUTUMN-WINTER 2025 COLLECTION
        </h1>
        <Link to="/collections/autumn-winter-2025">
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg tracking-wider"
          >
            SHOP NOW
          </Button>
        </Link>
      </div>
    </section>
  );
};