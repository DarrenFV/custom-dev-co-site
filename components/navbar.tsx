"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Custom Dev Co
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Button render={<Link href="/contact" />}>Get Started</Button>
        </div>
        <div className="md:hidden">
          <Button render={<Link href="/contact" />} variant="outline" size="sm">Contact</Button>
        </div>
      </div>
    </nav>
  );
}
