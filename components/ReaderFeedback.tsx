'use client';

import { useState } from 'react';

export default function ReaderFeedback() {
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mzdajdpr', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch (err) {
            setStatus('ERROR');
        }
    };

    return (
        <section id="feedback" className="py-16 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-10 space-y-3">
                    <h2 className="text-glow-ember text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">Feedback & Questions</h2>
                    <div className="w-16 h-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                    <p className="text-muted text-base max-w-lg mx-auto opacity-80">
                        Have a question or want to share your thoughts? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="glass-card p-6 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl">
                    {/* Animated Background Highlights */}
                    <div className="absolute -top-20 -left-20 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-1000" />
                    <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-red-900/10 blur-[80px] rounded-full group-hover:bg-red-900/20 transition-colors duration-1000" />

                    {status === 'SUCCESS' ? (
                        <div className="text-center py-12 animate-fade-in space-y-5">
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-125 animate-pulse" />
                                <div className="relative w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto border-4 border-white/20 shadow-xl">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold text-white">Message Sent</h3>
                                <p className="text-muted text-base">Thank you! Your thoughts have been received.</p>
                            </div>
                            <button
                                onClick={() => setStatus('IDLE')}
                                className="btn-gold mt-2 hover:scale-105 transition-transform duration-300 shadow-lg shadow-amber-500/20 text-sm py-2 px-6"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-semibold text-amber-500/90 tracking-wider">NAME OR ALIAS</label>
                                <div className="relative group/input">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="E.g. Shadow Dancer or Hero"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/8 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-white/20 text-base shadow-inner"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-focus-within/input:w-full transition-all duration-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-semibold text-amber-500/90 tracking-wider">SUBJECT</label>
                                <div className="relative group/input">
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/8 focus:ring-4 focus:ring-amber-500/10 transition-all appearance-none cursor-pointer text-base shadow-inner"
                                    >
                                        <option value="Comment" className="bg-[#0b0b0b]">General Comment</option>
                                        <option value="Question" className="bg-[#0b0b0b]">A Question for the Author</option>
                                        <option value="Theory" className="bg-[#0b0b0b]">Novel Theory</option>
                                        <option value="Feedback" className="bg-[#0b0b0b]">Website Feedback</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold text-amber-500/90 tracking-wider">MESSAGE</label>
                                <div className="relative group/input">
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Your message goes here..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/8 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-white/20 resize-none text-base shadow-inner"
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-focus-within/input:w-full transition-all duration-500" />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'SUBMITTING'}
                                    className="w-full py-4 rounded-lg bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg tracking-wide shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3 overflow-hidden"
                                >
                                    {status === 'SUBMITTING' ? (
                                        <span className="w-5 h-5 border-3 border-black/20 border-t-black rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span className="relative z-10">Send Message</span>
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>

                            {status === 'ERROR' && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 animate-fade-in flex items-center justify-center gap-2 text-red-500 text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span>Error sending message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
