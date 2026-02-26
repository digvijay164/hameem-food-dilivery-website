"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Utensils, Clock, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: Utensils,
        title: "Pick Your Meal",
        description: "Browse our chef-crafted menu and choose from dozens of fresh, delicious options.",
    },
    {
        icon: Clock,
        title: "Choose Time",
        description: "Schedule your delivery for a specific time or get it as soon as possible.",
    },
    {
        icon: Truck,
        title: "Get It Today",
        description: "Enjoy your hot, fresh meal delivered directly to your doorstep.",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(stepsRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-balance">
                        How It Works
                    </h2>
                    <p className="text-foreground/60 max-w-xl mx-auto text-lg">
                        Three simple steps to enjoying premium meals at home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                ref={el => { stepsRef.current[index] = el; }}
                                className="flex flex-col items-center text-center relative group"
                            >
                                <div className="w-24 h-24 mb-6 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)] group-hover:scale-110 group-hover:bg-[var(--brand-green)] group-hover:text-white transition-all duration-300">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-3">{step.title}</h3>
                                <p className="text-foreground/70">{step.description}</p>

                                {/* Connecting arrow for desktop */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[var(--brand-green)]/30 to-transparent -z-10" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
