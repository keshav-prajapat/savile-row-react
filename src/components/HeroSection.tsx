import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import originalHero from "@/assets/original-hero.jpg";

export const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img 
          src={originalHero}
          alt="Autumn-Winter 2025 Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wider mb-8">
          AUTUMN-WINTER 2025 COLLECTION
        </h1>
        <Button 
          variant="outline" 
          className="huntsman-button border-white text-white hover:bg-white hover:text-black"
        >
          SHOP THE COLLECTION
        </Button>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white">
        <button 
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          className="flex items-center space-x-2 hover:text-primary transition-colors"
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
            {isVideoPlaying ? (
              <div className="w-2 h-2 bg-white"></div>
            ) : (
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
            )}
          </div>
        </button>
        <div className="w-4 h-4 border border-white/50 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 border border-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};