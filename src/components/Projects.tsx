"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="badge-pill mb-4">Featured Projects</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Real projects. <span className="gradient-text">Real results.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium text-blue-300 hover:text-blue-200"
          >
            View all projects →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
            >
              <div
                className={`h-36 w-full bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              />
              <div className="p-5">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-white/50">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-white/40 transition-colors group-hover:text-blue-300">
                    ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
