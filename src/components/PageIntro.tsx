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
            {/* Vertical wave extending exactly 60px to the right of the center */}
            <div className="absolute top-0 right-[-60px] h-full w-[120px]">
              <svg viewBox="0 0 120 1000" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M60,0 C120,60 120,140 60,200 C0,260 0,340 60,400 C120,460 120,540 60,600 C0,660 0,740 60,800 C120,860 120,940 60,1000 L0,1000 L0,0 Z"
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
            {/* Vertical wave extending exactly 60px to the left of the center */}
            <div className="absolute top-0 left-[-60px] h-full w-[120px]">
              <svg viewBox="0 0 120 1000" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M60,0 C120,60 120,140 60,200 C0,260 0,340 60,400 C120,460 120,540 60,600 C0,660 0,740 60,800 C120,860 120,940 60,1000 L120,1000 L120,0 Z"
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

