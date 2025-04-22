"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <div className="py-24">
      <Container>
        <motion.div 
          className="relative isolate overflow-hidden rounded-3xl bg-blue-600 px-6 py-24 shadow-2xl sm:px-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Protect Your Intellectual Property?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" className="bg-white text-blue-600 hover:bg-white/90 font-semibold shadow-lg text-lg py-6 px-8" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Link href="#pricing" className="text-sm font-semibold leading-6 text-white hover:text-white/90 flex items-center">
                View pricing <span aria-hidden="true" className="ml-1 text-lg">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
} 