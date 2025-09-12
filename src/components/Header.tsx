import { useState } from 'react';
import { Menu, Search, User, ShoppingBag, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Menu button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-muted rounded-sm transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-serif tracking-wider">HUNTSMAN</h1>
                <p className="text-xs text-muted-foreground tracking-wider">ESTABLISHED 1849</p>
              </div>
            </div>

            {/* Right: Icons and Currency */}
            <div className="flex items-center space-x-2">
              <select className="text-sm bg-transparent border-none focus:outline-none cursor-pointer">
                <option>USD $</option>
                <option>GBP £</option>
                <option>EUR €</option>
              </select>
              <button className="p-2 hover:bg-muted rounded-sm transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded-sm transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded-sm transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Us Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-red-600 text-white p-2 rounded-l-lg">
          <div className="writing-mode-vertical text-sm font-medium tracking-wider">
            CONTACT US
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-center">
              <h2 className="text-xl font-serif tracking-wider">HUNTSMAN</h2>
              <p className="text-xs text-muted-foreground tracking-wider">ESTABLISHED 1849</p>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-muted rounded-sm transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="p-4 space-y-6">
            <div className="space-y-4">
              <a href="#" className="block text-lg font-serif hover:text-primary transition-colors">
                Ready-to-Wear
              </a>
              <a href="#" className="block text-lg font-serif hover:text-primary transition-colors">
                Bespoke
              </a>
              <a href="#" className="block text-lg font-serif hover:text-primary transition-colors">
                The Company
              </a>
              <a href="#" className="block text-lg font-serif hover:text-primary transition-colors">
                Locations
              </a>
              <a href="#" className="block text-lg font-serif hover:text-primary transition-colors">
                Journal
              </a>
            </div>
            
            <div className="pt-6 border-t space-y-4">
              <div>
                <h3 className="font-serif mb-2">Contact us</h3>
                <p className="text-sm text-muted-foreground">+1 646 590 2595</p>
                <p className="text-sm text-muted-foreground">usa@huntsmansavilerow.com</p>
              </div>
              <Button variant="outline" className="w-full">
                Book an appointment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};