import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchSuggestions = [
  "Bespoke Suits",
  "Ready-to-Wear Jackets",
  "Knitwear Collection",
  "Outerwear",
  "Formal Wear",
  "Wedding Suits",
  "Business Attire",
  "Evening Wear",
  "Casual Blazers",
  "Dress Shirts"
];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Load last search from localStorage
      const saved = localStorage.getItem('lastSearch');
      if (saved) {
        setLastSearch(saved);
        setSearchQuery(saved);
      }
      // Auto-focus would happen naturally with input
    }
  }, [isOpen]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    localStorage.setItem('lastSearch', query);
    setLastSearch(query);
    // Here you would typically call your search API
    console.log("Searching for:", query);
  };

  const filteredSuggestions = searchSuggestions.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <div className="flex items-center border-b p-4">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, collections..."
            className="border-0 focus-visible:ring-0 text-lg"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(searchQuery);
              }
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="ml-2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-4 max-h-96 overflow-y-auto">
          {lastSearch && !searchQuery && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Recent Search</h3>
              <Button
                variant="ghost"
                className="justify-start p-2 h-auto"
                onClick={() => setSearchQuery(lastSearch)}
              >
                <Search className="h-4 w-4 mr-2" />
                {lastSearch}
              </Button>
            </div>
          )}
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              {searchQuery ? "Suggestions" : "Popular Searches"}
            </h3>
            <div className="space-y-1">
              {(searchQuery ? filteredSuggestions : searchSuggestions).map((suggestion, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start p-2 h-auto w-full"
                  onClick={() => handleSearch(suggestion)}
                >
                  <Search className="h-4 w-4 mr-2" />
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};