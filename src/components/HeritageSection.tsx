import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { Link } from "react-router-dom";

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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animationType="fade-up"
                delay={index * 200}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-serif mb-8 tracking-wider">
                    {section.title}
                  </h2>
                  <Link 
                    to={section.link}
                    className="huntsman-button inline-block border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    {section.buttonText}
                  </Link>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};