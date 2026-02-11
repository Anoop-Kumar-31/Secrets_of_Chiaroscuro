'use client';

import { useState, useEffect, useRef } from 'react';
import { lore } from '@/data/lore';

const themeColors: Record<string, { border: string; glow: string; bg: string, text: string }> = {
  origin: {
    border: 'border-slate-600',
    glow: 'text-shadow-slate-300',
    bg: 'bg-gradient-to-r from-slate-700/15 to-transparent',
    text: 'text-slate-500'
  },
  war: {
    border: 'border-red-700',
    glow: 'text-shadow-red-700',
    bg: 'bg-gradient-to-r from-red-700/15 to-transparent',
    text: 'text-red-500'
  },
  prophecy: {
    border: 'border-yellow-700',
    glow: 'text-shadow-yellow-700',
    bg: 'bg-gradient-to-r from-yellow-700/15 to-transparent',
    text: 'text-yellow-500'
  },
  secrecy: {
    border: 'border-amber-700',
    glow: 'text-shadow-amber-700',
    bg: 'bg-gradient-to-r from-amber-700/15 to-transparent',
    text: 'text-amber-500'
  },
  future: {
    border: 'border-purple-700',
    glow: 'text-shadow-purple-700',
    bg: 'bg-gradient-to-r from-purple-700/15 to-transparent',
    text: 'text-purple-500'
  },
};

export default function WorldLoreSection() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const sectionRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) {
              setVisibleSections((prev) => new Set(prev).add(Number(id)));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleSection = (id: number) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="lore" className="relative py-20 px-4 bg-linear-to-b from-bg-secondary via-bg-primary to-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-glow-gold text-4xl md:text-5xl font-(family-name:--font-heading) mb-4">
            World & Lore
          </h2>
          <p className="text-muted text-lg md:text-xl font-(family-name:--font-heading-alt) italic">
            Uncover the Secrets of CHIAROSCURO
          </p>
          <div className="section-divider my-8" />
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {lore.map((section, index) => {
            const isExpanded = expandedSections.has(section.id);
            const isVisible = visibleSections.has(section.id);
            const isHovered = hoveredSection === section.id;
            const colors = themeColors[section.theme] || themeColors.origin;

            return (
              <div
                key={section.id}
                ref={(el) => {
                  if (el) sectionRefs.current.set(section.id, el);
                }}
                data-section-id={section.id}
                className={`overflow-hidden transition-all duration-700 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  backgroundImage: `url("${section.img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50 -z-10" />
                {/* Theme-specific colored overlay - only on hover */}
                <div
                  className={`absolute inset-0 ${colors.bg} -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full text-left px-8 py-15 flex items-center justify-between transition-all duration-300 hover:bg-white/5 cursor-pointer ${isExpanded ? colors.bg : ''
                    }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className={`text-2xl md:text-3xl font-(family-name:--font-heading) ${colors.glow} text-shadow-[0_0_10px_rgba(0,0,0,1)] `}
                      >
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted text-sm md:text-base italic text-shadow-md text-shadow-black">
                      {section.era}
                    </p>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 shrink-0 ml-4 ${isExpanded ? `rotate-180 ${colors.text}` : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px]' : 'max-h-0'
                    }`}
                >
                  <div className={`p-6 pt-0 border-t ${colors.border} border-opacity-20`}>
                    <pre className="text-primary leading-relaxed text-base md:text-lg font-(family-name:--font-heading-alt) italic whitespace-pre-wrap text-shadow-md text-shadow-black">
                      {section.content}
                    </pre>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mysterious Footer Text */}
        <div className="text-center text-muted text-sm italic my-10">
          <p>The story has only just begun...</p>
          <p className="mt-2 text-xs opacity-50">More truths await.</p>
        </div>
      </div>
    </section>
  );
}
