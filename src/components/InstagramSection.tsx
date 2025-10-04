import { Instagram } from "lucide-react";
import suitImage from "@/assets/suit-navy.jpg";
import blazerImage from "@/assets/blazer-classic.jpg";
import overcoatImage from "@/assets/overcoat-navy.jpg";
import tieImage from "@/assets/tie-navy-paisley.jpg";
import jacketImage from "@/assets/sports-jacket-grey.jpg";
import eveningImage from "@/assets/dinner-jacket.jpg";

const instagramPosts = [
  {
    image: suitImage,
    url: "https://www.instagram.com/huntsmansavilerow/",
    alt: "Huntsman Navy Suit"
  },
  {
    image: blazerImage,
    url: "https://www.instagram.com/huntsmansavilerow/",
    alt: "Classic Blazer"
  },
  {
    image: overcoatImage,
    url: "https://www.instagram.com/huntsmansavilerow/",
    alt: "Navy Overcoat"
  },
  {
    image: tieImage,
    url: "https://www.instagram.com/huntsmansavilerow/",
    alt: "Navy Paisley Tie"
  },
  {
    image: jacketImage,
    url: "https://www.instagram.com/huntsmansavilerow/",
    alt: "Grey Sports Jacket"
  },
  {
    image: eveningImage,
    url: "https://www.instagram.com/huntsmansavilerow/",
    alt: "Dinner Jacket"
  }
];

export const InstagramSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <a 
            href="https://www.instagram.com/huntsmansavilerow/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <Instagram className="w-6 h-6 text-foreground" />
            <h2 className="text-2xl font-serif tracking-[0.3em] uppercase text-foreground">
              @HUNTSMANSAVILEROW
            </h2>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-background" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/huntsmansavilerow/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-foreground text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            FOLLOW US
          </a>
        </div>
      </div>
    </section>
  );
};
