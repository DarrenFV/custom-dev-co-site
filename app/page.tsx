import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Custom Web & App Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We build beautiful, custom websites and applications tailored to your business needs. From concept to launch, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button render={<Link href="/contact" />} size="lg">Get Started</Button>
            <Button render={<Link href="/demo" />} variant="outline" size="lg">See Example</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600">
                Modern, responsive websites built with the latest technologies. Perfect for salons, shops, services, and more.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Custom Applications</h3>
              <p className="text-gray-600">
                Tailored web applications designed to solve your unique business challenges and streamline operations.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                We don't just build and disappear. We provide ongoing maintenance and support to keep your site running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business with custom web development.
          </p>
          <Button render={<Link href="/contact" />} variant="secondary" size="lg">Schedule a Consultation</Button>
        </div>
      </section>
    </div>
  );
}
