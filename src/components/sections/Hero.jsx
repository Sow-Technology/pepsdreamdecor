"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { BoxReveal } from "../ui/box-reveal";
import { ShoppingCart } from "lucide-react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const backgroundImages = [
  { url: "/bg2.svg", name: "Premium Mattress", price: "₹24,999" },
  { url: "/products/m1.jpg", name: "Luxury Comfort", price: "₹34,999" },
  { url: "/products/m3.jpg", name: "Elite Sleep", price: "₹44,999" },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pb-16 flex flex-col gap-10 text-center h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-[#FBF6F0]"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Price Display */}
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-24 right-8 z-20 bg-white/80 backdrop-blur-md rounded-2xl p-4 text-left shadow-lg border border-[#FFA45B]/20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#FFA45B] font-medium text-lg">
              {backgroundImages[currentImageIndex].name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-gray-800">
                {backgroundImages[currentImageIndex].price}
              </span>
              <span className="text-sm text-gray-600">onwards</span>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence> */}

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-[#FFA45B] w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <Navbar />
      <div className="container mx-auto px-4 flex flex-col items-center h-full z-10">
        <BoxReveal boxColor={"#FFA45B"}>
          <motion.h1
            className="text-4xl font-medium md:text-5xl mb-4 text-[#FFA45B] z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience Sleep Like Never Before
          </motion.h1>
        </BoxReveal>
        <BoxReveal boxColor={"#FFA45B"}>
          <motion.p
            className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the best of Peps Mattresses at Peps XP. Discover the
            ultimate in sleep comfort and support.{" "}
          </motion.p>
        </BoxReveal>
        <BoxReveal boxColor={"#FFA45B"}>
          <Link href="/contact">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FFA45B] focus:ring-offset-2 focus:ring-offset-[#FBF6F0]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFA45B_0%,#FFDA77_50%,#FFA45B_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FBF6F0] px-6 py-1 text-lg font-medium text-[#FFA45B] backdrop-blur-3xl">
                  <FaPlayCircle className="h-4 w-4 mr-2" /> Experience Now{" "}
                </span>
              </button>
            </motion.div>
          </Link>
        </BoxReveal>
      </div>

      {/* Gradient Overlays */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#FBF6F0] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-t from-transparent to-[#FBF6F0] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  );
}
