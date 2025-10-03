import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heritageWorkshop from "@/assets/heritage-workshop.jpg";
import handcraftDetail from "@/assets/handcraft-detail.jpg";
import fabricArchive from "@/assets/fabric-archive.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

const WorldOfHuntsman = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={heritageWorkshop}
          alt="World of Huntsman"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-wider">
              WORLD OF HUNTSMAN
            </h1>
            <p className="text-xl md:text-2xl tracking-wide">
              Where tradition meets timeless elegance
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif text-center mb-8 tracking-wider">
            OUR HERITAGE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Since our establishment on Savile Row, we have been synonymous with the finest 
            bespoke tailoring. Our commitment to exceptional craftsmanship and attention to 
            detail has made us a destination for those who appreciate the art of traditional tailoring.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every garment we create is a testament to generations of expertise, passed down 
            through master tailors who have honed their craft to perfection. We honor these 
            traditions while embracing contemporary style and innovation.
          </p>
        </div>
      </section>

      {/* Craftsmanship Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 tracking-wider">
            THE CRAFT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative h-[400px] overflow-hidden">
              <img 
                src={handcraftDetail}
                alt="Hand Stitching Detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2 tracking-wide">HAND STITCHING</h3>
                <p className="text-sm">Every detail crafted by expert hands</p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <img 
                src={fabricArchive}
                alt="Fabric Archive"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2 tracking-wide">FINEST FABRICS</h3>
                <p className="text-sm">Sourced from the world's premier mills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif text-center mb-12 tracking-wider">
            OUR VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pursue perfection in every stitch, cut, and finish, ensuring each garment 
                meets our exacting standards.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Tradition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our methods honor centuries of tailoring heritage while embracing modern 
                innovations that enhance our craft.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Individuality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each client receives personal attention, with garments created to reflect 
                their unique style and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Workshop */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-serif mb-6 tracking-wider">
                OUR WORKSHOP
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Step into our workshop and witness the artistry of bespoke tailoring. Here, 
                traditional techniques blend seamlessly with precision and care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our master craftsmen dedicate countless hours to each garment, ensuring that 
                every piece that leaves our workshop is a work of art.
              </p>
              <Link to="/book-appointment">
                <Button size="lg" className="tracking-wider">
                  Visit Our Atelier
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src={craftsmanship}
                alt="Workshop Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif text-center mb-12 tracking-wider">
            THE HUNTSMAN EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Bespoke Tailoring</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Experience the ultimate in personalized service with a garment created 
                entirely to your specifications, measurements, and preferences.
              </p>
              <Link to="/bespoke">
                <Button variant="outline" className="tracking-wider">
                  Explore Bespoke
                </Button>
              </Link>
            </div>
            <div className="border border-border p-8">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Ready to Wear</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our curated ready-to-wear collection, featuring classic styles 
                crafted with the same dedication to quality.
              </p>
              <Link to="/ready-to-wear">
                <Button variant="outline" className="tracking-wider">
                  Shop Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-6 tracking-wider">
            JOIN THE HUNTSMAN LEGACY
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Become part of our distinguished history. Book an appointment to experience 
            the world of bespoke tailoring firsthand.
          </p>
          <Link to="/book-appointment">
            <Button size="lg" className="tracking-wider">
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldOfHuntsman;
