"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -50]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.55], [50, -50]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.85], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
      {/* Center text */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center p-8"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl mb-4">
            Sourabh Kumar.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
            IT Undergraduate & Developer.
          </p>
        </div>
      </motion.div>

      {/* Left text */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left p-8 md:p-24"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-xl leading-tight">
            I specialize in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Computer Vision, ML,</span> and Full-stack Development.
          </h2>
        </div>
      </motion.div>

      {/* Right text */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right p-8 md:p-24"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-xl leading-tight">
            Bridging <br/>
            <span className="font-light italic text-white/70">AI</span> and <span className="font-light italic text-white/70">software engineering</span>.
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
