'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show scroll to top button when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-linear-to-b from-bg-secondary to-black border-t border-amber-700/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-amber-600 text-2xl font-(family-name:--font-heading) mb-4">
                            The Secrets of CHIAROSCURO
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4 italic">
                            A dark fantasy epic where light meets shadow, love defies ancient law,
                            and destiny weaves an unlikely alliance.
                        </p>
                        <div className="section-divider mt-4 mb-0" />
                    </div>

                    {/* Reading Platforms */}
                    <div className="text-center">
                        <h4 className="text-primary text-xl font-(family-name:--font-heading) mb-4 uppercase tracking-wider">
                            Read Now
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://www.royalroad.com/fiction/125859/the-secrets-of-chiaroscuro-the-fated-heir-of-shadows"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-700/50 transition-all duration-300 group"
                            >
                                <img
                                    src="https://www.royalroad.com/icons/android-chrome-192x192.png"
                                    alt="Royal Road"
                                    className="w-6 h-6"
                                />
                                <span className="text-white group-hover:text-amber-500 transition-colors">
                                    Read on Royal Road
                                </span>
                            </a>
                            <a
                                href="https://www.wattpad.com/story/395006077-the-secrets-of-chiaroscuro-the-fated-heir-of"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-700/50 transition-all duration-300 group mb-4"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3670/3670197.png"
                                    alt="Wattpad"
                                    className="w-6 h-6"
                                />
                                <span className="text-white group-hover:text-amber-500 transition-colors">
                                    Read on Wattpad
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="text-center md:text-right">
                        <h4 className="text-primary text-lg font-(family-name:--font-heading) uppercase tracking-wider">
                            Author
                        </h4>
                        <p className="text-white text-xl font-(family-name:--font-heading-alt) mb-4 italic">
                            Pen Name - Ak31
                        </p>
                        <p className="text-muted text-sm italic mb-4">
                            Weaving tales of darkness and light
                        </p>
                        <div className="section-divider mt-4 mb-0" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-sm text-center md:text-left">
                        © {new Date().getFullYear()} CHIAROSCURO. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#hero" className="text-muted hover:text-amber-700 text-sm transition-colors">
                            Home
                        </a>
                        <a href="#characters" className="text-muted hover:text-amber-700 text-sm transition-colors">
                            Characters
                        </a>
                        <a href="#lore" className="text-muted hover:text-amber-700 text-sm transition-colors">
                            Lore
                        </a>
                        <a href="#details" className="text-muted hover:text-amber-700 text-sm transition-colors">
                            Details
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-linear-to-br from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-amber-700/50 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-700/50 to-transparent" />
        </footer>
    );
}
