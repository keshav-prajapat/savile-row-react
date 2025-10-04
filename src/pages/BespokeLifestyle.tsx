import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import businessSuit from "@/assets/business-suit.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

export default function BespokeLifestyle() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <img 
            src={businessSuit} 
            alt="Bespoke Lifestyle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-wider">
                BESPOKE LIFESTYLE
              </h1>
              <p className="text-xl tracking-wide">BEYOND TAILORING</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-8 text-center tracking-wider">
              Bespoke Beyond Tailoring
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
              <p>
                At Huntsman Savile Row, bespoke is more than a craft, it is a philosophy. For over 175 years, 
                we have set the standard for bespoke tailoring, creating garments of unparalleled precision 
                and luxury. Now, we bring that same commitment to craftsmanship beyond the world of clothing, 
                collaborating with visionary designers, artisans, and engineers to craft exceptional pieces 
                for every facet of contemporary luxury living.
              </p>
              
              <p>
                From hand-tailored supercar interiors to Huntsman tweed-upholstered private jets, we transform 
                imagination into reality, ensuring that every detail is a reflection of individuality, heritage, 
                and innovation. If you can dream it, we can help you create it.
              </p>
            </div>

            <div className="text-center">
              <Link to="/book-appointment">
                <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                  BOOK A CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Bespoke Lifestyle */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-12 text-center tracking-wider">
              What is the Bespoke Lifestyle?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={craftsmanship} 
                  alt="Bespoke Craftsmanship" 
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  The bespoke lifestyle is about more than just owning luxury, it's about living it. 
                  It is the philosophy that true sophistication is measured by personalisation, where 
                  every element of one's world reflects individual style, taste, and heritage.
                </p>
                <p>
                  At Huntsman, we apply the same meticulous tailoring process to crafting exclusive 
                  lifestyle pieces, ensuring that every project reflects the personal vision of its owner.
                </p>
                <p>
                  Whether it's the silhouette of a suit, the pieces on a backgammon board, or the contours 
                  of a car's interior, every detail is shaped by hand, refined with expertise, and executed 
                  with the utmost discretion and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation & Collaboration */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-8 text-center tracking-wider">
              Innovation & Collaboration
            </h2>
            
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
              Huntsman has a reputation as a tailor committed to innovation. It makes us the destination 
              on Savile Row for bespoke lifestyle projects. By collaborating with luxury designers, makers 
              and engineers, we're able to realise our client's desires in a way that stays true to the 
              quality and prestige of our bespoke tailoring.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-serif mb-16 text-center tracking-wider">
              Bespoke Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Automotive Interiors", description: "Luxury car interiors with bespoke upholstery" },
                { title: "Private Aviation", description: "Custom aircraft cabin designs" },
                { title: "Yacht Interiors", description: "Handcrafted marine interior solutions" },
                { title: "Luxury Accessories", description: "Bespoke lifestyle accessories" },
                { title: "Home Furnishings", description: "Custom upholstered furniture" },
                { title: "Special Commissions", description: "Unique bespoke projects" }
              ].map((project, index) => (
                <div key={index} className="border bg-background p-8 hover:bg-muted/20 transition-colors">
                  <h3 className="text-xl font-serif mb-4 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applying Bespoke Principles */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-serif mb-8 text-center tracking-wider">
              Applying Bespoke Principles to Unique Projects
            </h2>
            
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Huntsman's expertise lies in the mastery of cut, form, and fabric, principles that seamlessly 
              translate into luxury lifestyle projects. Our highly skilled craftsmen and artisans bring 
              centuries of experience to new frontiers of bespoke design, ensuring that every project is 
              as meticulously considered as our bespoke suits.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6 tracking-wider">
              ENQUIRE ABOUT YOUR BESPOKE LIFESTYLE PROJECT
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              For those who demand more than off-the-shelf luxury, Huntsman Bespoke Lifestyle offers 
              a world where tailoring extends beyond the wardrobe. From the runway to the road, the sky 
              to the sea, wherever your vision takes you, Huntsman is ready to craft the extraordinary.
            </p>
            <Link to="/book-appointment">
              <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                BOOK A CONSULTATION
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
