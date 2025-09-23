import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import contactHeroImage from "@/assets/contact-hero.png";
import contactSideImage from "@/assets/contact-side.png";

const faqs = [
  {
    question: "How do I book a bespoke consultation?",
    answer: "You can book a consultation by calling our showroom, using our online booking system, or visiting us in person. We recommend booking in advance as consultations are typically scheduled 2-3 weeks ahead."
  },
  {
    question: "What is the typical timeline for a bespoke suit?",
    answer: "A bespoke suit typically takes 12-16 weeks from initial consultation to completion. This includes multiple fittings to ensure the perfect fit and finish."
  },
  {
    question: "Do you offer alterations on ready-to-wear pieces?",
    answer: "Yes, we offer professional alterations on all our ready-to-wear pieces. Our skilled tailors can adjust the fit to ensure your garment fits perfectly."
  },
  {
    question: "What is your return policy?",
    answer: "Ready-to-wear items can be returned within 30 days of purchase in original condition. Bespoke items are final sale due to their custom nature, but we guarantee satisfaction through our fitting process."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. International shipping costs and delivery times vary by location. Please contact us for specific shipping information to your country."
  }
];

const Contact: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <ScrollAnimationWrapper animationType="fade-up">
          <ParallaxImage
            src={contactHeroImage}
            alt="Contact Huntsman"
            className="h-[50vh]"
            parallaxOffset={0.3}
          >
            <div className="bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-serif mb-4 tracking-wider">CONTACT US</h1>
                <p className="text-xl">Get in touch with our team</p>
              </div>
            </div>
          </ParallaxImage>
        </ScrollAnimationWrapper>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimationWrapper animationType="slide-left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-serif mb-4 tracking-wider">PRESS</h2>
                    <p className="text-muted-foreground mb-2">For media inquiries</p>
                    <p className="font-medium">press@huntsmansavilerow.com</p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-serif mb-4 tracking-wider">SALES</h2>
                    <p className="text-muted-foreground mb-2">For orders and consultations</p>
                    <p className="font-medium">+1 646 590 2595</p>
                    <p className="font-medium">usa@huntsmansavilerow.com</p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-serif mb-4 tracking-wider">HEAD OFFICE</h2>
                    <p className="text-muted-foreground mb-2">11 Savile Row</p>
                    <p className="text-muted-foreground mb-2">London W1S 3PG</p>
                    <p className="text-muted-foreground mb-2">United Kingdom</p>
                    <p className="font-medium">+44 20 7734 7441</p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animationType="slide-right">
                <ParallaxImage
                  src={contactSideImage}
                  alt="Huntsman Showroom"
                  className="h-[400px] rounded-lg"
                  parallaxOffset={0.1}
                />
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollAnimationWrapper animationType="fade-up">
              <h2 className="text-4xl font-serif mb-12 text-center tracking-wider">FREQUENTLY ASKED QUESTIONS</h2>
            </ScrollAnimationWrapper>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollAnimationWrapper key={index} animationType="fade-up" delay={index * 100}>
                  <div className="border border-border rounded-lg bg-card">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    >
                      <h3 className="text-lg font-serif">{faq.question}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;