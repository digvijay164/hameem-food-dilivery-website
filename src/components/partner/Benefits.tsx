"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
    { icon: TrendingUp, title: "Boost Revenue", desc: "Increase your daily orders by up to 300%." },
    { icon: Users, title: "Reach More Customers", desc: "Access our premium user base instantly." },
    { icon: ShieldCheck, title: "Zero Hassle", desc: "We handle logistics, marketing, and support." },
];

export default function Benefits() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger benefits
            gsap.from(".benefit-card", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".benefits-grid",
                    start: "top 80%",
                }
            });

            // Process steps animation
            gsap.from(".process-step", {
                scale: 0.8,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: ".process-container",
                    start: "top 75%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background z-10 relative">
            <div className="container mx-auto px-6">
                {/* Benefits Grid */}
                <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {benefits.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <div key={i} className="benefit-card bg-foreground/5 p-8 rounded-3xl text-center hover:bg-[var(--brand-green)] hover:text-white transition-colors duration-300 group">
                                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[var(--brand-green)] mb-6 shadow-md group-hover:scale-110 transition-transform">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                                <p className="opacity-80 leading-relaxed">{b.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Process Steps */}
                <div className="process-container text-center">
                    <h2 className="text-4xl font-bold tracking-tighter mb-16">How It Works</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
                        {/* Desktop connecting line */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-[var(--brand-green)]/20 -z-10" />

                        {[
                            { num: "1", title: "Apply", icon: "📝" },
                            { num: "2", title: "Onboard", icon: "🤝" },
                            { num: "3", title: "Cook & Earn", icon: "🍳" }
                        ].map((step, i) => (
                            <div key={i} className="process-step w-full md:w-64 bg-white dark:bg-[#1e293b] p-6 rounded-3xl border-2 border-transparent hover:border-[var(--brand-green)] transition-all duration-300 shadow-xl relative z-10 group">
                                <div className="w-12 h-12 bg-[var(--brand-green)] text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-6 left-1/2 -translate-x-1/2 shadow-lg group-hover:scale-110 transition-transform">
                                    {step.num}
                                </div>
                                <div className="text-5xl my-6 group-hover:scale-125 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
