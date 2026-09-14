"use client";

import { motion } from "framer-motion";
import { aboutPoints } from "@/lib/data";

const steps = ["Develop", "Automate", "Launch", "Scale"];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950">
            <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/10">
              JA
            </div>
            <div className="glass-card absolute -right-4 top-8 rounded-xl px-4 py-3 text-xs italic text-white/70 shadow-lg">
              “Technology is a tool.
              <br />
              People are the purpose.”
              <div className="mt-1 not-italic text-white/40">
                — João Adriano
              </div>
            </div>
            <div className="glass-card absolute -left-4 bottom-10 rounded-xl px-4 py-3 text-xs font-medium text-white/80 shadow-lg animate-float">
              Discipline turns
              <br />
              ideas into freedom.
            </div>
            <div className="absolute bottom-0 flex w-full justify-between border-t border-white/10 bg-black/40 px-6 py-3 text-[10px] uppercase tracking-widest text-white/50">
              {steps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge-pill mb-4">About Me</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            More than code.
            <br />
            I build <span className="gradient-text">opportunities.</span>
          </h2>
          <p className="mt-5 text-white/60">
            I&apos;m João Adriano — a Full-Stack Developer with a passion for
            turning ideas into real, working products. I combine modern web
            technologies, AI, and automation to help entrepreneurs and
            businesses save time, solve problems and grow.
          </p>

          <ul className="mt-6 space-y-3">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            More About Me →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
