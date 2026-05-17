"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: "Java, Python, SQL, C++, TypeScript, JavaScript" },
  { category: "Frameworks / Libs", items: "YOLOv8, Streamlit, Scikit-learn, NumPy, Pandas, Flask, PixiJS, Node.js" },
  { category: "Core Concepts", items: "Computer Vision, Data Structures (DSA), Machine Learning, Pathfinding, DBMS" },
  { category: "Tools & DBs", items: "Git, Vite, MySQL, MongoDB, Firebase, Linux, Postman, Docker" },
];

const experience = [
  {
    role: "IT Intern",
    company: "Delhi Metro Rail Corporation Ltd. (DMRC)",
    date: "Jan 2026 - Feb 2026",
    details: [
      "Optimized network operations and provided technical support for administrative and ticketing backend services.",
      "Collaborated with the IT team to resolve critical software issues, ensuring 99.9% system uptime during peak hours.",
      "Gained high-level exposure to enterprise data security protocols and large-scale urban transit IT infrastructure.",
    ],
  },
  {
    role: "Research Intern (CFEES)",
    company: "Defence Research & Development Organization (DRDO)",
    date: "June 2025 - Aug 2025",
    details: [
      "Developed an Inventory Management System using Python to automate tracking of safety/environmental equipment.",
      "Digitized legacy records through data preprocessing, improving asset management retrieval efficiency by 50%.",
      "Worked under Scientist 'E' to design a robust database schema for high-security defense equipment.",
      "Awarded commendations for technical proficiency and completed ISO 9001:2015 standards training.",
    ],
  },
];

export default function Resume() {
  return (
    <section className="relative z-20 min-h-screen bg-[#050505] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Experience & Education */}
        <div className="lg:col-span-7 flex flex-col gap-16">
          
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light tracking-tight text-white mb-8 flex items-center gap-4">
              Experience
              <div className="flex-grow h-[1px] bg-white/10 ml-4"></div>
            </h2>
            
            <div className="flex flex-col gap-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                    <span className="text-sm font-light text-emerald-400/80 tracking-wide">{exp.date}</span>
                  </div>
                  <h4 className="text-lg font-light text-white/60 mb-4">{exp.company}</h4>
                  <ul className="flex flex-col gap-2">
                    {exp.details.map((detail, j) => (
                      <li key={j} className="text-sm font-light text-white/50 leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-white/20 rounded-sm"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light tracking-tight text-white mb-8 flex items-center gap-4">
              Education
              <div className="flex-grow h-[1px] bg-white/10 ml-4"></div>
            </h2>
            
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-medium text-white">Bachelor of Technology in IT</h3>
                <span className="text-sm font-light text-blue-400/80 tracking-wide">July 2023 - July 2027</span>
              </div>
              <h4 className="text-lg font-light text-white/60 mb-2">Bharati Vidyapeeth College of Engineering, Pune</h4>
              <p className="text-sm text-white/50 font-light">CGPA: 8.8 / 10</p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Skills & Certifications */}
        <div className="lg:col-span-5 flex flex-col gap-16">
          
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-light tracking-tight text-white mb-8 flex items-center gap-4">
              Skills
              <div className="flex-grow h-[1px] bg-white/10 ml-4 lg:hidden"></div>
            </h2>

            <div className="flex flex-col gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-xs tracking-widest text-white/40 uppercase mb-3">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.split(", ").map((item, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-md bg-white/5 text-white/80 text-sm font-light border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-light tracking-tight text-white mb-8 flex items-center gap-4">
              Certifications
              <div className="flex-grow h-[1px] bg-white/10 ml-4 lg:hidden"></div>
            </h2>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Database Management Systems (Elite + Silver)</h4>
                  <p className="text-white/50 text-sm font-light">NPTEL Online Certification</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">Cloud Computing</h4>
                  <p className="text-white/50 text-sm font-light">NPTEL Online Certification</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium mb-1">ISO 9001:2015 Standards for CFEES Laboratories</h4>
                  <p className="text-white/50 text-sm font-light">DRDO Training Certificate</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
