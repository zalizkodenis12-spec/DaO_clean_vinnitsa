"use client";

import { useState } from "react";
import BurgerModal from "./BurgerModal";

const COFFEES = [
  { id: 1, name: "Еспресо", price: "45 ₴" },
  { id: 2, name: "Американо", price: "55 ₴" },
  { id: 3, name: "Капучино", price: "75 ₴" },
  { id: 4, name: "Лате", price: "85 ₴" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-[#0264D9] z-20 pb-32">
      {/* Top Smoother Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[150px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#0264D9]"
          ></path>
        </svg>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-[#013A80] opacity-10"></div>
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#013A80] opacity-5"></div>
        <div className="absolute top-[40%] left-[2%] w-48 h-48 rounded-full bg-[#013A80] opacity-10"></div>
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-[#013A80] opacity-5"></div>
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 rounded-full bg-[#013A80] opacity-10"></div>
        <div className="absolute bottom-[30%] right-[2%] w-40 h-40 rounded-full bg-[#013A80] opacity-5"></div>
        <div className="absolute top-[5%] left-[50%] w-24 h-24 rounded-full bg-[#013A80] opacity-10"></div>
        <div className="absolute top-[80%] left-[5%] w-72 h-72 rounded-full bg-[#013A80] opacity-5"></div>
        <div className="absolute top-[35%] right-[40%] w-56 h-56 rounded-full bg-[#013A80] opacity-10"></div>
        <div className="absolute bottom-[5%] right-[45%] w-48 h-48 rounded-full bg-[#013A80] opacity-5"></div>
        <div className="absolute top-[15%] left-[80%] w-32 h-32 rounded-full bg-[#013A80] opacity-10"></div>
        <div className="absolute bottom-[50%] left-[40%] w-64 h-64 rounded-full bg-[#013A80] opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-12 md:mb-16 tracking-wide drop-shadow-md">
          Ознайомтеся з меню DaO Clean
        </h2>
        
        {/* 2 columns grid for both mobile and desktop */}
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-12 md:gap-y-16">
          {COFFEES.map((item) => (
            <div 
              key={item.id}
              className="group flex flex-col items-center"
            >
              {/* Light blue placeholder */}
              <div className="w-full aspect-square bg-[#B0D8FF] rounded-3xl shadow-lg mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl">
              </div>
              
              {/* Text Info */}
              <h3 className="text-sm sm:text-lg md:text-4xl font-bold text-white transition-colors leading-tight text-center px-1">
                {item.name}
              </h3>
              <p className="text-xs sm:text-base md:text-3xl font-medium text-white/80 mt-1 md:mt-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-16 md:mt-24">
          <a 
            href="#catalog" 
            className="inline-block bg-[#B0D8FF] hover:bg-[#90C8FF] text-white px-10 py-4 rounded-full text-lg md:text-xl font-bold tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Дивитись ще
          </a>
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
            className="fill-[#0264D9]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
