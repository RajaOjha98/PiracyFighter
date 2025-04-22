"use client";

import { Container } from "./ui/container";
import Link from "next/link";
import { ShieldCheck, Twitter, Linkedin, Github, Facebook, Mail, MessageSquare, Phone } from "lucide-react";

const navigation = {
  product: [
    { name: "Plagiarism Detection", href: "#" },
    { name: "AI Content Detection", href: "#" },
    { name: "Content Verification", href: "#" },
    { name: "API Integration", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Blog", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Facebook", href: "#", icon: Facebook },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <Container>
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-12">
            {/* Logo and company info */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2 mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-500" />
                <span className="font-bold text-xl text-white">Piracy Fighter</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
                Professional plagiarism and AI-generated content detection for 
                businesses, educators, and content creators. Protect your intellectual 
                property and ensure content authenticity.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>support@piracyfighter.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MessageSquare className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Live chat available 24/7</span>
                </div>
              </div>
              
              {/* Social icons */}
              <div className="flex space-x-5 mt-8">
                {navigation.social.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Navigation sections */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Product */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Product</h3>
                <ul className="space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Resources</h3>
                <ul className="space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Legal</h3>
                <ul className="space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer section with divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Piracy Fighter. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-x-8 gap-y-2">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-blue-500 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-blue-500 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
} 