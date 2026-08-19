import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#0158C4] z-20 pt-16 md:pt-24 pb-16 md:pb-32">
      
      {/* Top Wave Divider pointing up to HistorySection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#0158C4]"
          ></path>
        </svg>
      </div>

      {/* Infinite scrolling marquee text in the background (wrapped in overflow-hidden) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none text-[#E8F1FA]">
        <div className="absolute top-1/4 left-0 w-full flex whitespace-nowrap opacity-10 -rotate-2 scale-110">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="text-[16vw] md:text-[12vw] font-black uppercase tracking-tighter"
          >
            ЗАТИШНО • НАТУРАЛЬНО • З ДУШЕЮ • СВІЖО • ЗАТИШНО • НАТУРАЛЬНО • 
          </motion.div>
        </div>
        <div className="absolute bottom-1/4 left-0 w-full flex whitespace-nowrap opacity-10 rotate-2 scale-110">
          <motion.div 
            animate={{ x: [-1000, 0] }} 
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="text-[16vw] md:text-[12vw] font-black uppercase tracking-tighter"
          >
            ЗАТИШНО • НАТУРАЛЬНО • З ДУШЕЮ • СВІЖО • ЗАТИШНО • НАТУРАЛЬНО • 
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-[#FFFFFF] flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-8 drop-shadow-sm">Хто ми такі?</h2>
          <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed mb-8 md:mb-24">
            Ми — невелика команда, яка вірить що кава й десерти можуть бути частиною теплих спогадів. 
            Готуємо так, щоб кожна чашка нагадувала смак дитинства — просто, затишно, з душею.
          </p>
        </motion.div>

        {/* MOBILE SLIDER VERSION */}
        <div className="md:hidden relative w-full max-w-5xl mx-auto px-4 mt-4">
          {/* Custom Drawn Left Arrow */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer hover:-translate-x-1 transition-transform">
             <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.1))" }}>
                <path d="M60,15 C45,35 35,45 15,50 C35,55 45,65 60,85 M20,50 C40,48 60,52 85,50" />
             </svg>
          </div>
          
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {/* Feature 1 */}
            <SwiperSlide>
              <div className="flex flex-col items-center text-center group h-full cursor-grab active:cursor-grabbing px-2 py-4">
                <div className="w-28 h-28 rounded-full border-4 border-[#E8F1FA] flex items-center justify-center mb-6 group-hover:bg-[#E8F1FA] group-hover:text-[#0158C4] transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M6 2v2M10 2v2M14 2v2"/>
                   </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif">Свіжа обсмажка</h3>
                <p className="text-xl opacity-80 font-medium">Кавові зерна обсмажуємо самі, щодня свіжа партія.</p>
              </div>
            </SwiperSlide>
            
            {/* Feature 2 */}
            <SwiperSlide>
              <div className="flex flex-col items-center text-center group h-full cursor-grab active:cursor-grabbing px-2 py-4">
                <div className="w-28 h-28 rounded-full border-4 border-[#E8F1FA] flex items-center justify-center mb-6 group-hover:bg-[#E8F1FA] group-hover:text-[#0158C4] transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m4.6 13.4-.9 5.9a2.1 2.1 0 0 0 2.5 2.4l5.8-1.5a2.1 2.1 0 0 1 1.2 0l5.8 1.5a2.1 2.1 0 0 0 2.5-2.4l-.9-5.9a2.1 2.1 0 0 0-1.2-1.5l-4.2-1.8a2.1 2.1 0 0 1-1-1.1l-1.5-4.3a2.1 2.1 0 0 0-4 0l-1.5 4.3a2.1 2.1 0 0 1-1 1.1l-4.2 1.8a2.1 2.1 0 0 0-1.2 1.5Z"/>
                   </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif">Домашня випічка</h3>
                <p className="text-xl opacity-80 font-medium">Десерти готуємо щоранку за власними рецептами.</p>
              </div>
            </SwiperSlide>

            {/* Feature 3 */}
            <SwiperSlide>
              <div className="flex flex-col items-center text-center group h-full cursor-grab active:cursor-grabbing px-2 py-4">
                <div className="w-28 h-28 rounded-full border-4 border-[#E8F1FA] flex items-center justify-center mb-6 group-hover:bg-[#E8F1FA] group-hover:text-[#0158C4] transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10"/>
                   </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif">Затишна атмосфера</h3>
                <p className="text-xl opacity-80 font-medium">Місце, де хочеться затриматись довше на чашку кави.</p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Drawn Right Arrow */}
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer hover:translate-x-1 transition-transform">
             <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.1))" }}>
                <path d="M40,15 C55,35 65,45 85,50 C65,55 55,65 40,85 M80,50 C60,48 40,52 15,50" />
             </svg>
          </div>
        </div>

        {/* DESKTOP STATIC VERSION */}
        <div className="hidden md:grid md:grid-cols-3 gap-16 w-full px-12 mt-8">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group h-full"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#E8F1FA] flex items-center justify-center mb-6 group-hover:bg-[#E8F1FA] group-hover:text-[#0158C4] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M6 2v2M10 2v2M14 2v2"/>
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Свіжа обсмажка</h3>
            <p className="text-xl opacity-80 font-medium">Кавові зерна обсмажуємо самі, щодня свіжа партія.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group h-full"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#E8F1FA] flex items-center justify-center mb-6 group-hover:bg-[#E8F1FA] group-hover:text-[#0158C4] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m4.6 13.4-.9 5.9a2.1 2.1 0 0 0 2.5 2.4l5.8-1.5a2.1 2.1 0 0 1 1.2 0l5.8 1.5a2.1 2.1 0 0 0 2.5-2.4l-.9-5.9a2.1 2.1 0 0 0-1.2-1.5l-4.2-1.8a2.1 2.1 0 0 1-1-1.1l-1.5-4.3a2.1 2.1 0 0 0-4 0l-1.5 4.3a2.1 2.1 0 0 1-1 1.1l-4.2 1.8a2.1 2.1 0 0 0-1.2 1.5Z"/>
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Домашня випічка</h3>
            <p className="text-xl opacity-80 font-medium">Десерти готуємо щоранку за власними рецептами.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group h-full"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#E8F1FA] flex items-center justify-center mb-6 group-hover:bg-[#E8F1FA] group-hover:text-[#0158C4] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10"/>
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Затишна атмосфера</h3>
            <p className="text-xl opacity-80 font-medium">Місце, де хочеться затриматись довше на чашку кави.</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider pointing down to whatever is next */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100 z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#0158C4]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
