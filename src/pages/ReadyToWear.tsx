import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import suitingImage from "@/assets/suiting.jpg";
import jacketsImage from "@/assets/jackets.jpg";
import outerwearImage from "@/assets/outerwear.jpg";
import knitwearImage from "@/assets/knitwear.jpg";
import trunkShowImage from "@/assets/trunk-show.jpg";
import womensImage from "@/assets/womens-bespoke.jpg";

const ReadyToWear = () => {
  const collections = [
    {
      title: "Autumn/Winter 2024",
      subtitle: "Heritage Redefined",
      image: suitingImage,
      description: "Classic cuts meet contemporary sophistication in our latest ready-to-wear collection.",
      pieces: 24,
      featured: true
    },
    {
      title: "Spring/Summer 2024",
      subtitle: "Modern Gentleman",
      image: trunkShowImage,
      description: "Lightweight fabrics and relaxed tailoring for the warmer months.",
      pieces: 18,
      featured: false
    },
    {
      title: "Core Collection",
      subtitle: "Timeless Essentials",
      image: womensImage,
      description: "Our signature pieces that form the foundation of every gentleman's wardrobe.",
      pieces: 32,
      featured: false
    }
  ];

  const categories = [
    {
      name: "Suiting",
      description: "Impeccably tailored suits for every occasion",
      image: suitingImage,
      priceRange: "$2,500 - $4,200",
      items: 12
    },
    {
      name: "Jackets & Blazers", 
      description: "Versatile separates for modern living",
      image: jacketsImage,
      priceRange: "$1,800 - $3,200",
      items: 8
    },
    {
      name: "Outerwear",
      description: "Sophisticated protection from the elements",
      image: outerwearImage,
      priceRange: "$2,200 - $5,800",
      items: 6
    },
    {
      name: "Knitwear",
      description: "Luxurious cashmere and wool essentials",
      image: knitwearImage,
      priceRange: "$450 - $1,200",
      items: 15
    },
    {
      name: "Accessories",
      description: "The finishing touches that define style",
      image: trunkShowImage,
      priceRange: "$150 - $850",
      items: 22
    },
    {
      name: "Shirting",
      description: "Crisp cottons and refined linens",
      image: womensImage,
      priceRange: "$250 - $450", 
      items: 18
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-muted/30">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
          <img 
            src={heroImage}
            alt="Ready-to-Wear Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <Badge className="mb-4">New Collection</Badge>
                <h1 className="text-5xl font-serif mb-6">Ready-to-Wear</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Experience the artistry of Huntsman in our ready-to-wear collection. 
                  Each piece embodies our 175-year heritage of exceptional craftsmanship 
                  and attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Shop Collection
                  </Button>
                  <Button size="lg" variant="outline">
                    Book Styling Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Current Collections</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our carefully curated seasonal collections and timeless essentials
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <div key={index} className={`group cursor-pointer ${collection.featured ? 'lg:col-span-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    {collection.featured && (
                      <Badge className="absolute top-4 left-4 z-10">Featured</Badge>
                    )}
                    <img 
                      src={collection.image}
                      alt={collection.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        collection.featured ? 'aspect-[3/2]' : 'aspect-[4/5]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{collection.pieces} pieces</span>
                      <Badge variant="outline">{collection.subtitle}</Badge>
                    </div>
                    <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                      Explore Collection →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Shop by Category</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From boardroom to weekend, find the perfect pieces for every aspect of your lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="group cursor-pointer bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{category.items} items</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">{category.priceRange}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto font-medium group-hover:text-primary">
                      Shop {category.name} →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4">Craftsmanship</Badge>
                <h2 className="text-3xl font-serif mb-6">Ready-to-Wear Excellence</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our ready-to-wear collection maintains the same meticulous attention to detail 
                    that has made Huntsman legendary on Savile Row. Each garment is constructed 
                    using traditional techniques refined over generations.
                  </p>
                  <p>
                    From the initial pattern cutting to the final pressing, every step is overseen 
                    by our master tailors to ensure that each piece meets our exacting standards 
                    of quality and fit.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="font-semibold mb-2">Premium Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Sourced from the world's finest mills
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Construction</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional techniques meet modern precision
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Perfect Fit</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized patterns for exceptional comfort
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lifetime Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Built to last with comprehensive aftercare
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={suitingImage}
                  alt="Craftsman at work"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-2xl font-serif">175+</p>
                      <p className="text-sm text-muted-foreground">Years of Heritage</p>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <p className="text-2xl font-serif">50+</p>
                      <p className="text-sm text-muted-foreground">Master Tailors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">Experience Huntsman</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Visit our flagship stores in London and New York, or schedule a private appointment 
              to explore our complete ready-to-wear collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline">
                Visit Our Stores
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReadyToWear;