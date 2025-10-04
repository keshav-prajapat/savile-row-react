import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bespokeHero from "@/assets/bespoke-hero.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import fabrics from "@/assets/fabrics.jpg";

export default function BespokeTailoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <img 
            src={bespokeHero} 
            alt="Bespoke Tailoring" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-wider">
                BESPOKE TAILORING
              </h1>
              <p className="text-xl tracking-wide">THE ART OF PERFECTION</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="border-b sticky top-16 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-6 py-4 justify-center text-sm">
              <Link to="/bespoke-tailoring" className="hover:text-muted-foreground transition-colors font-medium border-b-2 border-foreground pb-1">
                About Huntsman Bespoke
              </Link>
              <Link to="/book-appointment" className="hover:text-muted-foreground transition-colors">
                Our Services
              </Link>
              <Link to="/book-appointment" className="hover:text-muted-foreground transition-colors">
                Our Process
              </Link>
              <Link to="/bespoke-womens" className="hover:text-muted-foreground transition-colors">
                Bespoke Ladies
              </Link>
              <Link to="/about-trunk-shows" className="hover:text-muted-foreground transition-colors">
                Trunk Shows
              </Link>
              <Link to="/huntsman-w57th" className="hover:text-muted-foreground transition-colors">
                Huntsman New York
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-8 text-center tracking-wider">
              About Huntsman Bespoke
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Huntsman has been making the world's finest handcrafted clothes since 1849. 
                The heart of Huntsman always has been, and always will be bespoke.
              </p>
              
              <p>
                But what sets bespoke tailoring apart from its made-to-measure or ready-to-wear counterparts?
              </p>
              
              <p>
                Though both play their part in contemporary menswear, it is the art and craft of bespoke 
                tailoring, unchanged for centuries, that has been perfected into an art form. To guarantee 
                a feel and fit which is unparalleled, and a service which is unsurpassed.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link to="/book-appointment">
                <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                  BOOK AN APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "At Huntsman, we believe in the transformative power of bespoke tailoring. 
              A well-tailored suit makes you stand a little taller, and walk a little straighter."
            </blockquote>
            <p className="text-sm tracking-wider text-muted-foreground">
              - CAMPBELL CAREY, HUNTSMAN HEAD CUTTER & CREATIVE DIRECTOR
            </p>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-12 text-center tracking-wider">
              What Sets Us Apart
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={craftsmanship} 
                  alt="Craftsmanship" 
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Commissioning a bespoke garment is not unlike commissioning a portrait. It's an art 
                  form that begins with up to 28 measurements to create a 2D rendering of your body, 
                  as a paper pattern.
                </p>
                <p>
                  Up to 80 hours of handwork by the most skilled team of cutters and tailors on Savile 
                  Row are woven into the soul of every one of our tailored garments. From measuring and 
                  drafting your paper pattern, to hand stitching and finishing details, no two bodies are 
                  the same, and so no two bespoke suits, shirts, or separates are the same.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground md:order-1 order-2">
                <p>
                  No bespoke suit leaves our store until you are completely satisfied, which is why we 
                  will see you at least four times for your fittings.
                </p>
                <p>
                  A bespoke design allows you that extra level of personalisation. Whether it is the 
                  luxury of silk printed lining, half an inch on a cuff, or a truly bespoke suit you will 
                  want to live in; the quality of our bespoke tailoring speaks for itself when you are 
                  still enjoying your garments in 20 years' time.
                </p>
              </div>
              <div className="md:order-2 order-1">
                <img 
                  src={fabrics} 
                  alt="Luxury Fabrics" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Bespoke */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-8 text-center tracking-wider">
              Why Choose Bespoke?
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Ready-to-wear or made to measure garments are made to a standard block that doesn't 
                accommodate for the uniqueness and nuances of the individual form.
              </p>
              
              <p>
                With a bespoke suit, handcrafted just for you, you will notice the difference as soon 
                as you put it on. Huntsman is dedicated to bespoke tailoring.
              </p>
              
              <p>
                The made-to-measure services offered by other tailors use a standard-sized base pattern, 
                which is altered to your frame. Some modifications may occur, but you will never truly 
                enjoy that exclusive feeling of wearing a tailored suit.
              </p>
              
              <p>
                With bespoke tailoring starting from £6000, which is comparable to made-to-measure, 
                you can invest in a bespoke suit that is every bit as unique as you are without 
                compromising on quality.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6 tracking-wider">
              BEGIN YOUR BESPOKE JOURNEY
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the pinnacle of tailoring craftsmanship. Book your consultation today.
            </p>
            <Link to="/book-appointment">
              <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                BOOK CONSULTATION
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
