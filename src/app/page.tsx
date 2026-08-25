"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import MenuSection from "@/components/MenuSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative w-full bg-white">
      <PageIntro />
      {/* Navbar — classic solid yellow */}
      <div className="absolute top-0 left-0 w-full pt-4 pb-6 bg-[#FACC15] z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="relative z-10 flex items-center justify-between w-full max-w-[1400px] mx-auto px-6 md:px-16"
        >
          
          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 -ml-2 text-white z-[60] relative"
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

          {/* Desktop Left Navigation Links */}
          <div className="hidden md:flex flex-1 w-full items-center justify-evenly font-sans font-extrabold text-sm tracking-widest uppercase text-white pr-8 lg:pr-16">
            <a href="#menu" className="hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap">Послуги</a>
            <a href="#reviews" className="hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap">Відгуки</a>
            <a href="#contacts" className="hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap">Контакти</a>
          </div>

          {/* Logo (Center on mobile and desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold text-white tracking-wider cursor-pointer z-50 whitespace-nowrap">
            <span>DaO Clean</span>
          </div>

          {/* Desktop Right Navigation Links & Cart */}
          <div className="hidden md:flex flex-1 w-full items-center justify-evenly font-sans font-extrabold text-sm tracking-widest uppercase text-white pl-8 lg:pl-16 z-[60]">
            <a href="#about" className="hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap">Про нас</a>
            <a href="#history" className="hover:text-gray-200 transition-colors cursor-pointer whitespace-nowrap">Як ми працюємо</a>
            <button
              className="flex items-center justify-center text-white/70 cursor-default"
              aria-label="Кошик"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Cart Icon */}
          <div
            className="md:hidden ml-auto flex items-center justify-center p-2 -mr-2 text-white/70 z-[60] relative"
            aria-label="Кошик"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FACC15] pb-6 px-6 shadow-xl flex flex-col gap-4 font-sans font-semibold text-lg tracking-widest uppercase text-white md:hidden z-50 border-t border-white/10">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block mt-2">Про нас</a>
            <a href="#history" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Як ми працюємо</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Послуги</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Відгуки</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Контакти</a>
          </div>
        )}

        {/* Bottom Wavy SVG for Navbar */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" className="fill-[#FACC15]"></path>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-[105vh] md:min-h-[130vh] bg-[#FEF9C3] z-10 flex items-end md:items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/hero-new.jpeg')] bg-cover bg-center bg-no-repeat" />
        {/* Overlay — майже прозорий на мобільному, щоб фото було чітко видно */}
        <div className="absolute inset-0 bg-[#FEF9C3]/15 md:bg-[#FEF9C3]/80" />
        {/* Gradient — на мобільному тільки знизу під текстом, щоб фото було відкрите */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FEF9C3] via-[#FEF9C3]/60 to-transparent md:hidden" style={{ background: 'linear-gradient(to top, #fef9c3 28%, rgba(254,249,195,0.55) 52%, transparent 72%)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FEF9C3]/95 via-[#FEF9C3]/60 to-transparent hidden md:block" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-10 md:py-8 flex flex-col items-center text-center md:items-start md:text-left mb-0 md:mb-0">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-[#000000] leading-tight mb-4 max-w-xs sm:max-w-sm md:max-w-2xl drop-shadow-sm"
          >
            Зробимо<br className="md:hidden" /> меблі<br className="md:hidden" /> як нові.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.0 }}
            className="text-base sm:text-lg md:text-2xl text-[#000000]/80 md:text-[#000000]/65 font-semibold md:font-medium mb-8 max-w-xs sm:max-w-sm md:max-w-lg leading-relaxed drop-shadow-sm"
          >
            Виїзна хімчистка диванів, матраців, крісел та килимів. Приїжджаємо самі — жодних зусиль з вашого боку.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center md:justify-start"
          >
            <a
              href="#menu"
              className="flex-1 sm:flex-none flex items-center justify-center text-center bg-[#FACC15] hover:bg-[#EAB308] text-white px-6 sm:px-12 py-4 rounded-full text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 leading-tight"
            >
              Проглянути послуги
            </a>
            <a
              href="tel:+380679009315"
              className="flex-1 sm:flex-none flex items-center justify-center text-center whitespace-nowrap bg-white/80 hover:bg-white text-[#FACC15] border-2 border-[#FACC15] px-6 sm:px-12 py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 leading-tight"
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
    </main>
  );
}
