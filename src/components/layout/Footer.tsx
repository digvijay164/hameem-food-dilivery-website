import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 border-b border-background/10 pb-12 mb-12 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-[var(--brand-green)]">
                            hameem
                        </Link>
                        <p className="mt-4 max-w-sm text-background/70 text-balance">
                            Premium, fresh, and delicious meals delivered directly to your door. Experience taste like never before.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-background/70 hover:text-[var(--brand-green)] transition-colors">About Us</Link></li>
                            <li><Link href="/partner" className="text-background/70 hover:text-[var(--brand-green)] transition-colors">Partner With Us</Link></li>
                            <li><Link href="/careers" className="text-background/70 hover:text-[var(--brand-green)] transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-background/70 hover:text-[var(--brand-green)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-background/70 hover:text-[var(--brand-green)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between text-background/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Hameem. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social Icons Placeholder */}
                        <div className="w-8 h-8 rounded-full bg-background/10 hover:bg-[var(--brand-green)] cursor-pointer transition-colors" />
                        <div className="w-8 h-8 rounded-full bg-background/10 hover:bg-[var(--brand-green)] cursor-pointer transition-colors" />
                        <div className="w-8 h-8 rounded-full bg-background/10 hover:bg-[var(--brand-green)] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
