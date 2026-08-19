"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import MenuSection from "@/components/MenuSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import PageIntro from "@/components/PageIntro";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative w-full bg-white">
      <PageIntro />
      {/* Navbar — classic solid blue */}
      <div className="absolute top-0 left-0 w-full pt-4 pb-6 bg-[#0158C4] z-50">
        <div className="relative z-10 flex items-center w-full px-6 md:px-16">
          {/* Left Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pr-12 lg:pr-32 font-sans font-extrabold text-sm tracking-widest uppercase text-white">
            <a href="#about" className="hover:text-gray-200 transition-colors cursor-pointer">Про нас</a>
            <a href="#history" className="hover:text-gray-200 transition-colors cursor-pointer">Як ми працюємо</a>
          </div>

          {/* Logo (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold text-white tracking-wider cursor-pointer">
            <span>DaO Clean</span>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pl-12 lg:pl-32 font-sans font-extrabold text-sm tracking-widest uppercase text-white">
            <a href="#menu" className="hover:text-gray-200 transition-colors cursor-pointer">Послуги</a>
            <a href="#reviews" className="hover:text-gray-200 transition-colors cursor-pointer">Відгуки</a>
            <button onClick={() => setIsCartOpen(true)} className="hover:text-gray-200 transition-colors cursor-pointer" aria-label="Кошик">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-white z-[60] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Cart Icon */}
          <button
            className="md:hidden ml-auto flex items-center justify-center p-2 text-white z-[60] relative"
            onClick={() => setIsCartOpen(true)}
            aria-label="Кошик"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0158C4] pb-6 px-6 shadow-xl flex flex-col gap-4 font-sans font-semibold text-lg tracking-widest uppercase text-white md:hidden z-50 border-t border-white/10">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Головна</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Про нас</a>
            <a href="#history" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Як ми працюємо</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Послуги</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Відгуки</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Контакти</a>
          </div>
        )}

        {/* Bottom Wavy SVG for Navbar */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" className="fill-[#0158C4]"></path>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-[130vh] bg-[#E8F1FA] z-10 flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/hero-shirt.jpeg')] bg-cover bg-center bg-no-repeat" />
        {/* Lighten overlay — stronger */}
        <div className="absolute inset-0 bg-white/65" />
        {/* Gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col items-start">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-[#000000] leading-tight mb-6 max-w-2xl"
          >
            Звільніть життя від прання.
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
