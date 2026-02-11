'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/images/hero/Hero_1.png',
  '/images/hero/Hero_2.png',
  '/images/hero/Hero_3.png',
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden mb-10">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={`blur-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt=""
              fill={true}
              className="object-cover md:blur-[1px] scale-100 brightness-50"
              quality={50}
            />
          </div>
        ))}
      </div>

      {/* Main Slider Images */}
      <div className="absolute inset-0 hidden md:block">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`CHIAROSCURO Hero ${index + 1}`}
              fill={true}
              priority={index === 0}
              className="object-contain"
              quality={100}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        ))}
      </div>

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:block left-4 md:left-8 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden md:block right-4 md:right-8 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 animate-fade-in w-[90%] md:w-[65%] text-shadow-lg/30">
        <h1 className="text-glow-gold mb-6">
          The Secrets of CHIAROSCURO
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-8 font-(family-name:--font-heading-alt) italic">
          The Fated Heir of Shadows and Light
        </p>
        <p className="max-w-2xl mx-auto text-md leading-relaxed mb-10">
          In a world where supernatural royalty reigns beneath the veil of human ignorance,
          destiny draws an unlikely alliance. When light meets shadow, love defies ancient law,
          and betrayal echoes through eternity.
        </p>

        <div className="flex flex-col gap-6 items-center ">
          {/* Reading Platform Options */}
          <div className="flex gap-5 justify-center flex-wrap">
            <p className="text-[#dfa934] underline italic">Read on:</p>
            <a
              href="https://www.wattpad.com/story/395006077-the-secrets-of-chiaroscuro-the-fated-heir-of"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-500"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670197.png"
                alt="Wattpad"
                className="w-8 h-8"
              />
              Wattpad
            </a>
            <a
              href="https://www.royalroad.com/fiction/125859/the-secrets-of-chiaroscuro-the-fated-heir-of-shadows"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-500"
            >
              <img
                src="https://www.royalroad.com/icons/android-chrome-192x192.png"
                alt="Royal Road"
                className="w-8 h-8"
              />
              Royal Road
            </a>
          </div>

          {/* Secondary CTA */}
          {/* onclick send user to div with id "characters"*/}
          <button
            className="btn-primary text-white"
            onClick={() => {
              document.getElementById("characters")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Slider Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentSlide
              ? 'w-12 h-3 bg-white '
              : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
