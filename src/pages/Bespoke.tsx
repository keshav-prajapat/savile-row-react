import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bespokeHero from "@/assets/bespoke-hero.jpg";

const Bespoke = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Bespoke Tailoring</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src={bespokeHero} 
                  alt="Bespoke Tailoring Process"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">The Art of Bespoke</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bespoke tailoring at Huntsman represents the pinnacle of sartorial craftsmanship. 
                  Each garment is individually created from scratch, with every detail considered 
                  and crafted to your exact specifications and measurements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our master tailors combine centuries-old techniques with modern precision to create 
                  garments that fit perfectly and reflect your personal style. The bespoke process 
                  typically takes 12-16 weeks and includes multiple fittings.
                </p>
                <Link to="/book-appointment">
                  <Button className="w-full md:w-auto">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-serif mb-8 text-center">The Bespoke Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-serif">1</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Consultation</h3>
                  <p className="text-muted-foreground text-sm">Discuss your requirements and style preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-serif">2</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Measurement</h3>
                  <p className="text-muted-foreground text-sm">Precise measurements taken by our experts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-serif">3</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Fittings</h3>
                  <p className="text-muted-foreground text-sm">Multiple fittings to ensure perfect fit</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-serif">4</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2">Delivery</h3>
                  <p className="text-muted-foreground text-sm">Your finished garment, crafted to perfection</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-center">Why Choose Bespoke?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Perfect fit tailored to your unique measurements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Choice of premium fabrics from renowned mills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Completely customizable style and details</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Handmade construction by master craftsmen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Lifetime alterations and aftercare service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Investment piece that lasts for decades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bespoke;