import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { useParallax } from "@/hooks/useParallax";
import { Link } from "react-router-dom";
import originalLondon from "@/assets/original-london.jpg";
import originalNewYork from "@/assets/original-newyork.jpg";
import originalTrunk from "@/assets/original-trunk.jpg";

export const LocationsSection = () => {
  const scrollY = useParallax();
  const locations = [
    {
      title: "LONDON",
      subtitle: "11 Savile Row",
      description: "Bespoke Tailoring",
      image: originalLondon,
      link: "/locations"
    },
    {
      title: "NEW YORK",
      subtitle: "W.57th St",
      description: "Bespoke Tailoring", 
      image: originalNewYork,
      link: "/locations"
    },
    {
      title: "USA",
      subtitle: "Trunk Shows",
      description: "Dates & Locations",
      image: originalTrunk,
      link: "/locations"
    }
  ];

  return (
    <section className="py-16 bg-background parallax-container">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 200}
              >
                <Link to={location.link} className="block">
                  <div className="group cursor-pointer hover-parallax">
                    <div 
                      className="relative overflow-hidden mb-4"
                      style={{
                        transform: `translateY(${scrollY * (0.05 + index * 0.02)}px)`,
                      }}
                    >
                      <img 
                        src={location.image}
                        alt={`${location.title} Location`}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute top-6 left-6 text-white">
                        <p className="text-sm font-light tracking-wider">OUR LOCATIONS</p>
                      </div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-serif mb-1">{location.title}</h3>
                        <p className="text-lg font-light mb-2">{location.subtitle}</p>
                        <p className="text-sm italic mb-4">{location.description}</p>
                        <Button 
                          variant="ghost" 
                          className="huntsman-button border-white text-white hover:bg-white hover:text-black p-0 px-6"
                        >
                          DISCOVER NOW
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};