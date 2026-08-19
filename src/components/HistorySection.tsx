"use client";

import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <section id="history" className="relative w-full bg-[#E8F1FA] z-10 flex flex-col md:flex-row">
      
      {/* Left Side: Header Image (Sticky only on desktop) */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative md:sticky top-0 bg-[#F9F9F9] flex flex-col items-center justify-center overflow-hidden">
        {/* Light background image */}
        <div className="absolute inset-0 opacity-60 bg-[url('/photo-rubashki3.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#E8F1FA]/70"></div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#000000] relative z-10 text-center mb-4 md:mb-6 drop-shadow-sm px-4 whitespace-nowrap">
          Як ми працюємо
        </h2>
        <div className="w-16 md:w-24 h-1 bg-[#0158C4] relative z-10 mb-4 md:mb-6"></div>
        <p className="text-[#000000]/80 text-lg md:text-2xl font-medium relative z-10 font-sans text-center px-8">
          3 прості кроки
        </p>
      </div>

      {/* Right Side: Scrolling Content */}
      <div className="w-full md:w-1/2 bg-[#E8F1FA] flex flex-col py-16 md:py-[20vh] px-6 md:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-16 md:mb-[25vh]"
        >
          <span className="text-[#0158C4] font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-4 block">01</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#000000] mb-4 md:mb-6 leading-tight">Заявка</h3>
          <p className="text-lg md:text-xl text-[#000000]/80 leading-relaxed font-medium">
            Залишаєте заявку на нашому сайті, вказуючи тип виробу, який потребує чистки, або просто телефонуєте нам. Наш менеджер оперативно зв'яжеться з вами, проконсультує щодо деталей, зорієнтує по вартості та допоможе підібрати найзручніший для вас день і час для приїзду спеціаліста.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-16 md:mb-[25vh]"
        >
          <span className="text-[#0158C4] font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-4 block">02</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#000000] mb-4 md:mb-6 leading-tight">Виїзд та обробка</h3>
          <p className="text-lg md:text-xl text-[#000000]/80 leading-relaxed font-medium">
            Наш кваліфікований майстер приїжджає до вас із усім необхідним професійним обладнанням та безпечними еко-засобами. Залежно від типу забруднень та матеріалу, ми виконуємо чистку прямо на місці (наприклад, для диванів чи килимів) або обережно забираємо ваші речі до нашого цеху для глибокої спеціалізованої обробки.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-8 md:mb-[10vh]"
        >
          <span className="text-[#0158C4] font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-4 block">03</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#000000] mb-4 md:mb-6 leading-tight">Результат</h3>
          <p className="text-lg md:text-xl text-[#000000]/80 leading-relaxed font-medium">
            Після завершення всіх етапів чистки та сушіння, ми ретельно перевіряємо якість виконаної роботи. Ви отримуєте свої речі у бездоганно чистому, свіжому та охайному вигляді — без плям і неприємних запахів. Гарантуємо дбайливе ставлення до тканин, швидко і без зайвих клопотів.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
