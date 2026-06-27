"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-base tracking-tight text-gray-900">
          Custom Dev Co
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm transition-colors",
                pathname === href
                  ? "text-gray-900 bg-gray-100 font-medium"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
}
