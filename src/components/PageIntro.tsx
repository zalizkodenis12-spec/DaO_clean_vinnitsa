"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageIntro() {
  const [splitting, setSplitting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setSplitting(true), 800);
    const t2 = setTimeout(() => setVisible(false), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none">
          {/* Top half */}
          <motion.div
            animate={splitting ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute top-0 left-0 w-full bg-[#0158C4]"
            style={{ height: "55%" }}
          >
            {/* Wavy bottom edge */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full" style={{ height: 80 }}>
              <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="#0158C4" />
              </svg>
            </div>
          </motion.div>

          {/* Bottom half */}
          <motion.div
            animate={splitting ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute bottom-0 left-0 w-full bg-[#0158C4]"
            style={{ height: "55%" }}
          >
            {/* Wavy top edge */}
            <div className="absolute top-0 left-0 w-full -translate-y-full" style={{ height: 80 }}>
              <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,40 C300,0 900,80 1200,40 L1200,0 L0,0 Z" fill="#0158C4" />
              </svg>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
