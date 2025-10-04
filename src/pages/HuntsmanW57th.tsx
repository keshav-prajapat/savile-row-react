import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storefrontNY from "@/assets/storefront-newyork.jpg";

export default function HuntsmanW57th() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <img 
            src={storefrontNY} 
            alt="Huntsman New York" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-wider">
                HUNTSMAN IN NEW YORK
              </h1>
              <p className="text-xl tracking-wide">130 WEST 57TH STREET</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-8 text-center tracking-wider">
              Bespoke Tailoring In The United States
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
              <p>
                Huntsman on W.57th St provides our U.S clients the full complement of bespoke services, 
                from initial consultation to the final delivery.
              </p>
              
              <p>
                You can choose to have your appointment at our permanent residence in New York, or at 
                one of our trunk show locations.
              </p>
              
              <p>
                You will enjoy the luxury and prestige of an authentically Savile Row made suit, in the 
                convenience of the United States with no need to travel overseas, with a dedicated team 
                at your service.
              </p>
            </div>

            <div className="text-center mb-16">
              <Link to="/book-appointment">
                <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                  BOOK AN APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-serif mb-16 text-center tracking-wider">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl font-serif mb-6 text-muted-foreground">1.</div>
                <p className="text-muted-foreground">
                  Choose whether you would like your appointment in New York or at one of our regular 
                  trunk show locations, and enjoy Huntsman's full itinerary of bespoke services, with 
                  an authentic Savile Row experience, courtesy of our dedicated U.S team.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-serif mb-6 text-muted-foreground">2.</div>
                <p className="text-muted-foreground">
                  Huntsman on W.57th boasts a fully furnished Cutting Theatre with a Savile Row-trained 
                  cutting team. From here they will create your paper pattern, and cut the cloth for 
                  your garment, before sending it to our workshops at 11 Savile Row for construction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-serif mb-6 text-muted-foreground">3.</div>
                <p className="text-muted-foreground">
                  Just as with all Huntsman bespoke, your garment is made in our workshops at 11 Savile 
                  Row, before being returned to the team at W.57th for further fittings, finishing and 
                  adjustments. Clients in America will find it's never been easier or more convenient 
                  to enjoy the prestige and quality of a Savile Row garment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-muted/20 p-12 text-center">
              <h3 className="text-3xl font-serif mb-8 tracking-wider">
                VISIT US IN NEW YORK
              </h3>
              
              <div className="space-y-2 text-muted-foreground mb-8">
                <p className="font-medium">Huntsman Savile Row Ltd</p>
                <p>130 W. 57th Street</p>
                <p>New York, NY 10019</p>
              </div>
              
              <div className="space-y-2 text-muted-foreground mb-8">
                <p className="font-medium">Opening Hours:</p>
                <p>Monday - Friday, 9am - 6pm</p>
                <p>Saturday - Sunday, Closed</p>
              </div>

              <Link to="/book-appointment">
                <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trunk Shows CTA */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif mb-4 tracking-wider">
              U.S TRUNK SHOWS
            </h3>
            <p className="text-muted-foreground mb-8">
              Visiting major cities across the East & West coast of America
            </p>
            <Link to="/about-trunk-shows">
              <Button variant="outline" className="px-12 py-6 text-base">
                DATES & LOCATIONS
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
