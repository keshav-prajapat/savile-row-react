import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import tiesHero from "@/assets/ties-hero.jpg";
import tieNavyPaisley from "@/assets/tie-navy-paisley.jpg";
import tieBurgundyHerringbone from "@/assets/tie-burgundy-herringbone.jpg";
import tieGreyStripe from "@/assets/tie-grey-stripe.jpg";
import bowtieBlack from "@/assets/bowtie-black.jpg";
import tieGreenDot from "@/assets/tie-green-dot.jpg";
import tieCharcoalWool from "@/assets/tie-charcoal-wool.jpg";

const products = [
  { name: "Navy Paisley Silk Tie", price: "£145", category: "silk", image: tieNavyPaisley },
  { name: "Burgundy Herringbone Tie", price: "£145", category: "silk", image: tieBurgundyHerringbone },
  { name: "Grey Regimental Stripe", price: "£145", category: "silk", image: tieGreyStripe },
  { name: "Classic Black Bow Tie", price: "£165", category: "bowtie", image: bowtieBlack },
  { name: "Green Dot Silk Tie", price: "£145", category: "silk", image: tieGreenDot },
  { name: "Charcoal Wool Tie", price: "£165", category: "wool", image: tieCharcoalWool },
];

const filters = [
  { id: "all", label: "All Ties" },
  { id: "silk", label: "Silk Ties" },
  { id: "wool", label: "Wool Ties" },
  { id: "bowtie", label: "Bow Ties" },
];

const TiesCollection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProducts = selectedFilter === "all" 
    ? products 
    : products.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={tiesHero}
          alt="Ties Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wider">
            TIES COLLECTION
          </h1>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className="tracking-wider"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif tracking-wide mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.price}</p>
                  <Button 
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-6 tracking-wider">
            BESPOKE TIES
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Create a truly unique tie tailored to your exact specifications. 
            Choose from our extensive fabric library and work with our expert craftsmen.
          </p>
          <Link to="/book-appointment">
            <Button size="lg" className="tracking-wider">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TiesCollection;
