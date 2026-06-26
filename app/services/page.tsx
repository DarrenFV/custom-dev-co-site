import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Website Development",
      description:
        "Custom websites built to showcase your business. Perfect for salons, restaurants, retail, and service-based businesses.",
      features: [
        "Responsive design that works on all devices",
        "Modern, fast-loading technology stack",
        "Easy-to-use content management system",
        "SEO-optimized structure",
      ],
    },
    {
      name: "Web Applications",
      description:
        "Powerful custom applications tailored to your specific business needs. Streamline operations and improve efficiency.",
      features: [
        "Custom business logic and workflows",
        "Database design and integration",
        "User authentication and security",
        "Real-time data and analytics",
      ],
    },
    {
      name: "E-Commerce Solutions",
      description:
        "Complete online shopping solutions. Start selling online with a custom-built, secure e-commerce platform.",
      features: [
        "Product catalog and inventory management",
        "Secure payment processing",
        "Shopping cart and checkout",
        "Order management dashboard",
      ],
    },
    {
      name: "Maintenance & Support",
      description:
        "Ongoing support to keep your website running smoothly. Updates, security, performance optimization, and more.",
      features: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Content updates and modifications",
        "Technical support and troubleshooting",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            We offer comprehensive web development services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.name} className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's discuss your project</h2>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
