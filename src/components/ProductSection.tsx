import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import collectionShowcase from "@/assets/collection-showcase.jpg";
import jacketsImage from "@/assets/jackets.jpg";
import outerwearImage from "@/assets/outerwear.jpg";
import knitwearImage from "@/assets/knitwear.jpg";

export const ProductSection = () => {
  const products = [
    {
      title: "JACKETS",
      image: jacketsImage,
      link: "/jackets"
    },
    {
      title: "OUTERWEAR", 
      image: outerwearImage,
      link: "/outerwear"
    },
    {
      title: "KNITWEAR",
      image: knitwearImage,
      link: "/knitwear"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Suiting Hero */}
        <div className="mb-8">
          <div className="relative h-[60vh] rounded-lg overflow-hidden">
            <img 
              src={collectionShowcase}
              alt="Suiting Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-12 left-12 text-white max-w-md">
              <h2 className="text-4xl font-serif mb-6">SUITING</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Cut in the Huntsman House silhouette, our ready-to-wear suits are designed for the discerning gentleman who values both time and tradition.
              </p>
              <Link to="/collections/suits">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  SHOP NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link key={index} to={product.link} className="block group">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif mb-4">{product.title}</h3>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    SHOP NOW
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