import { Suspense } from "react";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import LoadingFeaturedProducts from "@/components/loaders/loading-featured-products";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFeaturedProducts />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
