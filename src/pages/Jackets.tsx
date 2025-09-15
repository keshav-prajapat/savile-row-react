import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Jackets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center">Jackets</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Huntsman Jacket"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Exquisite Craftsmanship</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our collection of jackets represents the pinnacle of British tailoring. From classic 
                  blazers to contemporary designs, each jacket is meticulously crafted to deliver 
                  both comfort and style.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a smart casual jacket for weekend occasions or a formal blazer 
                  for business meetings, our range offers versatile options for every gentleman's wardrobe.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Collection Highlights:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Single and double-breasted blazers</li>
                    <li>• Sports jackets in premium tweeds</li>
                    <li>• Dinner jackets for formal occasions</li>
                    <li>• Casual jackets for relaxed elegance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Blazer"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Classic Blazers</h3>
                <p className="text-muted-foreground text-sm">Timeless designs for every occasion</p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Sports Jacket"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Sports Jackets</h3>
                <p className="text-muted-foreground text-sm">Refined casual wear in premium fabrics</p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Dinner Jacket"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif text-lg mb-2">Dinner Jackets</h3>
                <p className="text-muted-foreground text-sm">Elegant formal wear for evening events</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jackets;