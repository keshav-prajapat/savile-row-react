import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useParallax } from '@/hooks/useParallax';
import { Link } from "react-router-dom";
import heroLuxury from "@/assets/hero-luxury.jpg";

export const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const scrollY = useParallax();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img 
          src={heroLuxury}
          alt="Autumn-Winter 2025 Collection"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 800)
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest mb-8 animate-fade-in">
          AUTUMN-WINTER 2025 COLLECTION
        </h1>
        <Link to="/ready-to-wear">
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg tracking-wider animate-fade-in animation-delay-300"
          >
            SHOP THE COLLECTION
          </Button>
        </Link>
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