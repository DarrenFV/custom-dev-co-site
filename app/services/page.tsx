import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Website Development",
      description:
        "Custom websites built to showcase your business and convert visitors into customers.",
      features: [
        "Responsive — works on all devices",
        "Fast loading with modern tech stack",
        "Easy content management system",
        "SEO-optimised structure",
      ],
      accent: "bg-violet-50 text-violet-600",
    },
    {
      name: "Web Applications",
      description:
        "Powerful custom apps tailored to your specific workflows — booking systems, portals, dashboards, and more.",
      features: [
        "Custom business logic and workflows",
        "Database design and integration",
        "User authentication and security",
        "Real-time data and analytics",
      ],
      accent: "bg-blue-50 text-blue-600",
    },
    {
      name: "E-Commerce",
      description:
        "Complete online selling solutions. Start or scale your shop with a custom, secure storefront.",
      features: [
        "Product catalogue and inventory",
        "Secure payment processing",
        "Shopping cart and checkout",
        "Order management dashboard",
      ],
      accent: "bg-emerald-50 text-emerald-600",
    },
    {
      name: "Maintenance & Support",
      description:
        "Ongoing care for your website. Updates, security, performance, and peace of mind.",
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Content updates and changes",
        "Technical support when you need it",
      ],
      accent: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0A0B] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">Services</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
            What we build.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Comprehensive web development for local businesses — from your first website to
            complex custom applications.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Not sure what you need?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Let's have a quick chat. We'll help you figure out the right solution for your business.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
