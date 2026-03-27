"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const foods = [
    { 
        id: 1, 
        name: "Single Meal Box", 
        price: "$18", 
        tagLine: "Freshly prepared, balanced nutrition with premium ingredients.",
        image: "/i1.png", 
        tag: "Daily Fans" },
    { 
        id: 2, 
        name: "Monthly Subscription Meal", 
        price: "$14", 
        tagLine: "Pay once & enjoy fresh meals for 30 Day's",
        image: "/i2.png", 
        tag: "Most Affordable" },
    { 
        id: 3, 
        name: "Customize Your Meal", 
        price: "$22", 
        tagLine: "Crafted by you, Preparde by us, Just the way you like",
        image: "/food-3.png", 
        tag: "Your's Pick" },
];

export default function FoodStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 3D layered pop animation
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(card,
                    {
                        y: 100,
                        opacity: 0,
                        rotationX: 30, // 3D effect starting State
                        scale: 0.9,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        rotationX: 0,
                        scale: 1,
                        duration: 1,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom-=100",
                            toggleActions: "play none none reverse"
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
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-[var(--brand-green)] font-bold tracking-tighter mb-4 text-balance">
                        Daily Fresh <span className="text-white">Selection</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl text-lg">
                        Our partners, kitchen, prepare fresh meal daily using quality, local ingredients with no frozen, no shortcuts and no unnecessary extra, just reliable affordable food delivered on time, so you can skip daily cooking and expensive takeaway
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {foods.map((food, index) => (
                        <div
                            key={food.id}
                            ref={el => { cardsRef.current[index] = el }}
                            className="group relative bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[var(--brand-green)]/10 transition-shadow duration-500 will-change-transform"
                            style={{ perspective: "1000px" }}
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={food.image}
                                    alt={food.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--brand-green)]">
                                    {food.tag}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex justify-center items-start mb-2">
                                    <h3 className="text-xl font-bold tracking-tight">{food.name}</h3>
                                    {/* <span className="text-lg font-medium text-[var(--brand-green)]">{food.price}</span> */}
                                </div>
                                <p className="text-foreground/60 text-sm mb-4 text-center">
                                {food.tagLine}
                                    {/* Freshly prepared, balanced nutrition with premium ingredients. */}
                                </p>
                                {/* <button className="w-full py-3 rounded-xl bg-foreground/5 hover:bg-[var(--brand-green)] hover:text-white transition-colors font-medium text-sm">
                                    Add to order
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
