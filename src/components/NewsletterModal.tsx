import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Show modal after 3 seconds if not shown before
    const timer = setTimeout(() => {
      const hasShown = localStorage.getItem('newsletterModalShown');
      if (!hasShown) {
        setIsOpen(true);
        localStorage.setItem('newsletterModalShown', 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you!",
        description: "You've been added to our mailing list.",
      });
      setEmail('');
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="relative bg-background max-w-md w-full p-8 rounded-sm border shadow-lg">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-sm transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="mb-6">
          <img 
            src="https://www.huntsmansavilerow.com/cdn/shop/files/HUNTSMAN_SS24_Shot_4_315_copy_d2015a29-9145-41fa-ab96-b923b7022f10.jpg?v=1717158395&width=900"
            alt="Join Our Mailing List"
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-2xl font-serif mb-4">Join Our Mailing List</h2>
          <p className="text-muted-foreground mb-6">
            Stay up to date with our new arrivals, collection launches and all of the news from the world of Huntsman.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            Sign Up
          </Button>
        </form>
        
        <div className="mt-6 pt-6 border-t space-y-4 text-sm">
          <div>
            <h3 className="font-serif mb-2">Contact us</h3>
            <p className="text-muted-foreground">+1 646 590 2595</p>
            <p className="text-muted-foreground">usa@huntsmansavilerow.com</p>
          </div>
          <Button variant="outline" size="sm">
            Book an appointment
          </Button>
        </div>
      </div>
    </div>
  );
};