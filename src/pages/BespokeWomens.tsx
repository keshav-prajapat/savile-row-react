import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import womensTailoringHero from "@/assets/womens-tailoring-hero.jpg";
import womensFitting from "@/assets/womens-fitting.jpg";
import womensBespoke from "@/assets/womens-bespoke.jpg";

const BespokeWomens = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={womensTailoringHero}
          alt="Bespoke Women's Tailoring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-wider">
              BESPOKE WOMEN'S TAILORING
            </h1>
            <p className="text-xl md:text-2xl mb-8 tracking-wide">
              Impeccable craftsmanship meets feminine elegance
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif mb-6 tracking-wider">
            THE ART OF WOMEN'S BESPOKE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our bespoke women's tailoring service offers the same meticulous attention to detail 
            and craftsmanship that has defined our menswear for generations. Each garment is 
            created specifically for you, reflecting your personal style and ensuring a perfect fit.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 tracking-wider">
            THE BESPOKE PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-serif mb-4 text-primary">01</div>
              <h3 className="text-xl font-serif mb-3 tracking-wide">Consultation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discuss your vision, select fabrics, and explore design options with our expert tailors.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif mb-4 text-primary">02</div>
              <h3 className="text-xl font-serif mb-3 tracking-wide">Pattern & Fitting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your unique pattern is created and refined through multiple fittings for perfection.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif mb-4 text-primary">03</div>
              <h3 className="text-xl font-serif mb-3 tracking-wide">Completion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive your finished garment, crafted to your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src={womensFitting}
                alt="Women's Fitting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src={womensBespoke}
                alt="Women's Bespoke Suit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif text-center mb-12 tracking-wider">
            BESPOKE SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border p-6">
              <h3 className="text-xl font-serif mb-3 tracking-wide">Suits & Jackets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailored blazers, business suits, and formal jackets crafted to your measurements.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="text-xl font-serif mb-3 tracking-wide">Coats & Outerwear</h3>
              <p className="text-muted-foreground leading-relaxed">
                Elegant overcoats and sophisticated outerwear designed for every occasion.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="text-xl font-serif mb-3 tracking-wide">Shirts & Blouses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfectly fitted shirts and blouses in premium fabrics and finishes.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="text-xl font-serif mb-3 tracking-wide">Trousers & Skirts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bespoke trousers and skirts tailored to complement your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-6 tracking-wider">
            BEGIN YOUR BESPOKE JOURNEY
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a consultation with our tailors to discuss your vision and begin creating 
            a garment that is uniquely yours.
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

export default BespokeWomens;
