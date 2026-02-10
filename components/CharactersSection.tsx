'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { characters } from '@/data/characters';

//make it for drop shadow and text shadow both

const themeShadow: Record<string, { text: string, drop: string }> = {
  amber: { text: "text-shadow-amber-700", drop: "drop-shadow-amber-700" },
  cyan: { text: "text-shadow-cyan-700", drop: "drop-shadow-cyan-700" },
  crimson: { text: "text-shadow-red-700", drop: "drop-shadow-red-700" },
  rose: { text: "text-shadow-rose-700", drop: "drop-shadow-rose-700" },
  gold: { text: "text-shadow-yellow-700", drop: "drop-shadow-yellow-700" },
  steel: { text: "text-shadow-slate-500", drop: "drop-shadow-slate-500" },
  ivory: { text: "text-shadow-neutral-400", drop: "drop-shadow-neutral-400" },
  obsidian: { text: "text-shadow-zinc-800", drop: "drop-shadow-zinc-800" },
  green: { text: "text-shadow-green-500", drop: "drop-shadow-green-500" },
  red: { text: "text-shadow-red-700", drop: "drop-shadow-red-700" },
  yellow: { text: "text-shadow-yellow-700", drop: "drop-shadow-yellow-700" },
};


export default function CharactersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isTransitioning) return;

      // Only enable scroll behavior on desktop (md breakpoint and above)
      const isMobile = window.innerWidth < 768; // md breakpoint is 768px
      if (isMobile) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);

      // Calculate which character should be shown based on scroll position
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollProgress * characters.length)),
        characters.length - 1
      );

      if (newIndex !== activeIndex) {
        setIsTransitioning(true);
        setActiveIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, isTransitioning]);

  // Touch swipe handling for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum distance for a swipe
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) < swipeThreshold) return;

      if (diff > 0) {
        // Swiped left - go to next character
        if (activeIndex < characters.length - 1) {
          setActiveIndex(activeIndex + 1);
        }
      } else {
        // Swiped right - go to previous character
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
        }
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('touchstart', handleTouchStart);
      section.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (section) {
        section.removeEventListener('touchstart', handleTouchStart);
        section.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeIndex]);

  return (
    [
      <section className='w-screen flex items-center justify-center'>
        <p className='text-4xl font-bold md:text-5xl font-[family-name:var(--font-heading)] mb-4'>Characters</p>
      </section>
      ,
      <section
        id="characters"
        ref={sectionRef}
        className="relative bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary"
        style={{ height: isMobile ? '100vh' : `${characters.length * 110}vh` }}
      >
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Character Cards - Stacked */}
          {characters.map((character, index) => (
            <div
              key={character.id}
              className={`absolute inset-0 flex flex-col md:flex-row items-center transition-all duration-700 ease-out ${index === activeIndex
                ? 'opacity-100 translate-x-0'
                : index < activeIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
                }`}
            >
              {/* Left Side - Character Details */}
              {/* Character Image - Mobile Only (Top) */}
              <div className="w-full md:hidden h-auto flex items-end justify-center relative overflow-hidden mb-4">
                <div className="relative w-full h-auto flex items-end justify-center">
                  <img
                    src={character.image}
                    alt={character.name}
                    className={`
                      w-full
                      h-auto
                      max-h-96
                      object-contain
                      ${themeShadow[character.theme]?.drop}
                      drop-shadow-[0_0_30px_rgba(139,0,0,0.5)]
                    `}
                  />
                  <div className='absolute h-full w-full bg-gradient-to-b from-transparent from-75% to-black z-40' />
                </div>
              </div>

              {/* Left Side - Character Details */}
              <div className="w-full md:w-1/2 md:h-full flex items-center justify-center px-4 md:pl-12 lg:pl-20 md:pr-0">
                <div className="glass-card p-6 md:p-12 max-w-xl w-full relative backdrop-blur-2xl bg-white/5 z-50">
                  {/* Character Number */}
                  <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent-crimson to-accent-ember flex items-center justify-center text-lg md:text-2xl font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Name */}
                  <h2 className={`${themeShadow[character.theme]?.text} text-shadow-md text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4 font-[family-name:var(--font-heading)]`}>
                    {character.name}
                  </h2>

                  {/* Title */}
                  <p className={`${themeShadow[character.theme]?.text} text-shadow-md text-base md:text-xl lg:text-2xl mb-4 md:mb-6 font-[family-name:var(--font-heading-alt)] italic`}>
                    {character.title}
                  </p>

                  {/* Divider */}
                  <div className="section-divider my-4 md:my-6" />

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div>
                      <p className="text-muted text-xs md:text-sm uppercase tracking-wider font-bold">Role:</p>
                      <p className="text-primary text-sm md:text-lg italic">{character.role}</p>
                    </div>
                    <div>
                      <p className="text-muted text-xs md:text-sm uppercase tracking-wider font-bold">Nature:</p>
                      <p className="text-primary text-sm md:text-lg italic">{character.nature}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-muted text-xs md:text-sm uppercase tracking-wider font-bold">Power:</p>
                      <p className="text-accent-gold text-sm md:text-lg italic">{character.powerType}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-primary leading-relaxed text-sm md:text-base lg:text-lg italic border-t-2 md:border-t-0 pt-2 md:pt-0 md:border-l-3 border-amber-700 pl-3 md:pl-4">
                    "{character.description}"
                  </p>
                </div>
              </div>

              {/* Right Side - Character Image */}
              <div className="hidden md:flex h-full items-center justify-end relative w-fit overflow-visible md:w-1/2">
                <div className="relative h-full flex items-center justify-end overflow-visible overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className={`
                    md:h-full 
                    md:w-auto
                    w-full
                    max-w-none
                    object-contain
                    ${themeShadow[character.theme]?.drop}
                    drop-shadow-[0_0_30px_rgba(139,0,0,0.5)]
                    relative
                    right-0
                  `}
                  />

                  <div className='absolute h-full w-full bg-gradient-to-b from-transparent from-75% to-black z-40' />
                </div>
              </div>

            </div>
          ))}

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
            <p className="text-sm uppercase tracking-widest">{isMobile ? 'Swipe' : 'Scroll'} to Explore</p>
            <div className="flex gap-2">
              {characters.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex
                    ? 'w-12 h-2 bg-white '
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>]
  );
}
