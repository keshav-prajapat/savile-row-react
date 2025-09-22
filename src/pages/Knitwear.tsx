import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import knitwearHero from "@/assets/knitwear.jpg";
import cashmereSweater from "@/assets/cashmere-sweater.jpg";
import woolCardigan from "@/assets/wool-cardigan.jpg";
import cottonPolo from "@/assets/cotton-polo.jpg";

const Knitwear = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Knitwear</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src={knitwearHero} 
                  alt="Huntsman Knitwear"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Luxury Comfort</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our knitwear collection represents the perfect marriage of comfort and sophistication. 
                  Using only the finest yarns and traditional knitting techniques, we create pieces that 
                  are both luxurious and practical.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From lightweight summer sweaters to cozy winter jumpers, our knitwear range offers 
                  versatile options that complement both casual and formal attire with equal elegance.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Premium Materials:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Scottish cashmere</li>
                    <li>• Merino wool from New Zealand</li>
                    <li>• Italian cotton blends</li>
                    <li>• British lamb's wool</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src={cashmereSweater} 
                  alt="Cashmere Sweater"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Cashmere Sweaters</h3>
                <p className="text-muted-foreground text-sm">Unparalleled softness and warmth</p>
              </div>
              <div className="text-center">
                <img 
                  src={woolCardigan} 
                  alt="Wool Cardigan"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Wool Cardigans</h3>
                <p className="text-muted-foreground text-sm">Versatile layering pieces</p>
              </div>
              <div className="text-center">
                <img 
                  src={cottonPolo} 
                  alt="Cotton Polo"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Cotton Polos</h3>
                <p className="text-muted-foreground text-sm">Refined casual elegance</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Knitwear;