import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4">Join Our Mailing List</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Stay up to date with our new arrivals, collection launches and all of the news from the world of Huntsman.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8">
              Confirm
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-serif text-lg mb-4">HUNTSMAN</h3>
              <p className="text-sm text-muted-foreground mb-4">ESTABLISHED 1849</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Savile Row's finest bespoke tailoring house, crafting exceptional menswear for over 170 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/collections/suits" className="huntsman-link">Suiting</a></li>
                <li><a href="/collections/jackets" className="huntsman-link">Jackets</a></li>
                <li><a href="/collections/outerwear" className="huntsman-link">Outerwear</a></li>
                <li><a href="/collections/knitwear" className="huntsman-link">Knitwear</a></li>
                <li><a href="/pages/bespoke-tailoring" className="huntsman-link">Bespoke</a></li>
                <li><a href="/blogs/journal" className="huntsman-link">Journal</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-serif mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/pages/how-may-we-help-you-contact-us" className="huntsman-link">Locations</a></li>
                <li><a href="/pages/how-may-we-help-you-faqs" className="huntsman-link">FAQs</a></li>
                <li><a href="/pages/contact" className="huntsman-link">Book an Appointment</a></li>
                <li><a href="/pages/size-guide" className="huntsman-link">Size Guide</a></li>
                <li><a href="/pages/shipping" className="huntsman-link">Shipping & Returns</a></li>
                <li><a href="/pages/care-instructions" className="huntsman-link">Care Instructions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">London</p>
                  <p className="text-muted-foreground">11 Savile Row</p>
                  <p className="text-muted-foreground">London W1S 3PS</p>
                  <p className="text-muted-foreground">+44 20 7734 7441</p>
                </div>
                <div>
                  <p className="font-medium">New York</p>
                  <p className="text-muted-foreground">57 W 57th Street</p>
                  <p className="text-muted-foreground">New York, NY 10019</p>
                  <p className="text-muted-foreground">+1 646 590 2595</p>
                </div>
                <div>
                  <p className="huntsman-link">usa@huntsmansavilerow.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Legal */}
          <div className="pt-8 mt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm">
                <a href="/pages/privacy-policy" className="huntsman-link">Privacy Policy</a>
                <a href="/pages/terms-of-service" className="huntsman-link">Terms of Service</a>
                <a href="/pages/cookies" className="huntsman-link">Cookie Policy</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="text-xs">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="text-xs">ig</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="text-xs">tw</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 H. Huntsman & Sons. All rights reserved.</p>
            <p className="mt-2">Design & development by <a href="https://bitcube.tech/" className="huntsman-link">Bitcube</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};