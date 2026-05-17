"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Teeth Braces Placement Detection AI",
    description: "Computer Vision application using YOLOv8 to detect and classify orthodontic brace placement. Achieved mAP@50 of 0.879 and 0.85 Precision. Includes Streamlit dashboard and automated CSV export.",
    tag: "Computer Vision",
    tech: ["YOLOv8", "Python", "Streamlit"],
    link: "https://github.com/sourabh-sk1/Dental-project.git",
  },
  {
    id: 2,
    title: "MetroMap.io - Transit Simulation",
    description: "Grid-based transit simulation with Harry Beck-style line geometry. Agent-based Demand Model using Dijkstra-based pathfinding and procedural map generation for dynamic terrains.",
    tag: "Full-Stack / Algorithms",
    tech: ["TypeScript", "PixiJS v8", "Pathfinding"],
    link: "https://github.com/sourabh-sk1/gameMetro.git",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 min-h-[70vh] bg-[#050505] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Selected Projects
          </h2>
          <div className="w-24 h-[1px] bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.15] cursor-pointer min-h-96 flex flex-col justify-end p-8 md:p-12 block"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className="text-xs font-medium tracking-widest text-emerald-400/80 uppercase mb-4 block">
                  {project.tag}
                </span>
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400/80">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
