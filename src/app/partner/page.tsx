import Benefits from "@/components/partner/Benefits";
import PartnerForm from "@/components/partner/PartnerForm";

export default function Partner() {
    return (
        <div className="flex flex-col">
            <div className="pt-32 pb-12 bg-background text-foreground text-center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                    Scale with <span className="text-[var(--brand-green)]">Hameem</span>.
                </h1>
                <p className="text-xl max-w-2xl mx-auto text-foreground/70 text-balance">
                    Join our network of elite cloud kitchens and home chefs. Focus on cooking, we handle the rest.
                </p>
            </div>

            <Benefits />
            <PartnerForm />
        </div>
    );
}
