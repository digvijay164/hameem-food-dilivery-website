"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsLoaded(true);
                },
            });

            // Simple, premium reveal
            tl.fromTo(
                textRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    svgRef.current,
                    { opacity: 0, scale: 0.8, rotate: -45 },
                    { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "back.out(1.7)" },
                    "-=0.5"
                )
                .to(
                    [textRef.current, svgRef.current],
                    { opacity: 0, y: -20, duration: 0.6, ease: "power2.in", delay: 0.5 }
                )
                .to(containerRef.current, {
                    yPercent: -100,
                    duration: 1,
                    ease: "power4.inOut",
                });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (isLoaded) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--brand-green)] text-white"
        >
            <div className="flex items-center gap-3">
                <svg
                    ref={svgRef}
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <h1 ref={textRef} className="text-4xl font-bold tracking-tighter">
                    hameem.
                </h1>
            </div>
        </div>
    );
}
