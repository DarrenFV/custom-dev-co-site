import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Beauty Salon Website",
      category: "Website",
      description:
        "A modern website for a local beauty salon with online booking, service catalogue, and gallery.",
      gradient: "from-rose-400 to-pink-600",
      results: ["40% increase in online bookings", "Professional appearance", "Mobile-optimised"],
    },
    {
      id: 2,
      title: "Restaurant Online Ordering",
      category: "Web Application",
      description:
        "Custom ordering app for a restaurant chain — browse menus and place orders directly online.",
      gradient: "from-orange-400 to-amber-600",
      results: ["35% fewer phone orders", "Real-time order management", "Payment integration"],
    },
    {
      id: 3,
      title: "Fitness Studio Portal",
      category: "Web Application",
      description:
        "Member portal with class booking, payment management, and progress tracking.",
      gradient: "from-violet-500 to-purple-700",
      results: ["Streamlined memberships", "Automated billing", "Mobile-friendly"],
    },
    {
      id: 4,
      title: "Local Retail E-Commerce",
      category: "E-Commerce",
      description:
        "Complete online store for a local shop — product catalogue, checkout, and inventory management.",
      gradient: "from-emerald-400 to-teal-600",
      results: ["24/7 online sales", "Inventory sync with POS", "Fast checkout"],
    },
    {
      id: 5,
      title: "Service Business Dashboard",
      category: "Web Application",
      description:
        "Internal dashboard to manage jobs, invoicing, and customer relationships.",
      gradient: "from-blue-400 to-indigo-600",
      results: ["70% faster scheduling", "Automated invoicing", "Full client history"],
    },
    {
      id: 6,
      title: "Event Venue Website",
      category: "Website",
      description:
        "Elegant venue website with availability calendar, capacity details, and booking enquiry form.",
      gradient: "from-slate-500 to-gray-700",
      results: ["Direct booking enquiries", "Event showcase gallery", "Easy updates"],
    },
  ];

  const categories = ["All", "Website", "Web Application", "E-Commerce"];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
            Work we're proud of.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Projects built for businesses in Westerham and beyond — each one custom, each one delivered.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-200"
              >
                <div className={`bg-gradient-to-br ${project.gradient} h-44 flex items-end p-5`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70 bg-white/10 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="space-y-1.5">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
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
      <section className="bg-gray-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Want to see what we'd build for you?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Try our interactive demo or get in touch to talk through your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              <Link href="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <Link href="/demo">View live demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
