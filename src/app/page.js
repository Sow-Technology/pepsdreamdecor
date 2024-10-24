import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import SetPromotion from "@/components/sections/SetPromotion";
import WhyProducts from "@/components/sections/WhyProducts";
import Review from "@/components/sections/Review";
import Navbar from "@/components/Navbar";
import Features from "@/components/sections/Features";
import BestSellers from "@/components/sections/BestSellers";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Benefits from "@/components/sections/Benefits";
import MattressTypes from "@/components/sections/MattressType";
import Footer from "@/components/Footer";
import Featured from "@/components/sections/Featured";
import Premium from "@/components/sections/Premium";
import Advetisement from "@/components/sections/Advertisement";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      <Advetisement />
      <div className="bg-white overflow-hidden">
        <Featured />
      </div>
      <FeaturedProducts />
      <BestSellers />
      <MattressTypes />
      <Premium />
      <Review />
      <Footer />
    </div>
  );
}
