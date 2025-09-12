import { Button } from "@/components/ui/button";
import suitingImage from "@/assets/suiting.jpg";
import jacketsImage from "@/assets/jackets.jpg";
import outerwearImage from "@/assets/outerwear.jpg";
import knitwearImage from "@/assets/knitwear.jpg";

export const ProductSection = () => {
  const products = [
    {
      title: "JACKETS",
      image: jacketsImage,
      link: "/collections/jackets"
    },
    {
      title: "OUTERWEAR", 
      image: outerwearImage,
      link: "/collections/outerwear"
    },
    {
      title: "KNITWEAR",
      image: knitwearImage,
      link: "/collections/knitwear"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Suiting Hero */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src={suitingImage}
              alt="Suiting Collection"
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-12 left-12 text-white max-w-md">
              <h2 className="text-4xl font-serif mb-6">SUITING</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Cut in the Huntsman House silhouette, our ready-to-wear suits are designed for the discerning gentleman who values both time and tradition.
              </p>
              <Button 
                variant="outline" 
                className="huntsman-button border-white text-white hover:bg-white hover:text-black"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif mb-4">{product.title}</h3>
                  <Button 
                    variant="ghost" 
                    className="huntsman-button border-white text-white hover:bg-white hover:text-black p-0 px-6"
                  >
                    SHOP NOW
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