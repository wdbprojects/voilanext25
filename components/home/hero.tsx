import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/home/hero-carousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
          We are changing the way people shop
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          debitis voluptatum, molestiae enim qui maxime non cupiditate
          necessitatibus quas nulla.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/products">Browse products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
