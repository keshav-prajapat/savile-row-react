import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeritageSection = () => {
  const sections = [
    {
      title: "HERITAGE",
      link: "/company",
      buttonText: "DISCOVER"
    },
    {
      title: "WORLD OF HUNTSMAN", 
      link: "/locations",
      buttonText: "ENTER"
    },
    {
      title: "BESPOKE LIFESTYLE",
      link: "/bespoke", 
      buttonText: "DISCOVER"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="text-center">
              <h2 className="text-3xl font-serif mb-8 tracking-wider">
                {section.title}
              </h2>
              <Link to={section.link}>
                <Button 
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  {section.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};