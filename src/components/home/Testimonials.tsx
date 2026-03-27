"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    { name: "Akhil Shaikh", role: "Student", text: "The quality is simply unmatched. It feels like dining at a 5 star food in my own home.", rating: 5, emoji: "💯" },
    { name: "Digvijay Desai", role: "Software Engineeer", text: "Finally, healthy food that actually tastes amazing. Clean ingredients and perfect portion sizes.", rating: 5, emoji: "🔥" },
    { name: "Mahaveer Magdum", role: "Busy Professional", text: "Hameem saves me so much time without compromising on flavor. The delivery is always on point.", rating: 5, emoji: "❤️" },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".review-card", {
                scale: 0.9,
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-foreground text-background">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-balance">
                        Loved By Thousands
                    </h2>
                    <p className="text-background/60 max-w-xl mx-auto text-lg">
                        Don't just take our word for it. See what our customers are saying.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="review-card bg-background/5 p-8 rounded-3xl border border-background/10 hover:border-[var(--brand-green)]/50 transition-colors group relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 pointer-events-none filter grayscale group-hover:grayscale-0">
                                {review.emoji}
                            </div>

                            <div className="flex gap-1 mb-6 text-[var(--brand-green)]">
                                {Array(review.rating).fill(0).map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg mb-8 italic relative z-10">&ldquo;{review.text}&rdquo;</p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center font-bold text-xl">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <span className="text-background/50 text-sm">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
