"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import MenuSection from "@/components/MenuSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative w-full bg-white">
      {/* Navbar — floating transparent */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4">
        <div className="relative max-w-7xl mx-auto bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 md:px-10 py-3 flex items-center shadow-lg">

          {/* Left Navigation Links */}
          <div className="hidden md:flex flex-1 items-center gap-8 lg:gap-10 font-sans font-semibold text-sm tracking-widest uppercase text-white">
            <a href="#" className="hover:text-[#0158C4] transition-colors cursor-pointer drop-shadow">Головна</a>
            <a href="#about" className="hover:text-[#0158C4] transition-colors cursor-pointer drop-shadow">Про нас</a>
            <a href="#history" className="hover:text-[#0158C4] transition-colors cursor-pointer drop-shadow">Як ми працюємо</a>
          </div>

          {/* Logo (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold text-white tracking-wider cursor-pointer drop-shadow-md">
            <span>DaO Clean</span>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8 lg:gap-10 font-sans font-semibold text-sm tracking-widest uppercase text-white">
            <a href="#menu" className="hover:text-[#0158C4] transition-colors cursor-pointer drop-shadow">Послуги</a>
            <a href="#reviews" className="hover:text-[#0158C4] transition-colors cursor-pointer drop-shadow">Відгуки</a>
            <a href="#contacts" className="hover:text-[#0158C4] transition-colors cursor-pointer drop-shadow">Контакти</a>
            <button onClick={() => setIsCartOpen(true)} className="hover:text-[#0158C4] transition-colors cursor-pointer" aria-label="Кошик">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile: hamburger + cart */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              className="flex items-center justify-center p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <span className="text-xl font-bold text-white tracking-wider">DaO Clean</span>
            <button
              className="flex items-center justify-center p-2 text-white"
              onClick={() => setIsCartOpen(true)}
              aria-label="Кошик"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="mt-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 flex flex-col gap-4 font-sans font-semibold text-base tracking-widest uppercase text-white shadow-lg">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0158C4] transition-colors">Головна</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0158C4] transition-colors">Про нас</a>
            <a href="#history" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0158C4] transition-colors">Як ми працюємо</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0158C4] transition-colors">Послуги</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0158C4] transition-colors">Відгуки</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0158C4] transition-colors">Контакти</a>
          </div>
        )}

      {/* Hero Section */}
      <div className="relative w-full min-h-[120vh] bg-[#E8F1FA] z-10 flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/hero-shirt.jpeg')] bg-cover bg-center bg-no-repeat" />
        {/* Lighten overlay */}
        <div className="absolute inset-0 bg-white/50" />
        {/* Gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-16 flex flex-col items-start">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 bg-[#0158C4]/10 border border-[#0158C4]/20 text-[#0158C4] text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#0158C4] animate-pulse inline-block" />
            Вінниця та область • Виїзд за адресою
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-[#000000] leading-tight mb-6 max-w-2xl"
          >
            Звільніть життя від прання та складних плям.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg md:text-2xl text-[#000000]/65 font-medium mb-10 max-w-lg leading-relaxed"
          >
            Ми приїжджаємо до вас з усім необхідним — і повертаємо ваші речі бездоганно чистими. Жодних зусиль з вашого боку.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#menu"
              className="inline-block bg-[#0158C4] hover:bg-[#013A80] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Проглянути послуги
            </a>
            <a
              href="tel:+380679009315"
              className="inline-block bg-white/80 hover:bg-white text-[#0158C4] border-2 border-[#0158C4] px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              067 900 9315
            </a>
          </motion.div>
        </div>
      </div>

      {/* The new Menu Section that slides up after the animation finishes */}
      <MenuSection />

      {/* The History Section telling the story of BurgerMax */}
      <HistorySection />

      {/* About Us section describing the values */}
      <AboutSection />

      {/* Reviews Section with Infinite Image Carousel */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Shopping Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}
