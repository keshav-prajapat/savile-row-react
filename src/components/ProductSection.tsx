import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxImage } from "@/components/ParallaxImage";
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
    <section className="py-16 bg-background parallax-container">
      <div className="container mx-auto px-4">
        {/* Suiting Hero */}
        <ScrollAnimationWrapper animationType="scale-in">
          <div className="mb-16">
            <ParallaxImage
              src={collectionShowcase}
              alt="Suiting Collection"
              className="h-[70vh] rounded-lg"
              parallaxOffset={0.2}
            >
              <div className="bg-black/30" />
              <ScrollAnimationWrapper 
                animationType="slide-left"
                delay={300}
              >
                <div className="absolute bottom-12 left-12 text-white max-w-md">
                  <h2 className="text-4xl font-serif mb-6">SUITING</h2>
                  <p className="text-lg mb-8 leading-relaxed">
                    Cut in the Huntsman House silhouette, our ready-to-wear suits are designed for the discerning gentleman who values both time and tradition.
                  </p>
                  <Link to="/collections/suits">
                    <Button 
                      variant="outline" 
                      className="huntsman-button border-white text-white hover:bg-white hover:text-black"
                    >
                      SHOP NOW
                    </Button>
                  </Link>
                </div>
              </ScrollAnimationWrapper>
            </ParallaxImage>
          </div>
        </ScrollAnimationWrapper>

        {/* Product Categories Grid */}
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 150}
              >
                <Link to={product.link} className="block">
                  <div className="group cursor-pointer hover-parallax">
                    <ParallaxImage
                      src={product.image}
                      alt={product.title}
                      className="aspect-[4/5] rounded-lg"
                      parallaxOffset={0.03 + index * 0.01}
                    >
                      <div className="bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-serif mb-4">{product.title}</h3>
                        <Button 
                          variant="ghost" 
                          className="huntsman-button border-white text-white hover:bg-white hover:text-black p-0 px-6"
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </ParallaxImage>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};