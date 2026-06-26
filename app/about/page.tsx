export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Custom Dev Co
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            We're passionate about building custom web solutions that help local businesses grow.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Custom Dev Co, we believe that every business deserves a web presence that truly reflects their quality and values. We're dedicated to building custom web solutions that go beyond templates and off-the-shelf tools.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Whether you're a salon looking to streamline bookings, a restaurant wanting to offer online ordering, or a retail business expanding into e-commerce, we work with you to understand your unique needs and build a solution that actually solves your problems.
          </p>
          <p className="text-lg text-gray-600">
            We're local to the Westerham area and take pride in building long-term relationships with our clients. We don't just build and disappear—we're here to support you after launch.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                We build solutions tailored specifically to your business. No generic templates, no one-size-fits-all approach.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Local Support</h3>
              <p className="text-gray-600">
                Based in Westerham, we're accessible and responsive to our clients. We're here when you need us.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Modern Technology</h3>
              <p className="text-gray-600">
                We use the latest technologies to build fast, secure, and scalable web solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Long-term Partnership</h3>
              <p className="text-gray-600">
                We provide ongoing support, maintenance, and improvements. Your success is our success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                We keep you informed throughout the entire process. No surprises, no hidden costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Check out our portfolio to see the real results we've delivered for other businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                <p className="text-gray-600">
                  We start by understanding your business, goals, and specific needs. We'll ask the right questions to ensure we build exactly what you need.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                <p className="text-gray-600">
                  We create a modern, user-friendly design and build a robust, scalable solution using the latest web technologies.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Testing & Launch</h3>
                <p className="text-gray-600">
                  We thoroughly test everything and launch your site with confidence. We handle all the technical details.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Support & Growth</h3>
                <p className="text-gray-600">
                  After launch, we provide ongoing support, maintenance, and help you optimize for continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
