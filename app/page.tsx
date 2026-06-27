import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0A0B] text-white py-28 md:py-44 overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute -top-48 left-1/3 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/50 mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
            Custom-built for local businesses
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[82px] font-bold tracking-tight leading-[1.03] mb-8 max-w-5xl">
            Websites & apps
            <br />
            <span className="text-white/20">built properly.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
            Beautiful, fast, custom web solutions for local businesses —
            from a simple site to a complex app.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-12 px-6 rounded-xl"
            >
              <Link href="/contact">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/15 text-white hover:bg-white/10 hover:text-white h-12 px-6 rounded-xl"
            >
              <Link href="/portfolio">See our work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {[
              { number: "20+", label: "Projects delivered" },
              { number: "100%", label: "Client satisfaction" },
              { number: "5+", label: "Years experience" },
              { number: "24h", label: "Avg. response time" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white py-8 text-center">
                <p className="text-4xl font-bold tracking-tight text-gray-900">{stat.number}</p>
                <p className="text-sm text-gray-400 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-5">
              What we do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Everything you need,{" "}
              <span className="text-gray-300">nothing you don't.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Globe,
                title: "Web Development",
                desc: "Modern, responsive websites built for your business. Perfect for salons, shops, restaurants, and service providers.",
              },
              {
                icon: Zap,
                title: "Custom Applications",
                desc: "Tailored web apps for your specific workflows — booking systems, dashboards, member portals, and more.",
              },
              {
                icon: HeartHandshake,
                title: "Ongoing Support",
                desc: "We don't just build and disappear. Maintenance, updates, and support whenever you need it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — dark section */}
      <section className="relative bg-[#0A0A0B] text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-5">
              The process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Simple from start{" "}
              <span className="text-white/20">to finish.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Discovery", desc: "We learn your business, your goals, and exactly what you need." },
              { step: "02", title: "Design", desc: "Clean, modern designs built around your brand and your customers." },
              { step: "03", title: "Build & Launch", desc: "Fast, tested, and deployed. Every technical detail handled for you." },
              { step: "04", title: "Support", desc: "Ongoing help, updates, and improvements long after launch day." },
            ].map((item) => (
              <div key={item.step} className="group">
                <p className="text-6xl font-bold text-white/[0.06] mb-6 tabular-nums">{item.step}</p>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0A0A0B] text-white py-28 md:py-36 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-violet-600/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
            Ready to build something great?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-sm mx-auto">
            Tell us about your project. We'll respond within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-12 px-8 rounded-xl"
          >
            <Link href="/contact">Schedule a free consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
