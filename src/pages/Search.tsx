import { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

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
  "Dress Shirts",
  "Womens Bespoke",
  "Mens Suits",
  "Winter Collection",
  "Summer Suits"
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  useEffect(() => {
    // Load last search from localStorage
    const saved = localStorage.getItem('lastSearch');
    if (saved) {
      setLastSearch(saved);
    }
  }, []);

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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <ScrollAnimationWrapper animationType="fade-up">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-serif mb-8 text-center tracking-wider">SEARCH</h1>
              
              {/* Search Input */}
              <div className="relative mb-8">
                <div className="flex items-center border border-border rounded-lg p-4 bg-card">
                  <SearchIcon className="h-6 w-6 text-muted-foreground mr-4" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products, collections..."
                    className="border-0 focus-visible:ring-0 text-lg bg-transparent"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(searchQuery);
                      }
                    }}
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSearchQuery("")}
                      className="ml-2"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Recent Search */}
              {lastSearch && !searchQuery && (
                <ScrollAnimationWrapper animationType="fade-up" delay={200}>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 tracking-wider">RECENT SEARCH</h3>
                    <Button
                      variant="outline"
                      className="justify-start p-4 h-auto"
                      onClick={() => setSearchQuery(lastSearch)}
                    >
                      <SearchIcon className="h-4 w-4 mr-3" />
                      {lastSearch}
                    </Button>
                  </div>
                </ScrollAnimationWrapper>
              )}
              
              {/* Suggestions */}
              <ScrollAnimationWrapper animationType="fade-up" delay={300}>
                <div>
                  <h3 className="text-lg font-medium mb-4 tracking-wider">
                    {searchQuery ? "SUGGESTIONS" : "POPULAR SEARCHES"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(searchQuery ? filteredSuggestions : searchSuggestions).map((suggestion, index) => (
                      <ScrollAnimationWrapper key={index} animationType="fade-up" delay={index * 100}>
                        <Button
                          variant="outline"
                          className="justify-start p-4 h-auto w-full"
                          onClick={() => handleSearch(suggestion)}
                        >
                          <SearchIcon className="h-4 w-4 mr-3" />
                          {suggestion}
                        </Button>
                      </ScrollAnimationWrapper>
                    ))}
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;