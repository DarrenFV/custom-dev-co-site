"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50">
      {/* Glass panel */}
      <div className="relative bg-gray-950/60 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_1px_50px_rgba(0,0,0,0.4)]">
        {/* Top specular highlight — the key liquid-glass cue */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
        {/* Bottom inner shimmer */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-base tracking-tight text-white select-none"
          >
            Custom Dev Co
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-sm transition-all duration-200",
                  pathname === href
                    ? "text-white bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-white/55 hover:text-white hover:bg-white/[0.07]"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/90 transition-colors duration-200 select-none"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
