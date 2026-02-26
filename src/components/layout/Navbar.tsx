"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-foreground/5 transition-colors">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-[var(--brand-green)]">
                    hameem.
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-medium">
                    <Link href="/" className="hover:text-[var(--brand-green)] transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-[var(--brand-green)] transition-colors">About Us</Link>
                    <Link href="/partner" className="hover:text-[var(--brand-green)] transition-colors">Partner With Us</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 hover:bg-foreground/5 rounded-full transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--brand-green)] rounded-full"></span>
                    </button>
                    <Link
                        href="/order"
                        className="hidden md:inline-flex bg-[var(--brand-green)] text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-green-500/20 hover:scale-105 transition-transform active:scale-95"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </header>
    );
}
