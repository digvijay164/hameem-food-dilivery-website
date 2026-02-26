import Timeline from "@/components/about/Timeline";
import VideoSection from "@/components/about/VideoSection";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="pt-32 pb-12 bg-foreground text-background text-center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                    About <span className="text-[var(--brand-green)]">Us</span>.
                </h1>
                <p className="text-xl max-w-2xl mx-auto text-background/80 text-balance">
                    We believe that fast food doesn't have to be junk food. Our mission is to democratize high-quality, chef-curated meals.
                </p>
            </div>

            <Timeline />
            <VideoSection />
        </div>
    );
}
