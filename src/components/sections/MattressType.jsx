"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Dummy image URLs (replace with actual images)
const mattressTypes = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "Pocketed Spring",
    subtitle: "Soft & Comfortable Mattress",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Natural Latex",
    subtitle: "Chemical Free Sleep",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Memory Foam",
    subtitle: "Space Tech Sleep System",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Rubberized Coir",
    subtitle: "Breathable Mattress",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Bonnell Spring",
    subtitle: "Back Support Spring Mattress",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Grid System",
    subtitle: "Premium Breathable Grid",
  },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mattressTypes.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
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
