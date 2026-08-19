"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacts" className="relative w-full bg-[#0158C4] text-[#FFFFFF] pt-8 pb-12 z-20">
      
      {/* Top Wave Divider pointing up to ReviewsSection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)] z-20 pointer-events-none">
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

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10 text-center md:text-left mt-2">
        
        {/* Logo and brief */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-6xl font-black text-[#FFFFFF] tracking-tighter mb-4 md:mb-6 drop-shadow-sm">AliRo</h2>
          <p className="text-[#FFFFFF]/80 text-lg leading-relaxed max-w-sm font-medium">
            Затишна кав'ярня на Вишенці. Смак, який повертає у дитинство.
          </p>
        </div>

        {/* Contacts & Socials side-by-side on mobile */}
        <div className="md:col-span-8 flex flex-row justify-between md:grid md:grid-cols-2 gap-2 md:gap-10 text-left w-full px-2">
          {/* Contacts */}
          <div className="flex flex-col items-start w-[48%] md:w-full">
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 font-serif">Контакти</h3>
            <p className="text-[#FFFFFF]/90 mb-3 text-xs md:text-xl flex items-center gap-2 font-semibold">
              <span className="text-base md:text-2xl">📍</span> вул. Келецька, 84, Вінниця
            </p>
            <p className="text-[#FFFFFF]/90 mb-4 md:mb-6 text-xs md:text-xl flex items-center gap-2 font-semibold">
              <span className="text-base md:text-2xl">📞</span> 067 900 9315
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start w-[48%] md:w-full">
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 font-serif">Слідкуй за нами</h3>
            
            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {/* Instagram */}
              <a href="https://instagram.com/aliro_vn" target="_blank" rel="noreferrer" className="group flex items-center gap-2 md:gap-4 hover:-translate-y-1 transition-transform text-left">
                <div className="w-8 h-8 md:w-14 md:h-14 bg-white text-[#0158C4] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow shrink-0">
                  <svg className="w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <span className="font-black text-[11px] sm:text-xs md:text-xl text-[#FFFFFF]">@aliro_vn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-8 md:mt-16 relative z-10 px-6">
        <p className="text-white font-black text-sm md:text-xl bg-[#0264D9] px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl inline-block shadow-md text-center">
          Пн–Нд: 10:00–21:00
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-center text-[#FFFFFF]/60 text-sm mt-12 md:mt-16 pt-8 border-t border-white/20 max-w-7xl mx-auto px-6 font-semibold">
        <span>© 2026 AliRo. Всі права захищено.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white hover:underline transition-all">Політика конфіденційності</Link>
          <Link href="/terms-of-use" className="hover:text-white hover:underline transition-all">Умови користування</Link>
        </div>
      </div>
    </footer>
  );
}
