"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageIntro() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Start animation
    const t1 = setTimeout(() => setIsAnimating(false), 500);
    // Remove from DOM
    const t2 = setTimeout(() => setVisible(false), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          animate={!isAnimating ? { y: "calc(-100vh - 200px)" } : { y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed top-0 left-0 w-full h-screen z-[999] pointer-events-none bg-[#0158C4]"
        >
          {/* Wave hanging off the bottom */}
          <div className="absolute top-full left-0 w-full overflow-hidden leading-none transform -translate-y-[1px]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[150px]">
              <path d="M0,0 C300,120 900,0 1200,60 L1200,0 L0,0 Z" className="fill-[#0158C4]"></path>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

