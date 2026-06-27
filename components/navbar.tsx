"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-gray-900">
          Custom Dev Co
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            About
          </Link>
        </div>
        <Button asChild size="sm">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
}
