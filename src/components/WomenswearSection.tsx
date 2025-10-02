import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import womensBespokeImage from "@/assets/womens-bespoke.jpg";

export const WomenswearSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative h-[50vh] rounded-lg overflow-hidden">
          <img 
            src={womensBespokeImage}
            alt="Bespoke Womenswear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
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
                className="border-white text-white hover:bg-white hover:text-black"
              >
                DISCOVER MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};