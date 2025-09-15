import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, Package, Globe, Shield, Clock, RefreshCw } from "lucide-react";

const Shipping = () => {
  const shippingMethods = [
    {
      name: "Standard Delivery",
      description: "UK: 2-3 business days, International: 5-7 business days",
      price: "Free on orders over £500, otherwise £15",
      icon: Package
    },
    {
      name: "Express Delivery",
      description: "UK: Next business day, International: 2-3 business days",
      price: "£25 UK, £50 International",
      icon: Truck
    },
    {
      name: "White Glove Service",
      description: "Personal delivery and fitting service",
      price: "£150 (London area only)",
      icon: Shield
    }
  ];

  const internationalRates = [
    { region: "Europe", standard: "£25", express: "£50", time: "5-7 days" },
    { region: "North America", standard: "£35", express: "£70", time: "7-10 days" },
    { region: "Asia Pacific", standard: "£45", express: "£90", time: "10-14 days" },
    { region: "Rest of World", standard: "£55", express: "£110", time: "14-21 days" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif mb-4">Shipping & Returns</h1>
              <p className="text-muted-foreground text-lg">
                Worldwide delivery and hassle-free returns
              </p>
            </div>

            {/* Shipping Methods */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-8">Shipping Methods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {shippingMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary mr-3" />
                        <h3 className="font-serif text-lg">{method.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">{method.description}</p>
                      <p className="font-semibold">{method.price}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* International Shipping */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-serif">International Shipping</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-4 py-3 text-left font-serif">Region</th>
                      <th className="border border-border px-4 py-3 text-left font-serif">Standard</th>
                      <th className="border border-border px-4 py-3 text-left font-serif">Express</th>
                      <th className="border border-border px-4 py-3 text-left font-serif">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internationalRates.map((rate, index) => (
                      <tr key={index} className="hover:bg-muted/30">
                        <td className="border border-border px-4 py-3 font-semibold">{rate.region}</td>
                        <td className="border border-border px-4 py-3">{rate.standard}</td>
                        <td className="border border-border px-4 py-3">{rate.express}</td>
                        <td className="border border-border px-4 py-3">{rate.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                * Delivery times are estimates and may vary due to customs processing
              </p>
            </section>

            {/* Returns Policy */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <RefreshCw className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-serif">Returns Policy</h2>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="font-serif text-lg mb-4">Ready-to-Wear Items</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Returns accepted within 30 days of delivery</li>
                  <li>• Items must be unworn and in original condition</li>
                  <li>• Original tags and packaging must be included</li>
                  <li>• Free returns for UK customers</li>
                  <li>• International return shipping costs apply</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="font-serif text-lg mb-4">Bespoke Items</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bespoke items are made-to-order and cannot be returned</li>
                  <li>• We guarantee perfect fit through our fitting process</li>
                  <li>• Complimentary alterations within 6 months</li>
                  <li>• Lifetime repair and maintenance service available</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-serif text-lg mb-4">How to Return</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Contact our customer service team</li>
                  <li>2. Receive return authorization and prepaid label (UK only)</li>
                  <li>3. Package items securely with original packaging</li>
                  <li>4. Refund processed within 5-7 business days of receipt</li>
                </ol>
              </div>
            </section>

            {/* Important Information */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-serif">Important Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-lg">Customs & Duties</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• International customers are responsible for customs duties</li>
                    <li>• Duties vary by country and order value</li>
                    <li>• We declare full value on all shipments</li>
                    <li>• Delays may occur due to customs processing</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-serif text-lg">Order Processing</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Ready-to-wear: 1-2 business days processing</li>
                    <li>• Bespoke items: 12-16 weeks production time</li>
                    <li>• Alterations: 1-2 weeks depending on complexity</li>
                    <li>• Holiday periods may extend processing times</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-center">Need Help?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-3">London</h3>
                  <p className="text-muted-foreground mb-2">+44 20 7734 7441</p>
                  <p className="text-muted-foreground">london@huntsmansavilerow.com</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-3">New York</h3>
                  <p className="text-muted-foreground mb-2">+1 646 590 2595</p>
                  <p className="text-muted-foreground">newyork@huntsmansavilerow.com</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Our customer service team is available Monday-Friday, 9 AM - 6 PM GMT
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;