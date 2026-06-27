import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <p className="font-bold text-lg tracking-tight mb-3">Custom Dev Co</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom web and app development for local businesses. Based in Westerham, UK.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Company</p>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
                <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</Link>
                <Link href="/demo" className="text-sm text-gray-400 hover:text-white transition-colors">Live Demo</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Services</p>
              <div className="flex flex-col gap-3">
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Web Development</Link>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Web Applications</Link>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">E-Commerce</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@customdev.co" className="text-sm text-gray-400 hover:text-white transition-colors">
                  hello@customdev.co
                </a>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Get a quote</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Custom Dev Co. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Westerham, UK</p>
        </div>
      </div>
    </footer>
  );
}
