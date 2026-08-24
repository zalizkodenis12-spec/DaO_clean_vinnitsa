"use client";

import { motion } from "framer-motion";




export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-[#FFC107] z-20 pb-32 min-h-[700px] md:min-h-[800px]">
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

      {/* RIGHT HALF — Photo placeholder (absolute, fills right side) */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 hidden md:block">
        {/* TODO: замінити на реальне фото власника */}
        <div className="w-full h-full bg-[#FFF3D6] flex items-end justify-center overflow-hidden">
          <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <ellipse cx="200" cy="600" rx="220" ry="180" fill="#E6AC00" fillOpacity="0.4" />
            <circle cx="200" cy="190" r="110" fill="#E6AC00" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* LEFT HALF — Text content */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 pt-16 md:pt-24 pb-4">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col text-white"
        >
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight drop-shadow-sm">
            Знайомтесь — власник DaO Clean
          </h3>

          <p className="text-lg md:text-xl font-medium opacity-90 mb-10 leading-relaxed">
            Кожне замовлення я приймаю особисто і несу за нього повну відповідальність — від першого дзвінка до фінального результату. Працюю у сфері хімчистки вже понад 5 років і знаю, як поводитися з будь-яким типом тканини чи забруднення. Я сам виїжджаю до клієнтів, сам підбираю засоби та сам контролюю якість — ніякого перепродажу замовлень стороннім виконавцям. Для мене важливо, щоб кожен клієнт залишився задоволений і повернувся знову.
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
                className="flex items-center gap-4 text-lg md:text-xl font-bold"
              >
                <span className="w-3 h-3 rounded-full bg-white shrink-0 shadow-md" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

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
