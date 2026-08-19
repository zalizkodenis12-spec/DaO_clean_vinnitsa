"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageIntro() {
  const [splitting, setSplitting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Start split after 0.7s
    const t1 = setTimeout(() => setSplitting(true), 700);
    // Remove from DOM after animation fully ends
    const t2 = setTimeout(() => setVisible(false), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none flex">

          {/* LEFT half — slides out completely to the left */}
          <motion.div
            animate={splitting ? { x: "-100vw" } : { x: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="relative h-full bg-[#0158C4]"
            style={{ width: "50%" }}
          >
            {/* Vertical wave matching the sketch exactly (1.5 cycles, deep swoops) */}
            <div className="absolute top-0 right-[-100px] h-full w-[200px]">
              <svg viewBox="0 0 400 1000" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M200,0 C0,111 0,222 200,333 C400,444 400,555 200,667 C0,778 0,889 200,1000 L0,1000 L0,0 Z"
                  fill="#0158C4"
                />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT half — slides out completely to the right */}
          <motion.div
            animate={splitting ? { x: "100vw" } : { x: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="relative h-full bg-[#0158C4]"
            style={{ width: "50%" }}
          >
            {/* Vertical wave matching the sketch exactly */}
            <div className="absolute top-0 left-[-100px] h-full w-[200px]">
              <svg viewBox="0 0 400 1000" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M200,0 C0,111 0,222 200,333 C400,444 400,555 200,667 C0,778 0,889 200,1000 L400,1000 L400,0 Z"
                  fill="#0158C4"
                />
              </svg>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}

