"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
      </svg>
    ),
    name: "Чистка одягу",
    desc: "Делікатне прання та хімчистка будь-яких виробів — від звичайних речей до дорогих дизайнерських предметів гардероба. Зберігаємо форму, колір і структуру тканини.",
    tags: ["Куртки та пальто", "Ділові костюми", "Спортивний одяг", "Вовна та шовк"],
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 2.25 21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    name: "Чистка килимів",
    desc: "Глибоке виведення забруднень, пилу та алергенів із килимів будь-якого розміру та типу ворсу. Виїжджаємо самі — не треба нікуди везти.",
    tags: ["Перські та шерстяні", "Синтетичні килими", "Ковроліни", "Прикроватні доріжки"],
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    name: "Чистка м'яких меблів",
    desc: "Професійна хімчистка диванів, крісел і м'яких куточків прямо у вас вдома. Усуваємо плями, неприємні запахи та бактерії без шкоди для оббивки.",
    tags: ["Дивани та кутки", "Крісла та пуфи", "Матраци", "Офісні меблі"],
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    name: "Чистка штор і текстилю",
    desc: "Знімаємо, чистимо та повертаємо штори, тюль і будь-який домашній текстиль у первісний вигляд. Без деформацій та втрати кольору після обробки.",
    tags: ["Штори та тюль", "Покривала та подушки", "Скатертини", "Декоративний текстиль"],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-[#FFC107] z-20 pt-0 pb-40">
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

      {/* Decorative Background Circles — more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-[8%] w-40 h-40 rounded-full bg-[#E6AC00] opacity-30"></div>
        <div className="absolute top-[15%] right-[4%] w-72 h-72 rounded-full bg-[#E6AC00] opacity-20"></div>
        <div className="absolute top-[42%] left-[1%] w-56 h-56 rounded-full bg-[#E6AC00] opacity-25"></div>
        <div className="absolute top-[55%] right-[12%] w-96 h-96 rounded-full bg-[#E6AC00] opacity-15"></div>
        <div className="absolute bottom-[8%] left-[18%] w-[28rem] h-[28rem] rounded-full bg-[#E6AC00] opacity-20"></div>
        <div className="absolute bottom-[25%] right-[1%] w-48 h-48 rounded-full bg-[#E6AC00] opacity-25"></div>
        <div className="absolute top-[3%] left-[48%] w-28 h-28 rounded-full bg-[#E6AC00] opacity-30"></div>
        <div className="absolute top-[75%] left-[3%] w-80 h-80 rounded-full bg-[#E6AC00] opacity-15"></div>
        <div className="absolute top-[30%] right-[38%] w-64 h-64 rounded-full bg-[#E6AC00] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-extrabold text-white tracking-wide drop-shadow-md mb-6">
            Наші послуги
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Виїжджаємо до вас з усім необхідним. Підбираємо засоби під тип забруднення і матеріал — щоб результат вас вразив.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-3xl p-7 md:p-10 flex flex-col gap-5 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
                {item.icon}
              </div>

              {/* Name + desc */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 leading-tight">
                  {item.name}
                </h3>
                <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-8">
            Не знайшли потрібну послугу? Зателефонуйте — вирішимо будь-яке питання.
          </p>
          <a
            href="tel:+380679009315"
            className="inline-block bg-white text-[#FFC107] hover:bg-[#FFF3D6] px-10 md:px-14 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            067 900 9315
          </a>
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

