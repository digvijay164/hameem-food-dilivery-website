"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Soft edge reveal and subtle scale
            gsap.fromTo(".video-wrapper",
                { scale: 0.8, borderRadius: "100px", opacity: 0 },
                {
                    scale: 1,
                    borderRadius: "32px",
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".video-wrapper",
                        start: "top 80%",
                    }
                }
            );

            // Ingredients flying in and settling
            gsap.fromTo(".ingredient-fly",
                {
                    x: () => gsap.utils.random(-400, 400),
                    y: () => gsap.utils.random(-400, 400),
                    rotation: () => gsap.utils.random(-180, 180),
                    scale: 0,
                    opacity: 0
                },
                {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.1,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".ingredients-container",
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 ingredients-container relative max-w-2xl mx-auto">
                    <div className="absolute -top-10 -left-10 text-5xl ingredient-fly">🥑</div>
                    <div className="absolute top-10 -right-12 text-5xl ingredient-fly">🍅</div>
                    <div className="absolute -bottom-10 -left-4 text-5xl ingredient-fly">🍃</div>
                    <div className="absolute -bottom-4 -right-4 text-5xl ingredient-fly">🍋</div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-balance">
                        Meet The Chef
                    </h2>
                    <p className="text-white/60 text-lg">
                        Hear the story behind Hameem from our founder and head chef.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="video-wrapper relative aspect-video w-full bg-black overflow-hidden group cursor-pointer shadow-2xl shadow-[var(--brand-green)]/20">
                        <Image
                            src="/hero-food.png" // Using the beautiful salad as a thumbnail
                            alt="Video Thumbnail"
                            fill
                            className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-[var(--brand-green)]/90 flex items-center justify-center backdrop-blur-md text-white group-hover:scale-110 group-hover:bg-[var(--brand-green)] transition-all duration-300 shadow-lg shadow-[var(--brand-green)]/30">
                                <Play className="w-8 h-8 ml-1 fill-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-green)]/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
