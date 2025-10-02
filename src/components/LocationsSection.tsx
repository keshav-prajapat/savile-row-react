import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storefrontLondon from "@/assets/storefront-london.jpg";
import storefrontNewYork from "@/assets/storefront-newyork.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

export const LocationsSection = () => {
  const locations = [
    {
      title: "LONDON",
      subtitle: "11 Savile Row",
      description: "Bespoke Tailoring",
      image: storefrontLondon,
      link: "/locations"
    },
    {
      title: "NEW YORK",
      subtitle: "W.57th St",
      description: "Bespoke Tailoring", 
      image: storefrontNewYork,
      link: "/locations"
    },
    {
      title: "CRAFTSMANSHIP",
      subtitle: "Traditional Methods",
      description: "Heritage & Excellence",
      image: craftsmanship,
      link: "/company"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Link key={index} to={location.link} className="block group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={location.image}
                  alt={`${location.title} Location`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-6 left-6 text-white">
                  <p className="text-sm font-light tracking-wider">OUR LOCATIONS</p>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif mb-1">{location.title}</h3>
                  <p className="text-lg font-light mb-2">{location.subtitle}</p>
                  <p className="text-sm italic mb-4">{location.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    DISCOVER NOW
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};