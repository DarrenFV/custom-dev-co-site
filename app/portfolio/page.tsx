export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Beauty Salon Website",
      category: "Website",
      description:
        "A stunning website for a local beauty salon with online booking system, service catalog, and gallery.",
      image: "Salon",
      results: ["40% increase in online bookings", "Modern, professional appearance", "Mobile-optimized"],
    },
    {
      id: 2,
      title: "Restaurant Online Ordering",
      category: "Web Application",
      description:
        "Custom web app for a restaurant chain enabling customers to browse menus and place orders online.",
      image: "Restaurant",
      results: ["Reduced phone orders by 35%", "Real-time order management", "Payment integration"],
    },
    {
      id: 3,
      title: "Fitness Studio Membership Portal",
      category: "Web Application",
      description:
        "Member portal with class booking, payment management, and progress tracking for a fitness studio.",
      image: "Fitness",
      results: ["Streamlined member management", "Automated billing", "Mobile app integration"],
    },
    {
      id: 4,
      title: "Local Retail E-Commerce Store",
      category: "E-Commerce",
      description:
        "Complete e-commerce solution for a local retail shop to sell products online with inventory management.",
      image: "Retail",
      results: ["24/7 online sales channel", "Inventory sync with POS", "Fast checkout"],
    },
    {
      id: 5,
      title: "Service Business Dashboard",
      category: "Web Application",
      description:
        "Internal dashboard for a service-based business to manage jobs, invoicing, and customer relationships.",
      image: "Services",
      results: ["70% faster job scheduling", "Automated invoicing", "Customer history tracking"],
    },
    {
      id: 6,
      title: "Event Venue Website",
      category: "Website",
      description:
        "Elegant website for an event venue with capacity details, availability calendar, and booking form.",
      image: "Events",
      results: ["Direct booking inquiries", "Event showcase gallery", "Easy calendar updates"],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Check out some of the projects we've built for businesses in the Westerham area and beyond.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-50">
                    {project.image}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-green-600 font-bold mt-0.5">
                          ✓
                        </span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Want to see what we could build for you?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Check out our interactive example to get a sense of what's possible.
          </p>
          <a
            href="/demo"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Live Example
          </a>
        </div>
      </section>
    </div>
  );
}
