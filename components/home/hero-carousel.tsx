import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroImages } from "@/lib/hero-images";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <div className="hidden px-12 md:block">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {heroImages.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={img.src}
                      alt="hero"
                      className="h-[24rem] w-full rounded-md object-cover"
                      width={200}
                      height={200}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
