import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Savile Row - London",
      address: "11 Savile Row, Mayfair, London W1S 3PG, United Kingdom",
      phone: "+44 20 7734 7441",
      email: "london@huntsmansavilerow.com",
      hours: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 5:00 PM", 
        "Sunday: Closed"
      ],
      description: "Our flagship store on the world-famous Savile Row, where bespoke tailoring traditions have been perfected since 1849."
    },
    {
      name: "New York - W 57th Street",
      address: "58 W 57th St, New York, NY 10019, United States",
      phone: "+1 646 590 2595",
      email: "newyork@huntsmansavilerow.com",
      hours: [
        "Monday - Friday: 10:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 6:00 PM",
        "Sunday: 12:00 PM - 5:00 PM"
      ],
      description: "Our New York showroom brings Savile Row craftsmanship to Manhattan, offering consultations and fittings for our American clientele."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-serif mb-4">Our Locations</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Visit us at our flagship stores in London and New York
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="mb-16">
              <div className="w-full h-96 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Google Maps integration would go here</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {locations.map((location, index) => (
                <div key={index} className="border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-serif mb-6">{location.name}</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-primary">
                        {location.email}
                      </a>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                      <div>
                        {location.hours.map((hour, hourIndex) => (
                          <p key={hourIndex} className="text-muted-foreground text-sm">
                            {hour}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {location.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Get Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trunk Shows Section */}
            <div className="mt-16 bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-center">USA Trunk Shows</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Our master tailors regularly travel across the United States to bring Huntsman's 
                bespoke experience to cities nationwide. Check our upcoming trunk show dates and locations.
              </p>
              <div className="text-center">
                <Button variant="outline">
                  View Trunk Show Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;