"use client";

import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Upload, Search, AlertCircle, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Upload Your Document",
    description: "Simply upload your text, document, or file through our secure interface. We support all major file formats including DOC, DOCX, PDF, TXT, and more.",
    icon: Upload,
  },
  {
    title: "Deep Scanning Process",
    description: "Our advanced algorithms analyze your content against billions of sources and detect AI patterns with high accuracy and precision.",
    icon: Search,
  },
  {
    title: "Review Detailed Report",
    description: "Receive a comprehensive report highlighting potential plagiarism and AI-generated content with similarity percentages and source references.",
    icon: AlertCircle,
  },
  {
    title: "Get Content Verification",
    description: "Download or share a verification certificate for your original content, or take action on flagged sections as needed.",
    icon: FileCheck,
  },
];

export function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            How Piracy Fighter Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple yet powerful process helps you verify content originality in just a few steps.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <span className="absolute top-0 right-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 