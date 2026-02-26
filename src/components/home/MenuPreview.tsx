"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const menuItems = [
    { id: 1, name: "Grilled Herb Chicken", price: "$16", image: "/food-1.png", tag: "Hot & Fresh" },
    { id: 2, name: "Vegan Buddha Bowl", price: "$15", image: "/hero-food.png", tag: "Most Loved" },
    { id: 3, name: "Spicy Tuna Tartare", price: "$20", image: "/food-2.png", tag: "Chef's Pick" },
    { id: 4, name: "Wagyu Beef Burger", price: "$24", image: "/food-3.png", tag: "Premium" },
];

export default function MenuPreview() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 3D Tilt Effect on mousemove for cards
        const cards = document.querySelectorAll(".menu-card");

        cards.forEach(card => {
            const el = card as HTMLElement;
            const xTo = gsap.quickTo(el, "rotationY", { ease: "power3", duration: 0.6 });
            const yTo = gsap.quickTo(el, "rotationX", { ease: "power3", duration: 0.6 });

            const handleMouseMove = (e: MouseEvent) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xPct = x / rect.width - 0.5;
                const yPct = y / rect.height - 0.5;

                xTo(xPct * 20); // Max 20deg rotation
                yTo(-yPct * 20);
            };

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);
            };

            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                el.removeEventListener("mousemove", handleMouseMove);
                el.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);

    return (
        <section ref={containerRef} id="menu" className="py-24 bg-[#0f172a] text-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                            Signature Meals
                        </h2>
                        <p className="text-white/60 max-w-xl text-lg text-balance">
                            Explore our most popular dishes, combining exquisite flavors with stunning presentation.
                        </p>
                    </div>
                    <button className="hidden md:block text-[var(--brand-green)] font-medium hover:underline underline-offset-4">
                        View Full Menu &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="menu-card relative bg-[#1e293b] rounded-3xl p-4 overflow-hidden shadow-2xl transition-all duration-300"
                            style={{ perspective: 1000 }}
                        >
                            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[var(--brand-green)]">
                                    {item.tag}
                                </div>
                            </div>
                            <div className="px-2">
                                <h3 className="text-lg font-bold tracking-tight mb-1">{item.name}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-medium text-white">{item.price}</span>
                                    <button className="w-10 h-10 rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)] flex items-center justify-center hover:bg-[var(--brand-green)] hover:text-white transition-colors">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="text-[var(--brand-green)] font-medium hover:underline underline-offset-4">
                        View Full Menu &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}
