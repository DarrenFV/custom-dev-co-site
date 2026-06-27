"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-colors";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's talk.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Form */}
            <div className="md:col-span-2">
              {submitted && (
                <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <p className="text-emerald-800 text-sm font-medium">
                    Message sent — we'll be in touch shortly.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Business / Company <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={inputClass + " resize-none"}
                    placeholder="What do you need help with? The more detail the better."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold">
                  Send message
                </Button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Get in touch</p>
                <div className="space-y-6">
                  <div className="flex gap-3 items-start">
                    <div className="h-9 w-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-0.5">Email</p>
                      <a
                        href="mailto:hello@customdev.co"
                        className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
                      >
                        hello@customdev.co
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="h-9 w-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-0.5">Location</p>
                      <p className="text-sm text-gray-500">Westerham, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-sm font-semibold text-gray-900 mb-2">Quick response guaranteed</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We aim to respond to all enquiries within 24 hours. Usually much sooner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
