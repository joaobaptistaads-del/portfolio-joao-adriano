"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-14">
          <div className="hero-glow" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="badge-pill mb-4">Contact</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s build your <span className="gradient-text">next project</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Have an idea, a business problem, or a project in mind? Let&apos;s
              talk about how I can help you bring it to life.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2"
            >
              <input
                required
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50"
              />
              <textarea
                required
                placeholder="Tell me about your project"
                rows={4}
                className="col-span-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/50 sm:col-span-2"
              />
              <button
                type="submit"
                className="col-span-1 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 sm:col-span-2"
              >
                Send Message →
              </button>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <a
                href="mailto:hello@joaoadriano.dev"
                className="hover:text-white"
              >
                hello@joaoadriano.dev
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
              <a href="#" className="hover:text-white">
                Upwork
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
