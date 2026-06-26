"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Demo() {
  const [activeTab, setActiveTab] = useState<"website" | "app">("website");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See What We Can Build
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            This is an example of a modern website built by Custom Dev Co. Imagine this for your business.
          </p>
        </div>
      </section>

      {/* Demo Tabs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("website")}
              className={`px-6 py-2 font-medium border-b-2 transition-colors ${
                activeTab === "website"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Sample Website
            </button>
            <button
              onClick={() => setActiveTab("app")}
              className={`px-6 py-2 font-medium border-b-2 transition-colors ${
                activeTab === "app"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Sample Web App
            </button>
          </div>

          {activeTab === "website" && (
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-white border-b border-gray-200 p-4">
                <div className="text-sm text-gray-600">
                  Example: Modern Salon Website
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Salon Name
                    </h2>
                    <p className="text-gray-600">
                      Welcome to our full-service salon. We specialize in haircuts, styling, and beauty treatments.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <div className="text-4xl mb-3">✂️</div>
                      <h3 className="font-bold mb-2">Hair Services</h3>
                      <p className="text-sm text-gray-600">
                        Professional cuts, color, and styling
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-4xl mb-3">💆</div>
                      <h3 className="font-bold mb-2">Beauty Treatments</h3>
                      <p className="text-sm text-gray-600">
                        Facials, massage, and skincare
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="text-4xl mb-3">👗</div>
                      <h3 className="font-bold mb-2">Styling</h3>
                      <p className="text-sm text-gray-600">
                        Expert styling for all occasions
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="font-bold mb-4">Book Your Appointment</h3>
                    <Button className="w-full">
                      Reserve a Spot
                    </Button>
                  </div>

                  <div className="text-center text-sm text-gray-600 border-t border-gray-200 pt-6">
                    <p className="font-medium">Open Mon-Sat, 9am-6pm</p>
                    <p>📍 123 Main Street, Town • ☎️ (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "app" && (
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-white border-b border-gray-200 p-4">
                <div className="text-sm text-gray-600">
                  Example: Restaurant Order Management
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Restaurant Order Portal
                    </h2>
                    <p className="text-gray-600">
                      Browse our menu and place your order for pickup or delivery
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-4xl mb-3">🍕</div>
                      <h3 className="font-bold mb-2">Pizzas</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Fresh, authentic pizzas made with quality ingredients
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Menu →
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-4xl mb-3">🥗</div>
                      <h3 className="font-bold mb-2">Salads</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Fresh garden and specialty salads
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Menu →
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-4xl mb-3">🍣</div>
                      <h3 className="font-bold mb-2">Specials</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Chef's special dishes and appetizers
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Menu →
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-4xl mb-3">🍰</div>
                      <h3 className="font-bold mb-2">Desserts</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Sweet treats and fresh baked goods
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Menu →
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-4">Your Cart</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Add items from the menu to place your order
                    </p>
                    <Button disabled className="w-full">
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            This example includes:
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Modern Design</h3>
              <p className="text-gray-600 text-sm">
                Clean, professional, mobile-responsive design
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600 text-sm">
                Built with modern tech for speed and performance
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold mb-2">Mobile First</h3>
              <p className="text-gray-600 text-sm">
                Works perfectly on phones, tablets, and desktops
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Secure & Safe</h3>
              <p className="text-gray-600 text-sm">
                Built with security best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to build something for your business?
          </h2>
          <Button render={<a href="/contact" />} variant="secondary" size="lg">Let's Talk</Button>
        </div>
      </section>
    </div>
  );
}
