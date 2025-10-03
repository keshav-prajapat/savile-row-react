import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import eveningwearHero from "@/assets/eveningwear-hero.jpg";
import tuxedoBlack from "@/assets/tuxedo-black.jpg";
import velvetDinnerNavy from "@/assets/velvet-dinner-navy.jpg";
import dressShirtWhite from "@/assets/dress-shirt-white.jpg";
import waistcoatBlack from "@/assets/waistcoat-black.jpg";
import smokingJacketBurgundy from "@/assets/smoking-jacket-burgundy.jpg";
import tailcoatMidnight from "@/assets/tailcoat-midnight.jpg";

const EveningwearCollection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      name: "Classic Black Tuxedo",
      price: "£4,250",
      category: "tuxedos",
      image: tuxedoBlack,
    },
    {
      name: "Navy Velvet Dinner Jacket",
      price: "£3,650",
      category: "jackets",
      image: velvetDinnerNavy,
    },
    {
      name: "White Dress Shirt",
      price: "£425",
      category: "shirts",
      image: dressShirtWhite,
    },
    {
      name: "Black Formal Waistcoat",
      price: "£895",
      category: "waistcoats",
      image: waistcoatBlack,
    },
    {
      name: "Burgundy Smoking Jacket",
      price: "£3,250",
      category: "jackets",
      image: smokingJacketBurgundy,
    },
    {
      name: "Midnight Blue Tailcoat",
      price: "£4,950",
      category: "tuxedos",
      image: tailcoatMidnight,
    },
  ];

  const filters = [
    { label: "All Evening Wear", value: "all" },
    { label: "Tuxedos", value: "tuxedos" },
    { label: "Dinner Jackets", value: "jackets" },
    { label: "Waistcoats", value: "waistcoats" },
    { label: "Dress Shirts", value: "shirts" },
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
            src={eveningwearHero}
            alt="Evening Wear Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-serif mb-4">Evening Wear</h1>
              <p className="text-xl">Impeccable formal attire for distinguished occasions</p>
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
            <h2 className="text-3xl font-serif mb-4">Bespoke Evening Wear</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Create the perfect evening ensemble tailored exclusively for you. Our master tailors 
              specialize in crafting exceptional formal wear for life's most important occasions.
            </p>
            <Button size="lg">Schedule Consultation</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EveningwearCollection;
