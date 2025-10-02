import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxImage } from "@/components/ParallaxImage";
import { useState } from "react";
import suitsHero from "@/assets/suits-hero.jpg";
import suitNavy from "@/assets/suit-navy.jpg";
import suitCharcoal from "@/assets/suit-charcoal.jpg";
import suitTweed from "@/assets/suit-tweed.jpg";
import suitBlack from "@/assets/suit-black.jpg";
import businessSuit from "@/assets/business-suit.jpg";
import countrySuit from "@/assets/country-suit.jpg";
import dinnerJacket from "@/assets/dinner-jacket.jpg";
import eveningWear from "@/assets/evening-wear.jpg";

const SuitsCollection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Navy Business Suit",
      price: "£2,850",
      category: "business",
      image: suitNavy
    },
    {
      id: 2,
      name: "Charcoal Flannel Suit",
      price: "£2,950",
      category: "business",
      image: suitCharcoal
    },
    {
      id: 3,
      name: "Brown Tweed Country Suit",
      price: "£3,200",
      category: "country",
      image: suitTweed
    },
    {
      id: 4,
      name: "Black Dinner Suit",
      price: "£3,500",
      category: "evening",
      image: suitBlack
    },
    {
      id: 5,
      name: "Classic Business Suit",
      price: "£2,750",
      category: "business",
      image: businessSuit
    },
    {
      id: 6,
      name: "Country Tweed Suit",
      price: "£3,100",
      category: "country",
      image: countrySuit
    },
    {
      id: 7,
      name: "Dinner Jacket",
      price: "£3,400",
      category: "evening",
      image: dinnerJacket
    },
    {
      id: 8,
      name: "Evening Formal Suit",
      price: "£3,600",
      category: "evening",
      image: eveningWear
    }
  ];

  const filters = [
    { id: "all", label: "All Suits" },
    { id: "business", label: "Business" },
    { id: "country", label: "Country" },
    { id: "evening", label: "Evening Wear" }
  ];

  const filteredProducts = selectedFilter === "all" 
    ? products 
    : products.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <ScrollAnimationWrapper animationType="fade-in">
          <ParallaxImage
            src={suitsHero}
            alt="Suits Collection"
            className="h-[60vh]"
            parallaxOffset={0.15}
          >
            <div className="bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">Suits Collection</h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  Bespoke tailoring crafted with precision and timeless elegance
                </p>
              </div>
            </div>
          </ParallaxImage>
        </ScrollAnimationWrapper>

        {/* Filters */}
        <div className="container mx-auto px-4 py-12">
          <ScrollAnimationWrapper animationType="fade-up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter.id)}
                  className="min-w-[120px]"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </ScrollAnimationWrapper>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ScrollAnimationWrapper
                key={product.id}
                animationType="scale-in"
                delay={index * 100}
              >
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-serif text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollAnimationWrapper animationType="fade-up">
            <div className="mt-20 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif mb-6">Bespoke Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For a truly unique experience, our master tailors can create a completely 
                bespoke suit tailored to your exact measurements and preferences.
              </p>
              <Button size="lg">Book a Consultation</Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuitsCollection;
