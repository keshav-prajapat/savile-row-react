import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Suiting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Suiting</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Huntsman Suit"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Bespoke Tailoring Excellence</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Since 1849, Huntsman has been creating the world's finest bespoke suits. Each garment is 
                  hand-crafted by our skilled tailors on Savile Row, using traditional techniques passed down 
                  through generations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our suits are renowned for their exceptional fit, superior construction, and timeless style. 
                  From business suits to formal evening wear, we create garments that reflect your personal 
                  style and professional requirements.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Features:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Hand-cut and hand-sewn construction</li>
                    <li>• Premium fabrics from renowned mills</li>
                    <li>• Multiple fittings for perfect fit</li>
                    <li>• Lifetime aftercare service</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Business Suit"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Business Suits</h3>
                <p className="text-muted-foreground text-sm">Professional attire for the modern gentleman</p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Evening Wear"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Evening Wear</h3>
                <p className="text-muted-foreground text-sm">Formal attire for special occasions</p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Country Suits"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Country Suits</h3>
                <p className="text-muted-foreground text-sm">Relaxed elegance for countryside pursuits</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Suiting;