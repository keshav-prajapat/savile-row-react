import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Journal = () => {
  const articles = [
    {
      title: "The Art of Savile Row Tailoring",
      excerpt: "Discover the centuries-old traditions that make Savile Row the world's premier destination for bespoke tailoring.",
      image: "/placeholder.svg",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Spring/Summer 2024 Collection",
      excerpt: "Introducing our latest collection featuring lighter fabrics and contemporary cuts for the modern gentleman.",
      image: "/placeholder.svg",
      date: "March 10, 2024",
      readTime: "3 min read"
    },
    {
      title: "Behind the Scenes: Master Tailors at Work",
      excerpt: "Step inside our workshop and witness the meticulous craftsmanship that goes into every Huntsman garment.",
      image: "/placeholder.svg",
      date: "March 5, 2024",
      readTime: "7 min read"
    },
    {
      title: "The Perfect Business Suit",
      excerpt: "A guide to choosing the right style, fabric, and fit for your professional wardrobe.",
      image: "/placeholder.svg",
      date: "February 28, 2024",
      readTime: "4 min read"
    },
    {
      title: "Caring for Your Bespoke Garments",
      excerpt: "Expert advice on maintaining your investment pieces to ensure they last for decades.",
      image: "/placeholder.svg",
      date: "February 20, 2024",
      readTime: "6 min read"
    },
    {
      title: "History of Huntsman",
      excerpt: "From humble beginnings in 1849 to becoming a cornerstone of Savile Row.",
      image: "/placeholder.svg",
      date: "February 15, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-serif mb-4">The Huntsman Journal</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Insights, stories, and expertise from the heart of Savile Row
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-serif group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="text-primary text-sm font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-2xl font-serif mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for the latest insights from Savile Row
                </p>
                <div className="flex max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;