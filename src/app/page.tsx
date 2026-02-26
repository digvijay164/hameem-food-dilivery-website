import Hero from "@/components/home/Hero";
import FoodStory from "@/components/home/FoodStory";
import MenuPreview from "@/components/home/MenuPreview";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FoodStory />
      <MenuPreview />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
