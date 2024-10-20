"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Dummy image URLs (replace with actual images)
const mattressTypes = [
  {
    image: "/m1.png",
    title: "Pocketed Spring",
    subtitle: "Soft & Comfortable Mattress",
  },
  {
    image: "/m2.png",
    title: "Natural Latex",
    subtitle: "Chemical Free Sleep",
  },
  {
    image: "/m3.jpeg",
    title: "Memory Foam",
    subtitle: "Space Tech Sleep System",
  },
  {
    image: "/m4.jpeg",
    title: "Rubberized Coir",
    subtitle: "Breathable Mattress",
  },
  {
    image: "/m5.jpeg",
    title: "Bonnell Spring",
    subtitle: "Back Support Spring Mattress",
  },
  // {
  //   image: "/m6.png",
  //   title: "Grid System",
  //   subtitle: "Premium Breathable Grid",
  // },
];

export default function MattressTypes() {
  return (
    <div className="bg-[#FBF6F0] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold text-[#FFA45B] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shop by Mattress Type
        </motion.h2>
        <div className="flex flex-wrap items-center justify-evenly gap-4">
          {mattressTypes.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-lg shadow-md overflow-hidden w-full lg:w-[30%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative  w-full aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="aspect-square object-cover h-auto"
                  width={500}
                  height={500}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#FFA45B] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
