"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="py-[100px] bg-linear-135 from-navy-dark via-navy to-blue relative overflow-hidden max-md:py-[72px] max-sm:py-[56px]">
      <div className="absolute inset-0 contact-pattern" />

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-2 grid grid-cols-2 gap-20 items-start max-lg:gap-12 max-md:grid-cols-1 max-md:gap-10">
        {/* Info */}
        <ScrollReveal>
          <span className="inline-block font-heading text-[0.75rem] font-semibold tracking-[3px] uppercase text-blue-light mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.2] mb-5">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-[1.1rem] text-white/60 max-w-[600px] leading-[1.8] mb-10">
            Contact us today for a free, no-obligation estimate. We&apos;d love to discuss your next flooring
            or renovation project.
          </p>

          <div className="flex flex-col gap-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/[0.08] border border-white/10 rounded-xl shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-blue-light">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-[0.75rem] text-white/40 uppercase tracking-[1px] font-semibold mb-0.5">Phone</div>
                <a href="tel:9089072998" className="text-base text-white font-medium hover:text-blue-light transition-colors duration-300">
                  908-907-2998
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/[0.08] border border-white/10 rounded-xl shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-blue-light">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-[0.75rem] text-white/40 uppercase tracking-[1px] font-semibold mb-0.5">Email</div>
                <a href="mailto:junior@unitedflooringnj.com" className="text-base text-white font-medium hover:text-blue-light transition-colors duration-300">
                  junior@unitedflooringnj.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/[0.08] border border-white/10 rounded-xl shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-blue-light">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-[0.75rem] text-white/40 uppercase tracking-[1px] font-semibold mb-0.5">Location</div>
                <p className="text-base text-white font-medium">36 Victor Ave, West Long Branch, NJ 07764</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.05] border border-white/[0.08] rounded-[20px] p-10 backdrop-blur-[10px] max-sm:p-7 max-sm:px-5"
          >
            <h3 className="font-heading text-[1.3rem] text-white mb-6">Request a Free Estimate</h3>

            <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-[18px] py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-[10px] text-white font-body text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-blue-light placeholder:text-white/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-[18px] py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-[10px] text-white font-body text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-blue-light placeholder:text-white/30"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-[18px] py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-[10px] text-white font-body text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-blue-light placeholder:text-white/30"
              />
            </div>

            <div className="mb-4">
              <select
                name="service"
                required
                defaultValue=""
                className="contact-select w-full px-[18px] py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-[10px] text-white font-body text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-blue-light"
              >
                <option value="" disabled>Select a Service</option>
                <option value="tile-installation">Tile &amp; Stone Installation</option>
                <option value="kitchen-renovation">Kitchen Renovation</option>
                <option value="bathroom-renovation">Bathroom Renovation</option>
                <option value="hardwood-flooring">Hardwood Flooring</option>
                <option value="floor-sanding">Floor Sanding &amp; Refinishing</option>
                <option value="concrete-pavers">Concrete &amp; Pavers</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-[18px] py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-[10px] text-white font-body text-[0.9rem] transition-colors duration-300 focus:outline-none focus:border-blue-light placeholder:text-white/30 resize-y min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 rounded-[10px] font-heading text-[0.9rem] font-semibold tracking-[0.5px] cursor-pointer transition-all duration-300 mt-2 ${
                status === "sent"
                  ? "bg-[#4ADE80] text-white"
                  : status === "error"
                  ? "bg-red-500 text-white"
                  : "bg-blue text-white hover:bg-blue-light hover:-translate-y-px"
              }`}
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Error — Try Again"}
              {status === "idle" && "Send Request"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
