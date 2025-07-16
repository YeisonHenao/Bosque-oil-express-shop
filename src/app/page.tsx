import Image from "next/image";
import HeroComponent from "@/components/HeroComponent";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div>
      <HeroComponent >
        <HeroContent />
      </HeroComponent>
      <h1 className="text-center">Hello world</h1>
    </div>
  );
}
