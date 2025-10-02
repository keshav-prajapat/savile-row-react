import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxImage } from "@/components/ParallaxImage";
import awHero from "@/assets/aw-hero.jpg";
import awOvercoat from "@/assets/aw-overcoat.jpg";
import awSweater from "@/assets/aw-sweater.jpg";
import overcoat from "@/assets/overcoat.jpg";
import raincoat from "@/assets/raincoat.jpg";
import fieldJacket from "@/assets/field-jacket.jpg";
import cashmere from "@/assets/cashmere-sweater.jpg";
import woolCardigan from "@/assets/wool-cardigan.jpg";
import sportsJacket from "@/assets/sports-jacket.jpg";

const AutumnWinter = () => {
  const collections = [
    {
      title: "Outerwear",
      items: [
        {
          id: 1,
          name: "Camel Wool Overcoat",
          price: "£3,200",
          image: awOvercoat
        },
        {
          id: 2,
          name: "Classic Overcoat",
          price: "£2,950",
          image: overcoat
        },
        {
          id: 3,
          name: "Weather Resistant Raincoat",
          price: "£2,400",
          image: raincoat
        },
        {
          id: 4,
          name: "Field Jacket",
          price: "£1,850",
          image: fieldJacket
        }
      ]
    },
    {
      title: "Knitwear",
      items: [
        {
          id: 5,
          name: "Navy Cashmere Sweater",
          price: "£850",
          image: awSweater
        },
        {
          id: 6,
          name: "Cashmere V-Neck",
          price: "£795",
          image: cashmere
        },
        {
          id: 7,
          name: "Wool Cardigan",
          price: "£650",
          image: woolCardigan
        }
      ]
    },
    {
      title: "Tailoring",
      items: [
        {
          id: 8,
          name: "Sports Jacket",
          price: "£2,200",
          image: sportsJacket
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <ScrollAnimationWrapper animationType="fade-in">
          <ParallaxImage
            src={awHero}
            alt="Autumn Winter 2025 Collection"
            className="h-[70vh]"
            parallaxOffset={0.15}
          >
            <div className="bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">Autumn Winter 2025</h1>
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  Discover our latest collection combining traditional craftsmanship 
                  with contemporary design
                </p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Explore the Collection
                </Button>
              </div>
            </div>
          </ParallaxImage>
        </ScrollAnimationWrapper>

        {/* Collections */}
        <div className="container mx-auto px-4 py-20">
          {collections.map((collection, collectionIndex) => (
            <div key={collection.title} className="mb-20">
              <ScrollAnimationWrapper animationType="slide-left">
                <h2 className="text-4xl font-serif mb-12 text-center">{collection.title}</h2>
              </ScrollAnimationWrapper>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {collection.items.map((item, itemIndex) => (
                  <ScrollAnimationWrapper
                    key={item.id}
                    animationType="scale-in"
                    delay={itemIndex * 100}
                  >
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                      <h3 className="font-serif text-lg mb-2">{item.name}</h3>
                      <p className="text-muted-foreground mb-4">{item.price}</p>
                      <Button 
                        variant="outline" 
                        className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Details
                      </Button>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          ))}

          {/* Seasonal Message */}
          <ScrollAnimationWrapper animationType="fade-up">
            <div className="mt-20 text-center max-w-3xl mx-auto bg-muted/30 rounded-lg p-12">
              <h2 className="text-3xl font-serif mb-6">Crafted for the Season</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our Autumn Winter collection features premium fabrics selected for warmth and comfort, 
                without compromising on style. Each piece is designed to transition seamlessly from 
                city to countryside, embodying timeless British elegance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">Book Appointment</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutumnWinter;
