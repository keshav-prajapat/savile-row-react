import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import trunkShow from "@/assets/trunk-show.jpg";

export default function AboutTrunkShows() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-wider">
              HUNTSMAN TRUNK SHOWS
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For clients beyond London and New York, our international trunk shows deliver the same 
              exceptional service and craftsmanship. Each garment is cut, crafted, and finished at 
              11 Savile Row, ensuring the hallmark of Huntsman quality, no matter where you are in the world.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative h-[60vh]">
          <img 
            src={trunkShow} 
            alt="Trunk Show" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* Regions */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { region: "ASIA", cities: "Hong Kong, Singapore, Tokyo, Seoul" },
                { region: "U.S.A", cities: "New York, Los Angeles, Dallas, Boston" },
                { region: "MIDDLE EAST", cities: "Dubai, Riyadh, Kuwait, Doha" },
                { region: "EUROPE", cities: "Geneva, Zurich, Paris, Milan" }
              ].map((location, index) => (
                <div key={index} className="border p-8 text-center hover:bg-muted/20 transition-colors">
                  <h3 className="text-2xl font-serif mb-4 tracking-wider">
                    {location.region}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {location.cities}
                  </p>
                  <Link to="/book-appointment">
                    <Button variant="outline" className="w-full">
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-serif mb-16 text-center tracking-wider">
              How It Works
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-foreground pl-8">
                <h3 className="text-2xl font-serif mb-4 tracking-wide">
                  1. Book Your Appointment
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Check our upcoming trunk show locations and dates</li>
                  <li>• Reserve a one-on-one consultation with our team in your city</li>
                  <li>• At your appointment you'll meet with the Huntsman team, who will discuss the type of garment you'd like</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-8">
                <h3 className="text-2xl font-serif mb-4 tracking-wide">
                  2. Personal Consultation & Measurement
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Our experts take over 30 precise measurements</li>
                  <li>• We guide you through luxury fabric selections</li>
                  <li>• Discuss details like lapel styles, lining options, button choices</li>
                  <li>• We'll arrange a date and time for your next fitting appointment</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-8">
                <h3 className="text-2xl font-serif mb-4 tracking-wide">
                  3. The Bespoke Tailoring Process
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Your pattern is hand-drafted and cut by your cutter</li>
                  <li>• All garments are crafted at our 11 Savile Row workshops</li>
                  <li>• Multiple fittings ensure perfect fit and satisfaction</li>
                  <li>• Final delivery of your bespoke garment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6 tracking-wider">
              BOOK YOUR TRUNK SHOW APPOINTMENT
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience Huntsman's exceptional bespoke service in your city. Book your consultation today.
            </p>
            <Link to="/book-appointment">
              <Button className="bg-foreground hover:bg-foreground/90 text-background px-12 py-6 text-base">
                BOOK APPOINTMENT
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
