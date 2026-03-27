"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function FloatingIngredients() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-4, 2, -5]}>
                <Text fontSize={1.5}>🍃</Text>
            </Float>
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5} position={[4, -1, -3]}>
                <Text fontSize={1.2}>🍅</Text>
            </Float>
            <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.8} position={[-5, -3, -4]}>
                <Text fontSize={1.2}>🥑</Text>
            </Float>
            <Float speed={1.8} rotationIntensity={1} floatIntensity={1.2} position={[5, 3, -6]}>
                <Text fontSize={1.8}>🌶️</Text>
            </Float>
        </>
    );
}

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Basic entrance animation
            gsap.from(textRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 2, // Wait for preloader
            });

            gsap.from(imageRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                delay: 2.2,
            });

            // Parallax on scroll
            gsap.to(imageRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full h-screen overflow-hidden flex items-center bg-[var(--color-hameem-dark)]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div ref={imageRef} className="relative w-full h-full transform will-change-transform">
                    {/* <Image
                        src="/hero-food.png"
                        alt="Delicious fresh meal"
                        fill
                        className="object-cover opacity-60"
                        priority
                    /> */}
                    <video
                        src="/hero-setion.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                </div>
            </div>

            {/* 3D Ingredients Canvas */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <FloatingIngredients />
                </Canvas>
            </div>

            {/* Content */}
            <div className="container relative  flex items-center justify-center text-center z-20 mx-auto px-6 ">
                <div ref={textRef} className="max-w-3xl text-white">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 drop-shadow-lg">
                        Fresh Food<br />
                        <span className="text-[var(--brand-green)]">Fresh Energy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl text-balance drop-shadow-md">
                        {/* Premium, healthy, and delicious meals crafted by chefs and delivered to your door in minutes. */}
                        Fresh and affordable everyday meals for students and professional delivered fast 
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/order"
                            className="bg-[var(--brand-green)] text-white px-8 py-4 rounded-full font-medium text-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform"
                        >
                            Order Fresh Meals
                        </Link>
                        <Link
                            href="#menu"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-colors"
                        >
                            See Menu
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
