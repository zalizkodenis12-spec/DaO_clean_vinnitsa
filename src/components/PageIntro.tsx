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
        <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none">

          {/* LEFT half — slides out to the LEFT */}
          <motion.div
            animate={splitting ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute top-0 left-0 h-full bg-[#0158C4]"
            style={{ width: "50%" }}
          >
            {/* Vertical wave on the RIGHT edge, sticking out to the right */}
            <div
              className="absolute top-0 right-0 h-full"
              style={{ width: 100, transform: "translateX(100%)" }}
            >
              <svg
                viewBox="0 0 100 1000"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "100%" }}
              >
                <path
                  d="M0,0 C70,150 10,350 50,500 C90,650 10,800 0,1000 L0,1000 L0,0 Z"
                  fill="#0158C4"
                />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT half — slides out to the RIGHT */}
          <motion.div
            animate={splitting ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute top-0 right-0 h-full bg-[#0158C4]"
            style={{ width: "50%" }}
          >
            {/* Vertical wave on the LEFT edge, sticking out to the left */}
            <div
              className="absolute top-0 left-0 h-full"
              style={{ width: 100, transform: "translateX(-100%)" }}
            >
              <svg
                viewBox="0 0 100 1000"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "100%" }}
              >
                <path
                  d="M100,0 C30,150 90,350 50,500 C10,650 90,800 100,1000 L100,1000 L100,0 Z"
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
