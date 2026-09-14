"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, skills, type SkillCategory } from "@/lib/data";

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All" ? skills : skills.filter((s) => s.category === active),
    [active]
  );

  return (
    <section id="skills" className="relative py-24">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="badge-pill mb-4">Skills</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Tools I use to <span className="gradient-text">build</span> the
              future
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  active === cat
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl px-2 text-center transition-transform hover:-translate-y-1 hover:border-blue-500/40"
            >
              <span className="text-2xl">⬢</span>
              <span className="text-xs text-white/80">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
