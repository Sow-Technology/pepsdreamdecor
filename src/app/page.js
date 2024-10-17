import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import SetPromotion from "@/components/sections/SetPromotion";
import WhyProducts from "@/components/sections/WhyProducts";
import Review from "@/components/sections/Review";
import Navbar from "@/components/Navbar";
import Features from "@/components/sections/Features";
import BestSellers from "@/components/sections/BestSellers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <BestSellers />
      {/* <ProductGrid />
      <SetPromotion />
      <WhyProducts />
      <Review /> */}
    </div>
  );
}
