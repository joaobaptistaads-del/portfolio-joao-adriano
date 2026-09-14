"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

const icons: Record<string, string> = {
  code: "</>",
  sparkles: "✨",
  zap: "⚡",
  database: "🗄",
};

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge-pill mb-4">Services</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            How I can <span className="gradient-text">help you grow</span>
          </h2>
          <p className="mt-4 text-white/60">
            From idea to launch — full-stack development, AI integration and
            automation tailored to your business goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-lg text-blue-300">
                {icons[service.icon]}
              </div>
              <h3 className="mt-4 font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/50">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
