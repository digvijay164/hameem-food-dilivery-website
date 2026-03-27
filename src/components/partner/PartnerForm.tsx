"use client";

import { useState, useRef } from "react";
import gsap from "gsap";

export default function PartnerForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Confetti effect using GSAP
        if (containerRef.current) {
            const colors = ["#22c55e", "#10b981", "#fbbf24", "#f43f5e", "#3b82f6"];
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement("div");
                confetti.className = "absolute w-3 h-3 rounded-sm z-50 pointer-events-none";
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = "50%";
                confetti.style.top = "50%";
                containerRef.current.appendChild(confetti);

                gsap.to(confetti, {
                    x: gsap.utils.random(-300, 300),
                    y: gsap.utils.random(-300, -500),
                    rotation: gsap.utils.random(-360, 360),
                    scale: 0,
                    opacity: 0,
                    duration: gsap.utils.random(1, 2.5),
                    ease: "power2.out",
                    onComplete: () => confetti.remove()
                });
            }
        }
    };

    return (
        <section ref={containerRef} className="py-24 bg-foreground text-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-2xl relative z-10">
                <div className="bg-background text-foreground p-8 border md:p-12 rounded-[2rem] shadow-2xl">
                    {!isSubmitted ? (
                        <>
                            <h2 className="text-3xl font-bold tracking-tighter mb-2 text-center">Become a Partner</h2>
                            <p className="text-center opacity-70 mb-8">Fill out the form below and our team will contact you within 24 hours.</p>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 pl-1">Kitchen Name</label>
                                    <input required type="text" className="w-full px-5 py-4 bg-foreground/5 dark:bg-black/20 rounded-xl border border-transparent focus:border-[var(--brand-green)] focus:bg-white dark:focus:bg-black/50 focus:outline-none transition-all" placeholder="e.g. Grandma's Recipe" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 pl-1">Full Name</label>
                                        <input required type="text" className="w-full px-5 py-4 bg-foreground/5 dark:bg-black/20 rounded-xl border border-transparent focus:border-[var(--brand-green)] focus:bg-white dark:focus:bg-black/50 focus:outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 pl-1">Phone Number</label>
                                        <input required type="tel" className="w-full px-5 py-4 bg-foreground/5 dark:bg-black/20 rounded-xl border border-transparent focus:border-[var(--brand-green)] focus:bg-white dark:focus:bg-black/50 focus:outline-none transition-all" placeholder="(555) 123-4567" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 pl-1">Email Address</label>
                                    <input required type="email" className="w-full px-5 py-4 bg-foreground/5 dark:bg-black/20 rounded-xl border border-transparent focus:border-[var(--brand-green)] focus:bg-white dark:focus:bg-black/50 focus:outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <button type="submit" className="w-full py-4 bg-[var(--brand-green)] text-white rounded-xl font-bold text-lg hover:bg-green-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[var(--brand-green)]/30">
                                    Submit Application
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-[var(--brand-green)] text-white rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                                ✓
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
                            <p className="text-lg opacity-70">We're so excited to review your application. Our team will be in touch shortly.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
