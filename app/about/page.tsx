import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">About us</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
            We build things that actually work.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Custom Dev Co is a web development studio based in Westerham, UK. We work with local
            businesses to build custom websites and apps that solve real problems.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">Our mission</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Every business deserves a web presence that works.
              </h2>
            </div>
            <div className="space-y-5 text-gray-500 leading-relaxed">
              <p>
                We believe that great software shouldn't be reserved for big companies with big budgets.
                Every local business — salons, restaurants, retailers, service providers — deserves a
                web presence that truly reflects their quality and values.
              </p>
              <p>
                We go beyond templates. Whether you need to streamline bookings, take orders online,
                or just look great on the web, we work with you to build a solution that actually
                solves your problems.
              </p>
              <p>
                We're local to Westerham and take pride in building long-term relationships with our
                clients. We're not done when the site goes live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">Why us</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              What makes us different.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom solutions",
                desc: "No generic templates or one-size-fits-all approaches. Everything is built specifically for your business.",
              },
              {
                title: "Local and accessible",
                desc: "Based in Westerham — we're a phone call or short drive away. Real people, not a faceless agency.",
              },
              {
                title: "Modern tech",
                desc: "We use the latest technologies to build fast, secure, and scalable solutions that stand the test of time.",
              },
              {
                title: "Long-term partnership",
                desc: "We provide ongoing support, maintenance, and improvements. Your success is how we measure ours.",
              },
              {
                title: "No surprises",
                desc: "Clear communication, transparent pricing, and honest timelines throughout the entire project.",
              },
              {
                title: "Proven results",
                desc: "Real projects, real outcomes. Check our portfolio to see what we've built for businesses like yours.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Our process.
            </h2>
          </div>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We start by understanding your business, goals, and what you actually need. We ask the right questions to make sure we build exactly the right thing.",
              },
              {
                step: "02",
                title: "Design & Development",
                desc: "We create a modern, user-friendly design and build a robust solution using current best practices — fast, secure, and scalable.",
              },
              {
                step: "03",
                title: "Testing & Launch",
                desc: "We thoroughly test across devices and browsers, then launch with confidence. All the technical details are handled for you.",
              },
              {
                step: "04",
                title: "Support & Growth",
                desc: "After launch, we provide ongoing support, maintenance, and help you iterate. We're invested in your continued success.",
              },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-8 items-start">
                <div className="shrink-0 w-12 text-right">
                  <span className="text-sm font-bold text-gray-200">{item.step}</span>
                </div>
                <div className="flex-1 pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
