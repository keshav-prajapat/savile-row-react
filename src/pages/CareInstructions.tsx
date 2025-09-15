import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shirt, Droplets, Wind, Shield, AlertTriangle, Heart } from "lucide-react";

const CareInstructions = () => {
  const fabricCare = [
    {
      fabric: "Wool Suiting",
      icon: Shirt,
      care: [
        "Professional dry cleaning recommended",
        "Hang on shaped hangers between wears",
        "Allow 24 hours rest between wears",
        "Steam lightly to remove wrinkles",
        "Store in breathable garment bags"
      ]
    },
    {
      fabric: "Cashmere",
      icon: Heart,
      care: [
        "Gentle hand wash or professional cleaning",
        "Use cashmere-specific detergent",
        "Lay flat to dry away from direct heat",
        "Store folded with cedar balls",
        "Professional cleaning 2-3 times per year"
      ]
    },
    {
      fabric: "Cotton Shirts",
      icon: Droplets,
      care: [
        "Machine wash in cold water",
        "Use gentle cycle for fine cottons",
        "Iron while slightly damp",
        "Hang immediately after washing",
        "Starch sparingly to maintain fabric"
      ]
    },
    {
      fabric: "Silk",
      icon: Wind,
      care: [
        "Professional dry cleaning preferred",
        "Hand wash in cool water if necessary",
        "Use silk-specific detergent",
        "Iron on reverse side while damp",
        "Store hanging in cool, dry place"
      ]
    }
  ];

  const generalTips = [
    {
      title: "Daily Care",
      tips: [
        "Remove items from pockets before hanging",
        "Brush garments gently after each wear",
        "Allow clothes to air before storing",
        "Rotate between garments to prevent overuse"
      ]
    },
    {
      title: "Storage",
      tips: [
        "Use cedar hangers for suits and jackets",
        "Store in breathable garment bags",
        "Keep in cool, dry, well-ventilated area",
        "Avoid overcrowding in wardrobes"
      ]
    },
    {
      title: "Seasonal Care",
      tips: [
        "Clean all garments before long-term storage",
        "Use cedar blocks to prevent moths",
        "Check stored items every few months",
        "Air out stored garments before wearing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif mb-4">Care Instructions</h1>
              <p className="text-muted-foreground text-lg">
                Preserve the quality and longevity of your investment pieces
              </p>
            </div>

            {/* Fabric-Specific Care */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-8">Fabric-Specific Care</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {fabricCare.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary mr-3" />
                        <h3 className="font-serif text-lg">{item.fabric}</h3>
                      </div>
                      <ul className="space-y-2">
                        {item.care.map((instruction, instructionIndex) => (
                          <li key={instructionIndex} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* General Care Tips */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-8">General Care Guidelines</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {generalTips.map((category, index) => (
                  <div key={index} className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-serif text-lg mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Stain Removal */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-serif">Emergency Stain Removal</h2>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Important</h3>
                    <p className="text-amber-700 text-sm">
                      For valuable garments, always consult with professional cleaners before attempting 
                      stain removal. Improper treatment can cause permanent damage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg mb-4">Water-Based Stains</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Coffee, tea, wine, fruit juices
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Blot immediately, don't rub</li>
                    <li>• Use cold water to dilute</li>
                    <li>• Work from outside of stain inward</li>
                    <li>• Seek professional cleaning promptly</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg mb-4">Oil-Based Stains</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Grease, makeup, ink, perspiration
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Do not add water</li>
                    <li>• Absorb excess with clean cloth</li>
                    <li>• Mark stain location for cleaner</li>
                    <li>• Take to professional cleaner immediately</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-6">Professional Care Services</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="font-serif text-lg mb-4">Huntsman Aftercare Service</h3>
                <p className="text-muted-foreground mb-4">
                  We offer comprehensive aftercare services for all Huntsman garments to ensure 
                  they maintain their quality and appearance for years to come.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Professional cleaning partnerships</li>
                  <li>• Minor repair and restoration</li>
                  <li>• Pressing and steaming services</li>
                  <li>• Seasonal storage consultation</li>
                  <li>• Alteration and resizing</li>
                  <li>• Moth damage prevention</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-3">London Aftercare</h3>
                  <p className="text-muted-foreground mb-2">11 Savile Row</p>
                  <p className="text-muted-foreground mb-2">+44 20 7734 7441</p>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 9 AM - 6 PM, Sat: 9 AM - 5 PM</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-3">New York Aftercare</h3>
                  <p className="text-muted-foreground mb-2">58 W 57th Street</p>
                  <p className="text-muted-foreground mb-2">+1 646 590 2595</p>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 10 AM - 7 PM, Sat: 10 AM - 6 PM</p>
                </div>
              </div>
            </section>

            {/* Care Calendar */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-center">Seasonal Care Calendar</h2>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <h3 className="font-serif mb-2">Spring</h3>
                  <p className="text-muted-foreground text-sm">Winter clothing storage, moth prevention</p>
                </div>
                <div>
                  <h3 className="font-serif mb-2">Summer</h3>
                  <p className="text-muted-foreground text-sm">Frequent cleaning, proper storage</p>
                </div>
                <div>
                  <h3 className="font-serif mb-2">Autumn</h3>
                  <p className="text-muted-foreground text-sm">Pre-winter inspection, minor repairs</p>
                </div>
                <div>
                  <h3 className="font-serif mb-2">Winter</h3>
                  <p className="text-muted-foreground text-sm">Regular brushing, proper hanging</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareInstructions;