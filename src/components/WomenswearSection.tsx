import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Link } from "react-router-dom";
import womensBespokeImage from "@/assets/womens-bespoke.jpg";

export const WomenswearSection = () => {
  return (
    <section className="py-16 bg-background parallax-container">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animationType="scale-in">
          <ParallaxImage
            src={womensBespokeImage}
            alt="Bespoke Womenswear"
            className="h-[60vh] rounded-lg"
            parallaxOffset={0.15}
          >
            <div className="bg-black/40" />
            <ScrollAnimationWrapper 
              animationType="slide-left"
              delay={300}
            >
              <div className="absolute top-8 left-8 text-white max-w-md">
                <h2 className="text-3xl font-serif mb-4 tracking-wider">
                  BESPOKE WOMENSWEAR
                </h2>
                <p className="text-lg mb-8 leading-relaxed">
                  Bespoke suits, meticulously crafted for the woman who values both sophistication and individuality.
                </p>
                <Link to="/bespoke">
                  <Button 
                    variant="outline" 
                    className="huntsman-button border-white text-white hover:bg-white hover:text-black"
                  >
                    DISCOVER MORE
                  </Button>
                </Link>
              </div>
            </ScrollAnimationWrapper>
          </ParallaxImage>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};