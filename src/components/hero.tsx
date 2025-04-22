"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import { ShieldCheck, FileText, AlertTriangle, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20" />
        </div>
      </div>
      
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Detect Plagiarism</span> 
              <span className="block">& AI-Generated Content</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Piracy Fighter helps you protect your intellectual property and ensure content authenticity with advanced detection tools for plagiarism and AI-generated content.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-lg py-6 px-8" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-blue-200 hover:border-blue-300 text-lg py-6 px-8" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <ShieldCheck className="h-7 w-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Plagiarism Detection</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium">AI Content Detection</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <FileText className="h-7 w-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Detailed Reports</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <AlertTriangle className="h-7 w-7 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Real-time Alerts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
} 