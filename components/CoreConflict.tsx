'use client';

import { useEffect, useRef, useState } from 'react';

export default function CoreConflict() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/fate.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-700/5 via-transparent to-transparent opacity-50" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } text-shadow-md text-shadow-black`}
        >
          <h2 className="text-amber-700 text-3xl md:text-4xl lg:text-5xl font-(family-name:--font-heading) mb-8">
            When Destiny Breaks Its Own Rules
          </h2>
          <div className="section-divider my-8" />
        </div>

        {/* Main Conflict Text */}
        <div
          className={`transition-all flex flex-col items-center duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-primary leading-relaxed mb-8 font-(family-name:--font-heading-alt) italic text-shadow-md text-shadow-black  backdrop-blur-[2px] bg-white/5 w-fit py-2 px-4 shadow-[0_0_25px_rgb(0,0,0)] shadow-white/10 rounded-2xl">
            “From a love that defied the divine,
            <br />
            a name rose beyond fate's erasure.
            <br />
            Thrones tremble at his ascent,
            <br />
            even the ageless falter in dread.
            <br />
            His path was never shaped by choice,
            <br />
            but etched into destiny itself.”
          </p>
          <p className="text-sm md:text-base text-primary font-(family-name:--font-heading-alt) text-amber-600 italic text-shadow-md text-shadow-black">
            (A prophecy half-whispered, a world already shifting.)
          </p>
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } `}
        >
          <div className="section-divider my-8" />
          <p className="text-md/6 md:text-lg/6 lg:text-xl/6 text-muted max-w-2xl mx-auto leading-relaxed font-(family-name:--font-heading-alt) text-shadow-md text-shadow-black">
            This is not a story of choices to be made.
            <br />
            <span className="text-amber-600 font-semibold">
              It is the echo of a decisions made long before he was born.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
