import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Custom-built for local businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Websites & apps{" "}
            <span className="text-white/30">built properly.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            We build beautiful, fast, custom web solutions for local businesses.
            From a simple site to a complex app — made for what you actually need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
            >
              <Link href="/contact">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <Link href="/portfolio">See our work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Projects delivered" },
              { number: "100%", label: "Client satisfaction" },
              { number: "5+", label: "Years experience" },
              { number: "24h", label: "Avg. response time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-gray-900">{stat.number}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
              What we do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Everything you need,
              <br />
              <span className="text-gray-400">nothing you don't.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Web Development",
                desc: "Modern, responsive websites built with the latest tech. Perfect for salons, shops, restaurants, and service-based businesses.",
              },
              {
                icon: Zap,
                title: "Custom Applications",
                desc: "Tailored web apps designed to solve your specific business problems — booking systems, dashboards, portals, and more.",
              },
              {
                icon: HeartHandshake,
                title: "Ongoing Support",
                desc: "We don't just build and disappear. Maintenance, updates, and support to keep your site running at its best.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="h-10 w-10 rounded-xl bg-violet-50 flex items-center justify-center mb-6">
                  <item.icon className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
              The process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Simple from start to finish.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn your business, goals, and what you actually need." },
              { step: "02", title: "Design", desc: "Clean, modern designs built around your brand and customers." },
              { step: "03", title: "Build & Launch", desc: "Fast, tested, and deployed. We handle everything technical." },
              { step: "04", title: "Support", desc: "Ongoing help and improvements after launch. Always here." },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-4xl font-bold text-gray-100 mb-4">{item.step}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build something?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
          >
            <Link href="/contact">Schedule a free consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
