"use client";

import { useState } from "react";

import MenuSection from "@/components/MenuSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative w-full bg-white">
      {/* Absolute Top Navigation Bar (Disappears on scroll) */}
      <div className="absolute top-0 left-0 w-full pt-4 pb-6 bg-[#0158C4] z-50">
        <div className="relative z-10 flex items-center w-full px-6 md:px-16">
          {/* Left Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pr-12 lg:pr-32 font-sans font-semibold text-sm tracking-widest uppercase text-white">
            <a href="#" className="hover:text-gray-200 transition-colors cursor-pointer">Головна</a>
            <a href="#about" className="hover:text-gray-200 transition-colors cursor-pointer">Про нас</a>
            <a href="#history" className="hover:text-gray-200 transition-colors cursor-pointer">Історія</a>
          </div>

          {/* Logo (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold text-white tracking-wider cursor-pointer">
            <span>DaO Clean</span>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pl-12 lg:pl-32 font-sans font-semibold text-sm tracking-widest uppercase text-white">
            <a href="#menu" className="hover:text-gray-200 transition-colors cursor-pointer">Меню</a>
            <a href="#reviews" className="hover:text-gray-200 transition-colors cursor-pointer">Відгуки</a>
            <a href="#contacts" className="hover:text-gray-200 transition-colors cursor-pointer">Контакти</a>
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
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0158C4] pb-6 px-6 shadow-xl flex flex-col gap-4 font-sans font-semibold text-lg tracking-widest uppercase text-white md:hidden z-50 border-t border-white/10">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Головна</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Про нас</a>
            <a href="#history" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Історія</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Меню</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Відгуки</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors cursor-pointer block">Контакти</a>
          </div>
        )}

        {/* Bottom Wavy SVG for Navbar */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              className="fill-[#0158C4]"
            ></path>
          </svg>
        </div>
      </div>

      {/* Hero Section - Solid Background */}
      <div className="relative w-full h-[150vh] bg-[#E8F1FA] z-10">
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
