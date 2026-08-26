"use client";

import { motion } from "framer-motion";




export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-[#FACC15] z-20 pb-32 min-h-[700px] md:min-h-[800px]">
      {/* Top Smoother Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[150px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#FACC15]"
          ></path>
        </svg>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-[#EAB308] opacity-10"></div>
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#EAB308] opacity-5"></div>
        <div className="absolute top-[40%] left-[2%] w-48 h-48 rounded-full bg-[#EAB308] opacity-10"></div>
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-[#EAB308] opacity-5"></div>
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 rounded-full bg-[#EAB308] opacity-10"></div>
        <div className="absolute bottom-[30%] right-[2%] w-40 h-40 rounded-full bg-[#EAB308] opacity-5"></div>
        <div className="absolute top-[5%] left-[50%] w-24 h-24 rounded-full bg-[#EAB308] opacity-10"></div>
        <div className="absolute top-[80%] left-[5%] w-72 h-72 rounded-full bg-[#EAB308] opacity-5"></div>
        <div className="absolute top-[35%] right-[40%] w-56 h-56 rounded-full bg-[#EAB308] opacity-10"></div>
        <div className="absolute bottom-[5%] right-[45%] w-48 h-48 rounded-full bg-[#EAB308] opacity-5"></div>
        <div className="absolute top-[15%] left-[80%] w-32 h-32 rounded-full bg-[#EAB308] opacity-10"></div>
        <div className="absolute bottom-[50%] left-[40%] w-64 h-64 rounded-full bg-[#EAB308] opacity-5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 pt-16 md:pt-24 pb-12">
        {/* LEFT COLUMN — Text & Mobile Photo */}
        <div className="w-full md:w-1/2 flex flex-col text-white">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-center md:text-left leading-tight drop-shadow-sm">
              Знайомтесь — Олег, власник DaO Clean
            </h3>

            {/* Mobile-only Photo: directly under heading and above text */}
            <div className="md:hidden w-full flex justify-center mb-8">
              <div className="relative w-full max-w-[320px] aspect-[4/5] bg-[#FEF9C3] rounded-[32px] overflow-hidden flex items-center justify-center shadow-xl p-3">
                <svg viewBox="0 0 400 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  <ellipse cx="200" cy="450" rx="220" ry="200" fill="#EAB308" fillOpacity="0.4" />
                  <circle cx="200" cy="120" r="160" fill="#EAB308" fillOpacity="0.4" />
                </svg>
                <div className="relative z-10 w-full aspect-square bg-[#FFFFFF]/60 flex flex-col items-center justify-center rounded-[20px] shadow-2xl border-2 border-dashed border-[#EAB308]">
                  <span className="text-[#EAB308] font-bold text-xl uppercase tracking-wider text-center px-4">Фото власника</span>
                </div>
              </div>
            </div>

            {/* Text — visible on mobile and desktop */}
            <p className="text-base md:text-xl font-medium opacity-90 mb-8 md:mb-10 leading-relaxed text-center md:text-left">
              Кожне замовлення я приймаю особисто і несу за нього повну відповідальність — від першого дзвінка до фінального результату. Спеціалізуюся на виїзній хімчистці меблів — диванів, матраців, крісел та килимів. Сам виїжджаю до клієнтів, сам підбираю засоби та сам контролюю якість — ніякого перепродажу замовлень стороннім виконавцям. Понад 5 років у цій справі.
            </p>

            <ul className="flex flex-col gap-4 md:gap-5">
              {[
                "Спеціаліст з хімчистки меблів та килимів",
                "Особисто виїжджає на об'єкти",
                "Контролює якість кожного замовлення",
                "На зв'язку для консультацій",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 text-base md:text-xl font-bold"
                >
                  <span className="w-3 h-3 rounded-full bg-white shrink-0 shadow-md" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — Desktop Photo block */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6 lg:p-12">
          <div className="relative w-full max-w-[450px] aspect-[4/5] bg-[#FEF9C3] rounded-[40px] overflow-hidden flex items-center justify-center shadow-xl p-3">
            <svg viewBox="0 0 400 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <ellipse cx="200" cy="450" rx="220" ry="200" fill="#EAB308" fillOpacity="0.4" />
              <circle cx="200" cy="120" r="160" fill="#EAB308" fillOpacity="0.4" />
            </svg>
            <div className="relative z-10 w-full aspect-square bg-[#FFFFFF]/60 flex flex-col items-center justify-center rounded-[24px] shadow-2xl border-2 border-dashed border-[#EAB308]">
              <span className="text-[#EAB308] font-bold text-2xl uppercase tracking-wider text-center px-4">Фото власника</span>
            </div>
          </div>
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
            className="fill-[#FACC15]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
