import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import outerwearHero from "@/assets/outerwear-hero.jpg";
import overcoatNavy from "@/assets/overcoat-navy.jpg";
import overcoatCamel from "@/assets/overcoat-camel.jpg";
import coatCharcoal from "@/assets/coat-charcoal.jpg";
import trenchKhaki from "@/assets/trench-khaki.jpg";
import quiltedNavy from "@/assets/quilted-navy.jpg";
import fieldJacketOlive from "@/assets/field-jacket-olive.jpg";

const OuterwearCollection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      name: "Navy Wool Overcoat",
      price: "£2,850",
      category: "overcoats",
      image: overcoatNavy,
    },
    {
      name: "Camel Cashmere Overcoat",
      price: "£3,950",
      category: "overcoats",
      image: overcoatCamel,
    },
    {
      name: "Charcoal Wool Coat",
      price: "£2,650",
      category: "coats",
      image: coatCharcoal,
    },
    {
      name: "Khaki Trench Coat",
      price: "£2,450",
      category: "trench",
      image: trenchKhaki,
    },
    {
      name: "Navy Quilted Jacket",
      price: "£1,250",
      category: "casual",
      image: quiltedNavy,
    },
    {
      name: "Olive Field Jacket",
      price: "£1,650",
      category: "casual",
      image: fieldJacketOlive,
    },
  ];

  const filters = [
    { label: "All Outerwear", value: "all" },
    { label: "Overcoats", value: "overcoats" },
    { label: "Coats", value: "coats" },
    { label: "Trench Coats", value: "trench" },
    { label: "Casual Jackets", value: "casual" },
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
            src={outerwearHero}
            alt="Outerwear Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-serif mb-4">Outerwear</h1>
              <p className="text-xl">Timeless protection with uncompromising style</p>
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
            <h2 className="text-3xl font-serif mb-4">Bespoke Outerwear</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Commission a bespoke coat or jacket crafted to your exact measurements and style preferences. 
              Choose from our finest fabrics and work directly with our master tailors.
            </p>
            <Button size="lg">Book Consultation</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OuterwearCollection;
