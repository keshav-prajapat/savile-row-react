export const HeritageSection = () => {
  const sections = [
    {
      title: "HERITAGE",
      link: "/pages/the-company",
      buttonText: "DISCOVER"
    },
    {
      title: "WORLD OF HUNTSMAN", 
      link: "/pages/world-of-huntsman",
      buttonText: "ENTER"
    },
    {
      title: "BESPOKE LIFESTYLE",
      link: "/pages/huntsman-bespoke-lifestyle", 
      buttonText: "DISCOVER"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="text-center">
              <h2 className="text-3xl font-serif mb-8 tracking-wider">
                {section.title}
              </h2>
              <a 
                href={section.link}
                className="huntsman-button inline-block border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                {section.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};