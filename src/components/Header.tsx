import { useState } from 'react';
import { Menu, Search, User, ShoppingBag, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useScrollTrigger } from '@/hooks/useParallax';
import { useIsMobile } from '@/hooks/use-mobile';
import { AuthModal } from './auth/AuthModal';

const navigationItems = [
  {
    title: "Ready-to-Wear",
    href: "/ready-to-wear",
    submenu: [
      { title: "Jackets", href: "/jackets" },
      { title: "Suiting", href: "/suiting" },
      { title: "Knitwear", href: "/knitwear" },
      { title: "Outerwear", href: "/outerwear" }
    ]
  },
  {
    title: "Bespoke",
    href: "/bespoke",
    submenu: [
      { title: "Men's Bespoke", href: "/bespoke?category=mens" },
      { title: "Women's Bespoke", href: "/bespoke?category=womens" }
    ]
  },
  {
    title: "Collections",
    href: "#",
    submenu: [
      { title: "Winter Collection", href: "/collections/winter" },
      { title: "Summer Collection", href: "/collections/summer" },
      { title: "Formal Wear", href: "/collections/formal" },
      { title: "Casual Wear", href: "/collections/casual" }
    ]
  },
  {
    title: "The Company",
    href: "/company"
  },
  {
    title: "Locations",
    href: "/locations"
  },
  {
    title: "Journal",
    href: "/journal"
  },
  {
    title: "Care Instructions",
    href: "/care-instructions"
  }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const { isTriggered } = useScrollTrigger(50);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleMobileSearch = () => {
    if (mobileSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(mobileSearchQuery)}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTriggered 
          ? 'bg-white border-b shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isTriggered ? 'h-14' : 'h-16'
          }`}>
            {/* Left: Navigation and Search */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center space-x-2 p-2 hover:bg-muted rounded-sm transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
                <span className="text-sm font-medium">Menu</span>
              </button>
              {!isMobile && (
                <button 
                  className="p-2 hover:bg-muted rounded-sm transition-colors"
                  onClick={() => navigate('/search')}
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <Link to="/" className="text-center">
                <h1 className="text-2xl font-serif tracking-wider">HUNTSMAN</h1>
                <p className="text-xs text-muted-foreground tracking-wider">ESTABLISHED 1849</p>
              </Link>
            </div>

            {/* Right: Auth, Contact, Currency, Cart */}
            <div className="flex items-center space-x-2">
              <button 
                className="p-2 hover:bg-muted rounded-sm transition-colors"
                onClick={() => setIsAuthOpen(true)}
              >
                <User className="h-5 w-5" />
              </button>
              <Link 
                to="/contact"
                className="hidden md:block px-3 py-1 text-sm hover:bg-muted rounded-sm transition-colors"
              >
                CONTACT
              </Link>
              <select className="text-sm bg-transparent border-none focus:outline-none cursor-pointer">
                <option>USD $</option>
                <option>GBP £</option>
                <option>EUR €</option>
              </select>
              <button className="p-2 hover:bg-muted rounded-sm transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          {isMobile && (
            <div className="pb-3">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <Input
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    placeholder="Search products, collections..."
                    className="w-full pr-10"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleMobileSearch();
                      }
                    }}
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-sm transition-colors"
                    onClick={handleMobileSearch}
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Us Vertical Sidebar */}
      <Link to="/contact" className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-red-600 text-white px-3 py-6 rounded-l-lg hover:bg-red-700 transition-colors">
          <div className="flex flex-col items-center">
            {['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'U', 'S'].map((letter, index) => (
              <span key={index} className="text-sm font-medium tracking-wider leading-tight">
                {letter === ' ' ? '•' : letter}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className={`h-full ${isMobile ? 'w-full' : 'w-1/2'} bg-background border-r shadow-xl`}>
            <div className="flex justify-between items-center p-4 border-b">
              <div className="text-center">
                <h2 className="text-xl font-serif tracking-wider">HUNTSMAN</h2>
                <p className="text-xs text-muted-foreground tracking-wider">ESTABLISHED 1849</p>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 p-2 hover:bg-muted rounded-sm transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="text-sm font-medium">Close</span>
              </button>
            </div>
            
            <nav className="p-6 space-y-2 overflow-y-auto h-full">
              {navigationItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setExpandedSubmenu(expandedSubmenu === item.title ? null : item.title)}
                        className="flex items-center justify-between w-full text-left text-lg font-serif hover:text-primary transition-colors py-2"
                      >
                        {item.title}
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          expandedSubmenu === item.title ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {expandedSubmenu === item.title && (
                        <div className="ml-4 space-y-2 border-l border-border pl-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-base hover:text-primary transition-colors py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-lg font-serif hover:text-primary transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t space-y-4 mt-8">
                <div>
                  <h3 className="font-serif mb-2">Contact us</h3>
                  <p className="text-sm text-muted-foreground">+1 646 590 2595</p>
                  <p className="text-sm text-muted-foreground">usa@huntsmansavilerow.com</p>
                </div>
                <Link to="/book-appointment" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Book an appointment
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
          
          {/* Backdrop for desktop */}
          {!isMobile && (
            <div 
              className="absolute inset-0 bg-black/50 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};