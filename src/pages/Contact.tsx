import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "../assets/contact-hero.png";   // right-side big image
import sideImage from "../assets/contact-side.png";   // left-side small image

const faqs = [
  {
    question: "How can I get in touch with HUNTSMAN for collaborations?",
    answer:
      "We're always open to new creative ventures. For partnership or collaboration inquiries, please fill out our Collaboration Inquiry Form on the Contact Us page, and our team will review and reach out if there's a fit.",
  },
  {
    question: "Where can I find information on HUNTSMAN campaigns and releases?",
    answer:
      "You can find the latest information in our Journal and Campaigns section. Stay tuned for updates.",
  },
  {
    question: "How can I reach your customer support team?",
    answer:
      "Please email support@huntsman.com and our customer service team will get back to you.",
  },
  {
    question: "How to purchase HUNTSMAN products?",
    answer:
      "Our collections are available in our flagship stores, selected boutiques, and online through our Ready-to-Wear section.",
  },
];

const Contact: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="relative font-sans text-[#111] px-8 py-16 flex justify-center">
          {/* Right hero image */}
          <img
            src={heroImage}
            alt="Contact Hero"
            className="absolute right-0 top-0 h-[95vh] object-contain -z-10"
          />

          {/* Left side image */}
          <img
            src={sideImage}
            alt="Side Models"
            className="absolute left-0 bottom-0 h-[250px] object-cover -z-10"
          />

          {/* Contact Content */}
          <div className="max-w-[900px] z-10">
            <h1 className="text-[90px] font-black tracking-[-2px]">CONTACT US</h1>
            <p className="text-lg mb-12 text-gray-600">
              For any inquiries, collaborations, or just to say hello, we'd love to hear from you!
            </p>

            {/* Info Section */}
            <div className="mb-14">
              <div className="mb-6">
                <h2 className="text-2xl mb-2 font-semibold">Press</h2>
                <p>SAMSUNG C&T CORPORATION (MILAN OFFICE)</p>
                <p>
                  Centro Direzionale Milanofiori, Strada 2, Palazzo Q1, 20057 Assago Milano, Italy
                </p>
                <p>Email: press@huntsman.com</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl mb-2 font-semibold">Sales</h2>
                <p>HUNTSMAN SHOWROOM</p>
                <p>Email: sales@huntsman.com</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl mb-2 font-semibold">Head Office</h2>
                <p>HUNTSMAN CORPORATION</p>
                <p>2806, Nambusunhwan-ro, Gangnam-gu, Seoul, Republic of Korea</p>
                <p>Email: office@huntsman.com</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-10">
              <h2 className="text-2xl mb-6 font-semibold">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg bg-white shadow-sm transition-all ${
                      openIndex === index ? "border-gray-400" : "border-gray-200"
                    }`}
                  >
                    <div
                      className="flex justify-between p-4 font-medium cursor-pointer bg-gray-100"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      <span>{openIndex === index ? "−" : "+"}</span>
                    </div>
                    {openIndex === index && (
                      <div className="p-4 text-sm text-gray-700 border-t">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;