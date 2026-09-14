"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

const badgeIcons: Record<string, string> = {
  code: "</>",
  zap: "⚡",
  database: "🗄",
  chart: "📈",
};

const badges = [
  {
    icon: "code",
    title: "Build",
    subtitle: "Web Apps",
    className: "left-0 top-6 md:left-4 md:top-10",
    delay: "animate-float",
  },
  {
    icon: "zap",
    title: "Automate",
    subtitle: "Business Processes",
    className: "right-0 top-0 md:right-2 md:top-4",
    delay: "animate-float-delay",
  },
  {
    icon: "database",
    title: "Integrate",
    subtitle: "AI Solutions",
    className: "right-0 top-1/2 -translate-y-1/2 md:-right-2",
    delay: "animate-float",
  },
  {
    icon: "chart",
    title: "Scale",
    subtitle: "Your Business",
    className: "left-0 bottom-8 md:left-6",
    delay: "animate-float-delay",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="hero-glow" />
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="section-container relative grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge-pill mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            Available for new projects
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ideas
            <br />
            into Real
            <br />
            <span className="gradient-text">Solutions</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-white/60 sm:text-lg">
            I build modern web applications, AI-powered solutions and
            automations that help businesses grow faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Hire Me on Upwork →
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              {"</>"} View My Work
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-3xl" />
          <Globe3D />

          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`glass-card absolute z-10 flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg ${badge.className} ${badge.delay}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-sm text-blue-300">
                {badgeIcons[badge.icon]}
              </span>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white">
                  {badge.title}
                </div>
                <div className="text-[10px] text-white/50">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}

          <div className="pointer-events-none absolute -right-8 bottom-0 hidden text-right font-serif italic text-blue-300/70 lg:block">
            <p className="text-lg leading-tight">
              Code
              <br />
              Automate
              <br />
              Create
              <br />
              Grow
            </p>
            <p className="mt-1 text-[10px] not-italic tracking-widest text-white/40">
              BETTER TOMORROW
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
