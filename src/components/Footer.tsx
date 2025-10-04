import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      {/* Newsletter Section - LV Style */}
      <div className="py-16 border-b">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <h2 className="text-2xl font-serif mb-3 tracking-[0.3em] uppercase">Newsletter</h2>
          <p className="text-muted-foreground mb-6 text-xs tracking-wide">
            Stay informed about our new arrivals and exclusive offerings
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-0 border-b border-foreground pb-1">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
              required
            />
            <Button type="submit" variant="ghost" className="text-xs tracking-wider px-4 hover:bg-transparent">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content - Clean LV Style */}
      <div className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {/* Collections */}
            <div>
              <h4 className="font-medium mb-4 text-xs tracking-[0.2em] uppercase">Collections</h4>
              <ul className="space-y-3 text-xs">
                <li><Link to="/suiting" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Suiting</Link></li>
                <li><Link to="/jackets" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Jackets</Link></li>
                <li><Link to="/outerwear" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Outerwear</Link></li>
                <li><Link to="/knitwear" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Knitwear</Link></li>
              </ul>
            </div>

            {/* Bespoke */}
            <div>
              <h4 className="font-medium mb-4 text-xs tracking-[0.2em] uppercase">Bespoke</h4>
              <ul className="space-y-3 text-xs">
                <li><Link to="/bespoke-tailoring" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">About Bespoke</Link></li>
                <li><Link to="/bespoke-womens" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Ladies Tailoring</Link></li>
                <li><Link to="/about-trunk-shows" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Trunk Shows</Link></li>
                <li><Link to="/bespoke-lifestyle" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Bespoke Lifestyle</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium mb-4 text-xs tracking-[0.2em] uppercase">Services</h4>
              <ul className="space-y-3 text-xs">
                <li><Link to="/book-appointment" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Book Appointment</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Contact Us</Link></li>
                <li><Link to="/size-guide" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Size Guide</Link></li>
                <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Shipping</Link></li>
                <li><Link to="/care-instructions" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Care Instructions</Link></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-medium mb-4 text-xs tracking-[0.2em] uppercase">About</h4>
              <ul className="space-y-3 text-xs">
                <li><Link to="/company" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Our Story</Link></li>
                <li><Link to="/locations" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Locations</Link></li>
                <li><Link to="/huntsman-w57th" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">New York</Link></li>
                <li><Link to="/faqs" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">FAQs</Link></li>
                <li><Link to="/journal" className="text-muted-foreground hover:text-foreground transition-colors tracking-wide">Journal</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-10 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h4 className="font-medium mb-3 text-xs tracking-[0.2em] uppercase">London</h4>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>11 Savile Row</p>
                <p>London W1S 3PS</p>
                <p className="mt-2">+44 20 7734 7441</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-xs tracking-[0.2em] uppercase">New York</h4>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>130 W. 57th Street</p>
                <p>New York, NY 10019</p>
                <p className="mt-2">+1 646 590 2595</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a href="mailto:usa@huntsmansavilerow.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              usa@huntsmansavilerow.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-[10px] tracking-wider uppercase">
              <Link to="/pages/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/pages/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              <Link to="/pages/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link>
            </div>
            
            <div className="text-[10px] text-muted-foreground tracking-wider uppercase">
              <p>&copy; 2025 H. Huntsman & Sons</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};