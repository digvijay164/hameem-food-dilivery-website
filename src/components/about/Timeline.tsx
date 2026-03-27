"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, ChefHat, Truck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        icon: Leaf,
        title: "1. Fresh Sourcing",
        description: "Every morning at 5 AM, we source the freshest organic produce from local partner farms.",
    },
    {
        icon: ChefHat,
        title: "2. Artisan Preparation",
        description: "Our Locally trained chefs meticulously prepare each meal to preserve nutrients and flavor.",
    },
    {
        icon: Truck,
        title: "3. Direct Delivery",
        description: "Meals are packed in eco-friendly thermals and delivered hot, straight to your hands.",
    }
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Line drawing animation
            gsap.fromTo(".timeline-line",
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    }
                }
            );

            // Node pop animation
            gsap.utils.toArray(".timeline-node").forEach((node: any) => {
                gsap.fromTo(node, 
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: node,
                            start: "top 70%",
                        }
                    }
                );
            });

            // Content slide animation
            gsap.utils.toArray(".timeline-content").forEach((content: any, i: number) => {
                gsap.fromTo(content, 
                    { x: i % 2 === 0 ? 50 : -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: content,
                            start: "top 75%",
                        }
                    }
                );
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-balance">
                        Our  <span className="text-[var(--brand-green)]"> Food Journey</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-xl">
                        From the soil to your plate. Experience the transparency of our process.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-foreground/10 md:-translate-x-1/2 origin-top timeline-line" />

                    {events.map((event, index) => {
                        const Icon = event.icon;
                        const isEven = index % 2 !== 0; // Using odd for right side

                        return (
                            <div key={index} className={`relative flex items-center md:justify-between w-full mb-24 last:mb-0 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                                {/* Space for the other side */}
                                <div className="w-5/12 hidden md:block" />

                                {/* Center Node */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[var(--brand-green)] border-4 border-background flex items-center justify-center text-white z-10 timeline-node shadow-lg shadow-[var(--brand-green)]/30">
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <div className={`w-full md:w-5/12 pl-24 md:pl-0 timeline-content ${isEven ? "md:text-right text-left" : "text-left"}`}>
                                    <h3 className="text-3xl font-bold tracking-tight mb-4">{event.title}</h3>
                                    <p className="text-foreground/70 text-lg leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
