import { Button } from "@/components/ui/button";
import londonImage from "@/assets/london-location.jpg";
import newYorkImage from "@/assets/newyork-location.jpg";
import trunkShowImage from "@/assets/trunk-show.jpg";

export const LocationsSection = () => {
  const locations = [
    {
      title: "LONDON",
      subtitle: "11 Savile Row",
      description: "Bespoke Tailoring",
      image: londonImage,
      link: "/bespoke-tailoring"
    },
    {
      title: "NEW YORK",
      subtitle: "W.57th St",
      description: "Bespoke Tailoring", 
      image: newYorkImage,
      link: "/huntsman-on-w57th"
    },
    {
      title: "USA",
      subtitle: "Trunk Shows",
      description: "Dates & Locations",
      image: trunkShowImage,
      link: "/u-s-a-trunk-shows"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
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
          ))}
        </div>
      </div>
    </section>
  );
};