"use client";
import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { BoxReveal } from "../ui/box-reveal";
import { ShoppingCart } from "lucide-react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#FBF6F0] pb-16 flex flex-col gap-10 text-center bg-[url('/bg2.svg')] h-screen bg-cover bg-center relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 flex flex-col items-center  h-full z-10">
        <BoxReveal boxColor={"#FFA45B"}>
          <motion.h1
            className="text-4xl font-medium md:text-5xl  mb-4 text-[#FFA45B] z-10"
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
            Experience the best of Peps Mattresses at Peps XP. Discover the
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
