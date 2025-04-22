"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: "$29",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 50 documents per month",
      "Plagiarism detection",
      "Basic AI detection",
      "Email reports",
      "14-day history",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: "$79",
    description: "Ideal for businesses and educators",
    features: [
      "Up to 500 documents per month",
      "Advanced plagiarism detection",
      "Premium AI detection",
      "Detailed reports with source matching",
      "60-day history",
      "API access",
      "Priority support",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited documents",
      "Enterprise-grade API",
      "Custom integrations",
      "Dedicated account manager",
      "Unlimited history",
      "SSO authentication",
      "Custom reporting",
      "24/7 priority support",
    ],
    mostPopular: false,
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-6xl md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 ${
                tier.mostPopular ? 'ring-2 ring-blue-600' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-semibold leading-8" id={tier.id}>
                  {tier.name}
                </h3>
                {tier.mostPopular && (
                  <p className="mt-1 text-sm font-semibold text-blue-600">Most popular</p>
                )}
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`mt-8 ${tier.mostPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:border-gray-700'}`}
                size="lg"
                asChild
              >
                <Link href="/signup">
                  {tier.price === "Custom" ? "Contact Sales" : "Start free trial"}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
} 