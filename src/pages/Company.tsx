import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Company = () => {
  const milestones = [
    {
      year: "1849",
      title: "The Beginning",
      description: "Henry Huntsman establishes his first shop on Savile Row, laying the foundation for what would become the world's most prestigious tailoring house."
    },
    {
      year: "1865",
      title: "Royal Recognition", 
      description: "Granted the first Royal Warrant, beginning a long tradition of serving royalty and heads of state."
    },
    {
      year: "1919",
      title: "Post-War Innovation",
      description: "Pioneered new cutting techniques and introduced lighter fabrics, revolutionizing menswear for the modern era."
    },
    {
      year: "1950",
      title: "Hollywood Glamour",
      description: "Became the go-to tailor for Hollywood stars, dressing leading men for both screen and red carpet appearances."
    },
    {
      year: "1975",
      title: "International Expansion",
      description: "Opened first international showroom, bringing Savile Row craftsmanship to a global clientele."
    },
    {
      year: "2000",
      title: "Digital Age",
      description: "Embraced modern technology while maintaining traditional craftsmanship, introducing online consultations and digital fitting."
    },
    {
      year: "2024",
      title: "Heritage & Innovation",
      description: "Continues to lead the industry with sustainable practices and cutting-edge techniques while honoring 175 years of tradition."
    }
  ];

  const values = [
    {
      title: "Craftsmanship",
      description: "Every stitch tells a story of skill passed down through generations of master tailors.",
      icon: "✂️"
    },
    {
      title: "Heritage",
      description: "175 years of tradition inform everything we do, from our cutting techniques to our client relationships.",
      icon: "🏛️"
    },
    {
      title: "Innovation",
      description: "We honor the past while embracing the future, constantly refining our craft and service.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We accept nothing less than perfection in every garment that bears the Huntsman name.",
      icon: "⭐"
    }
  ];

  const team = [
    {
      name: "James Mitchell",
      role: "Head Cutter",
      experience: "35 years",
      description: "James joined Huntsman as an apprentice and has worked his way up to become one of Savile Row's most respected cutters.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Thompson", 
      role: "Master Tailor",
      experience: "28 years",
      description: "Sarah specializes in evening wear and has created garments for numerous red carpet events and state occasions.",
      image: "/placeholder.svg"
    },
    {
      name: "David Chen",
      role: "Creative Director",
      experience: "15 years", 
      description: "David brings a modern vision to Huntsman while respecting our traditional roots and craftsmanship values.",
      image: "/placeholder.svg"
    },
    {
      name: "Elizabeth Harper",
      role: "Client Relations Director",
      experience: "22 years",
      description: "Elizabeth ensures every client receives the personalized service that has made Huntsman legendary.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-muted/30">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10" />
          <img 
            src="/placeholder.svg"
            alt="Huntsman Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <Badge className="mb-6">Est. 1849</Badge>
                <h1 className="text-6xl font-serif mb-8 leading-tight">
                  The Art of<br />Savile Row
                </h1>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  For 175 years, Huntsman has been the pinnacle of bespoke tailoring. 
                  From our flagship store on Savile Row, we continue to dress the world's 
                  most discerning gentlemen with unparalleled craftsmanship and style.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Our Story
                  </Button>
                  <Button size="lg" variant="outline">
                    Meet the Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-serif mb-2">175+</p>
                <p className="text-muted-foreground">Years of Heritage</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif mb-2">50+</p>
                <p className="text-muted-foreground">Master Craftsmen</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif mb-2">25,000+</p>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif mb-2">3</p>
                <p className="text-muted-foreground">Royal Warrants</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-serif mb-8">Our Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1849 by Henry Huntsman, our company began as a small tailoring 
                    establishment with a simple mission: to create the finest garments using 
                    traditional craftsmanship and the highest quality materials.
                  </p>
                  <p>
                    What started as a single shop has grown into an internationally recognized 
                    brand, synonymous with excellence in bespoke tailoring. Yet despite our 
                    growth, we've never lost sight of our founding principles.
                  </p>
                  <p>
                    Today, we continue to operate from our historic premises on Savile Row, 
                    where skilled artisans create each garment by hand using techniques 
                    perfected over generations.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/placeholder.svg"
                  alt="Historic Huntsman shop"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-lg border">
                  <div className="text-center">
                    <p className="text-3xl font-serif mb-2">11</p>
                    <p className="text-sm text-muted-foreground">Savile Row</p>
                    <p className="text-xs text-muted-foreground mt-1">Our historic address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Our Journey</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Key milestones in our 175-year history of excellence
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden lg:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}>
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="bg-background p-6 rounded-lg shadow-sm border">
                        <Badge className="mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-serif mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}>
                      <div className="relative">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The master craftsmen and women who bring our vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded">
                      <Badge variant="outline">{member.experience}</Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-serif mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Awards & Recognition</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Industry recognition for our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl mb-4">👑</div>
                <h3 className="text-lg font-serif mb-2">Royal Warrant Holders</h3>
                <p className="text-muted-foreground text-sm">
                  Proud to hold Royal Warrants from three members of the Royal Family
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-lg font-serif mb-2">Savile Row Excellence Award</h3>
                <p className="text-muted-foreground text-sm">
                  Recognized for outstanding contribution to British tailoring heritage
                </p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-lg font-serif mb-2">Master Tailor Guild</h3>
                <p className="text-muted-foreground text-sm">
                  Founding member of the prestigious Master Tailor Guild
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">Join Our Legacy</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Experience the artistry and tradition that has made Huntsman the world's 
              premier tailoring house for over 175 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                Visit Our Workshop
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Company;