import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is bespoke tailoring?",
      answer: "Bespoke tailoring is the art of creating a garment entirely from scratch, cut and made specifically for one individual. Unlike made-to-measure, bespoke involves creating a unique pattern based on your measurements and multiple fittings to achieve the perfect fit."
    },
    {
      question: "How long does the bespoke process take?",
      answer: "The bespoke process typically takes 12-16 weeks from initial consultation to final delivery. This includes multiple fittings (usually 3-4) to ensure the perfect fit and finish."
    },
    {
      question: "What is the difference between bespoke and made-to-measure?",
      answer: "Bespoke involves creating a completely unique pattern from scratch based on your measurements, while made-to-measure adjusts an existing pattern to your measurements. Bespoke offers unlimited customization and multiple fittings, while made-to-measure has limited customization options."
    },
    {
      question: "How much does a bespoke suit cost?",
      answer: "Our bespoke suits start from £4,500. The final price depends on fabric choice, construction details, and any special requirements. We offer a consultation to discuss your needs and provide accurate pricing."
    },
    {
      question: "Can I choose my own fabric?",
      answer: "Yes, we offer an extensive selection of fabrics from the world's finest mills including Holland & Sherry, Loro Piana, and Ermenegildo Zegna. You can also bring your own fabric if you prefer."
    },
    {
      question: "Do you offer alterations for existing garments?",
      answer: "Yes, we provide alteration services for both our own garments and pieces from other tailors. Our skilled craftsmen can adjust fit, replace linings, and make other modifications as needed."
    },
    {
      question: "What should I wear to my fitting appointment?",
      answer: "Please wear well-fitted undergarments and bring the shoes you plan to wear with your suit. For shirt fittings, please wear a thin undershirt. Avoid bulky clothing that might affect the fitting process."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by destination. For bespoke garments, we recommend at least one in-person fitting, though we can accommodate international clients with limited visits."
    },
    {
      question: "What is your return policy?",
      answer: "Due to the bespoke nature of our garments, returns are not typically accepted as each piece is made specifically for the individual client. However, we guarantee the fit and will make adjustments as needed during the fitting process."
    },
    {
      question: "How should I care for my Huntsman garment?",
      answer: "We recommend professional dry cleaning for suits and jackets. Store garments on proper hangers in a breathable garment bag. Avoid over-cleaning and allow garments to rest between wears. We provide detailed care instructions with each garment."
    },
    {
      question: "Do you offer trunk shows?",
      answer: "Yes, our master tailors regularly travel to major cities across the United States and internationally for trunk shows. These events allow clients to experience our bespoke service without traveling to London or New York."
    },
    {
      question: "Can I visit your workshop?",
      answer: "We occasionally offer workshop tours by appointment. These visits provide insight into our traditional tailoring methods and craftsmanship. Please contact us to inquire about availability."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-serif mb-4">Frequently Asked Questions</h1>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about Huntsman and our bespoke tailoring services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-serif text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+442077347441" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Call London: +44 20 7734 7441
                </a>
                <a 
                  href="tel:+16465902595" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Call New York: +1 646 590 2595
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;