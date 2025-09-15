import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Outerwear = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Outerwear</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Huntsman Outerwear"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Protection Meets Elegance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our outerwear collection combines functionality with the refined aesthetic that Huntsman 
                  is known for. Each piece is designed to protect you from the elements while maintaining 
                  the sophisticated style expected of a Savile Row tailor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From traditional British overcoats to modern weather-resistant jackets, our outerwear 
                  is crafted using the finest materials and time-tested construction techniques.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Key Features:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Weather-resistant fabrics</li>
                    <li>• Insulated linings for warmth</li>
                    <li>• Tailored fit that layers perfectly</li>
                    <li>• Classic and contemporary styles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Overcoat"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Overcoats</h3>
                <p className="text-muted-foreground text-sm">Classic protection with timeless style</p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Raincoat"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Raincoats</h3>
                <p className="text-muted-foreground text-sm">Sophisticated weather protection</p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Field Jacket"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Field Jackets</h3>
                <p className="text-muted-foreground text-sm">Rugged elegance for outdoor pursuits</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Outerwear;