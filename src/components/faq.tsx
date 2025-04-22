"use client";

import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How accurate is Piracy Fighter at detecting plagiarism?",
    answer: "Piracy Fighter boasts a 98.7% accuracy rate in detecting plagiarism. Our advanced algorithms compare submitted content against billions of web pages, academic journals, and published works to identify matches with high precision."
  },
  {
    question: "Can Piracy Fighter detect AI-generated content?",
    answer: "Yes, Piracy Fighter uses state-of-the-art machine learning models specifically trained to detect patterns common in AI-generated text. It can identify content created by leading AI tools like ChatGPT, Claude, Bard, and others with a high degree of accuracy."
  },
  {
    question: "What file formats does Piracy Fighter support?",
    answer: "Piracy Fighter supports all major document formats including DOCX, PDF, TXT, RTF, HTML, and more. You can also directly paste text into our interface for quick scanning."
  },
  {
    question: "How does the pricing work? Are there any hidden fees?",
    answer: "Our pricing is transparent with no hidden fees. Each plan includes a specific number of document scans per month. You can upgrade, downgrade, or cancel your subscription at any time. All plans start with a 14-day free trial."
  },
  {
    question: "Is my content secure when I upload it to Piracy Fighter?",
    answer: "Absolutely. We take data security seriously. All uploads are encrypted both in transit and at rest. We don't store your full documents after processing unless you explicitly opt to save them. Our privacy policy ensures that your content remains yours."
  },
  {
    question: "Can I integrate Piracy Fighter with other systems?",
    answer: "Yes, our Pro and Enterprise plans include API access that allows for seamless integration with learning management systems, content management systems, and custom workflows. Our documentation provides detailed instructions, and our support team is available to assist with integrations."
  },
];

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 dark:border-gray-800 last:border-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="flex w-full items-center justify-between py-5 px-6 text-left text-base md:text-lg font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-blue-600" />
          ) : (
            <Plus className="h-5 w-5 text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 px-6 text-muted-foreground">
          <p>{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
}

export function FAQ() {
  return (
    <div id="faq" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="mx-auto divide-y divide-gray-200 dark:divide-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 