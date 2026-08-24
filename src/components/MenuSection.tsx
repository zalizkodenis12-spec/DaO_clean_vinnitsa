"use client";

import { motion } from "framer-motion";




export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-[#FFC107] z-20 pb-32">
      {/* Top Smoother Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[150px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#FFC107]"
          ></path>
        </svg>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-[#E6AC00] opacity-10"></div>
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#E6AC00] opacity-5"></div>
        <div className="absolute top-[40%] left-[2%] w-48 h-48 rounded-full bg-[#E6AC00] opacity-10"></div>
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-[#E6AC00] opacity-5"></div>
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 rounded-full bg-[#E6AC00] opacity-10"></div>
        <div className="absolute bottom-[30%] right-[2%] w-40 h-40 rounded-full bg-[#E6AC00] opacity-5"></div>
        <div className="absolute top-[5%] left-[50%] w-24 h-24 rounded-full bg-[#E6AC00] opacity-10"></div>
        <div className="absolute top-[80%] left-[5%] w-72 h-72 rounded-full bg-[#E6AC00] opacity-5"></div>
        <div className="absolute top-[35%] right-[40%] w-56 h-56 rounded-full bg-[#E6AC00] opacity-10"></div>
        <div className="absolute bottom-[5%] right-[45%] w-48 h-48 rounded-full bg-[#E6AC00] opacity-5"></div>
        <div className="absolute top-[15%] left-[80%] w-32 h-32 rounded-full bg-[#E6AC00] opacity-10"></div>
        <div className="absolute bottom-[50%] left-[40%] w-64 h-64 rounded-full bg-[#E6AC00] opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-4 relative z-10">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-8xl font-extrabold text-white mb-12 md:mb-20 tracking-wide drop-shadow-md text-center"
        >
          Про власника
        </motion.h2>

        {/* Two-column: photo left, text right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">

          {/* LEFT — Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[380px] shrink-0"
          >
            {/* TODO: замінити на реальне фото власника */}
            <div className="w-full aspect-[3/4] bg-[#FFF3D6] rounded-3xl shadow-2xl overflow-hidden flex items-end justify-center">
              <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <ellipse cx="100" cy="240" rx="110" ry="90" fill="#E6AC00" fillOpacity="0.35" />
                <circle cx="100" cy="85" r="52" fill="#E6AC00" fillOpacity="0.35" />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT — Text info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col text-white"
          >
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight drop-shadow-sm">
              Знайомтесь — власник DaO Clean
            </h3>

            <p className="text-lg md:text-2xl font-medium opacity-90 mb-10 leading-relaxed max-w-xl">
              Особисто контролюю якість кожного замовлення та відповідаю за результат. Не просто бізнес — а справа, у яку я вклав душу.
            </p>

            <ul className="flex flex-col gap-5">
              {[
                "Особисто виїжджає на об'єкти",
                "Контролює якість кожного замовлення",
                "Підбирає засоби під тип тканини",
                "На зв'язку для консультацій",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 text-lg md:text-xl font-semibold"
                >
                  <span className="w-3 h-3 rounded-full bg-white shrink-0 shadow-md" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>


      {/* Bottom Smoother Wavy SVG Divider (Flipped Vertically) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100 z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[150px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#FFC107]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
