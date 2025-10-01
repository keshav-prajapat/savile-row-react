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
      {/* Newsletter Section */}
      <div className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4 tracking-wider">JOIN OUR MAILING LIST</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
            Stay up to date with our new arrivals, collection launches and all of the news from the world of Huntsman.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background"
              required
            />
            <Button type="submit" className="bg-foreground hover:bg-foreground/90 text-background px-10">
              SIGN UP
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
              <h3 className="font-serif text-xl mb-4 tracking-wider">HUNTSMAN</h3>
              <p className="text-xs text-muted-foreground mb-4 tracking-widest">ESTABLISHED 1849</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Savile Row's finest bespoke tailoring house, crafting exceptional menswear for over 170 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif mb-4 tracking-wide">SHOP</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/suiting" className="text-muted-foreground hover:text-foreground transition-colors">Suiting</Link></li>
                <li><Link to="/jackets" className="text-muted-foreground hover:text-foreground transition-colors">Jackets</Link></li>
                <li><Link to="/outerwear" className="text-muted-foreground hover:text-foreground transition-colors">Outerwear</Link></li>
                <li><Link to="/knitwear" className="text-muted-foreground hover:text-foreground transition-colors">Knitwear</Link></li>
                <li><Link to="/bespoke" className="text-muted-foreground hover:text-foreground transition-colors">Bespoke</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-serif mb-4 tracking-wide">CUSTOMER SERVICE</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
                <li><Link to="/locations" className="text-muted-foreground hover:text-foreground transition-colors">Locations</Link></li>
                <li><Link to="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
                <li><Link to="/book-appointment" className="text-muted-foreground hover:text-foreground transition-colors">Book Appointment</Link></li>
                <li><Link to="/size-guide" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</Link></li>
                <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping</Link></li>
                <li><Link to="/care-instructions" className="text-muted-foreground hover:text-foreground transition-colors">Care Instructions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif mb-4 tracking-wide">CONTACT</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-1">LONDON</p>
                  <p className="text-muted-foreground">11 Savile Row</p>
                  <p className="text-muted-foreground">London W1S 3PS</p>
                  <p className="text-muted-foreground mt-2">+44 20 7734 7441</p>
                </div>
                <div>
                  <p className="font-medium mb-1">NEW YORK</p>
                  <p className="text-muted-foreground">57 W 57th Street</p>
                  <p className="text-muted-foreground">New York, NY 10019</p>
                  <p className="text-muted-foreground mt-2">+1 646 590 2595</p>
                </div>
                <div className="pt-2">
                  <a href="mailto:usa@huntsmansavilerow.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    usa@huntsmansavilerow.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Legal */}
          <div className="pt-10 mt-10 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-6 text-xs">
                <Link to="/pages/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link to="/pages/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                <Link to="/pages/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link>
              </div>
              
              <div className="text-xs text-muted-foreground">
                <p>&copy; 2025 H. Huntsman & Sons. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};