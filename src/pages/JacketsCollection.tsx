import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import jacketsHero from "@/assets/jackets-collection-hero.jpg";
import blazerNavy from "@/assets/blazer-navy.jpg";
import blazerTweed from "@/assets/blazer-tweed.jpg";
import blazerCamel from "@/assets/blazer-camel.jpg";
import sportsJacketGrey from "@/assets/sports-jacket-grey.jpg";
import sportsJacketCharcoal from "@/assets/sports-jacket-charcoal.jpg";
import sportsJacketOlive from "@/assets/sports-jacket-olive.jpg";
import dinnerJacketBlack from "@/assets/dinner-jacket-black.jpg";
import dinnerJacketVelvet from "@/assets/dinner-jacket-velvet.jpg";

const JacketsCollection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      name: "Navy Blazer",
      price: "£2,450",
      category: "blazers",
      image: blazerNavy,
    },
    {
      name: "Tweed Blazer",
      price: "£2,650",
      category: "blazers",
      image: blazerTweed,
    },
    {
      name: "Camel Blazer",
      price: "£2,550",
      category: "blazers",
      image: blazerCamel,
    },
    {
      name: "Grey Sports Jacket",
      price: "£1,950",
      category: "sports",
      image: sportsJacketGrey,
    },
    {
      name: "Charcoal Sports Jacket",
      price: "£2,050",
      category: "sports",
      image: sportsJacketCharcoal,
    },
    {
      name: "Olive Sports Jacket",
      price: "£2,150",
      category: "sports",
      image: sportsJacketOlive,
    },
    {
      name: "Black Dinner Jacket",
      price: "£3,250",
      category: "dinner",
      image: dinnerJacketBlack,
    },
    {
      name: "Velvet Dinner Jacket",
      price: "£3,450",
      category: "dinner",
      image: dinnerJacketVelvet,
    },
  ];

  const filters = [
    { label: "All Jackets", value: "all" },
    { label: "Blazers", value: "blazers" },
    { label: "Sports Jackets", value: "sports" },
    { label: "Dinner Jackets", value: "dinner" },
  ];

  const filteredProducts = selectedFilter === "all" 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={jacketsHero}
            alt="Jackets Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-serif mb-4">Jackets Collection</h1>
              <p className="text-xl">Refined tailoring for every occasion</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.value)}
                className="min-w-[140px]"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <h3 className="font-serif text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 p-12 text-center">
            <h2 className="text-3xl font-serif mb-4">Bespoke Jackets</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For a truly unique jacket tailored to your exact specifications, explore our bespoke service. 
              Each piece is crafted by our master tailors on Savile Row.
            </p>
            <Button size="lg">Book Consultation</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JacketsCollection;
