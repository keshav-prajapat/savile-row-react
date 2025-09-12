import { Button } from "@/components/ui/button";

export const JournalSection = () => {
  const articles = [
    {
      title: "Introducing The Autumn-Winter 2025 Collection",
      subtitle: "Iconic London: Campbell Carey's Inspiration for the Autumn–Winter Collection.",
      image: "https://www.huntsmansavilerow.com/cdn/shop/articles/Shot6_2075_copy_1_0da92230-b877-4865-9d28-4e1b8f3d58bd.jpg?v=1756828143&width=1500",
      link: "/blogs/journal/introducing-the-autumn-winter-2025-collection"
    },
    {
      title: "Huntsman at Royal Ascot 2025",
      subtitle: "An afternoon of celebration in Car Park One.",
      image: "https://www.huntsmansavilerow.com/cdn/shop/articles/40-ROYAL_ASCOT_2025_BY_GEORGE_ON_A_BOAT-5478_copy_f14d289b-e5d0-4d21-a31b-0f0100389a47.jpg?v=1751877229&width=1500",
      link: "/blogs/journal/huntsman-at-royal-ascot-2025"
    },
    {
      title: "Huntsman x Fashion Trust Arabia: An Evening of Cocktails, Craft & Creative Alliance",
      subtitle: "In a refined evening that brought together global design voices and champions of craftsmanship, Huntsman reaffirmed its ongoing partnership with Fashion Trust Arabia (FTA) during an elegant cocktail reception hosted in London.",
      image: "https://www.huntsmansavilerow.com/cdn/shop/articles/Fai_Khadra_Tania_Fares_Roksanda_Ilincic_and_Pierre_LaGrange200_8cca9c5e-7cb5-4b29-9978-c9a5a17083c6.jpg?v=1747823730&width=1500",
      link: "/blogs/journal/huntsman-x-fashion-trust-arabia-an-evening-of-cocktails-craft-creative-alliance"
    },
    {
      title: "Huntsman at Anglesey Abbey: 'Tailoring An Image' with The National Trust",
      subtitle: "This summer, Huntsman is delighted to partner with the National Trust for a unique exhibition at Anglesey Abbey, Cambridgeshire: 'Tailoring An Image'.",
      image: "https://www.huntsmansavilerow.com/cdn/shop/articles/Close_up_of_Lord_Fairhaven_s_red_leather_cropped_riding_breeches_made_by_H._Huntsman_Sons_National_Trust_Pete_Huggins_2f7ae8c0-53ff-46b4-9855-4cc400dea87a.jpg?v=1751889272&width=1500",
      link: "/blogs/journal/huntsman-at-anglesey-abbey-tailoring-an-image-with-the-national-trust"
    },
    {
      title: "A Legacy Recut: The Huntsman Suit of André Leon Talley Finds New Life",
      subtitle: "At Huntsman, bespoke is a legacy. Fashion icon André Leon Talley's Huntsman suit, revived by Henry Howell and tailored anew in New York, embodies this ethos. More than cloth, it's a tribute — a living garment that honours Talley's unmatched style and ensures his sartorial story continues with elegance and reverence.",
      image: "https://www.huntsmansavilerow.com/cdn/shop/articles/2.4.25_ALT-53_c93460cb-a220-44e0-bf39-91ff5a62840e.jpg?v=1751616340&width=1500",
      link: "/blogs/journal/a-legacy-recut-the-huntsman-suit-of-andre-leon-talley-finds-new-life"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 tracking-wider">
          The Huntsman Journal
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-serif leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.subtitle}
                </p>
                <a 
                  href={article.link}
                  className="huntsman-link text-sm inline-block"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/blogs/journal"
            className="huntsman-button border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            More Articles
          </a>
        </div>
      </div>
    </section>
  );
};