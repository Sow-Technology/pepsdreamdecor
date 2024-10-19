"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBed,
  FaAlignCenter,
  FaSnowflake,
  FaExpandArrowsAlt,
  FaThumbsUp,
  FaCompressArrowsAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaBed />, text: "Zero Disturbance" },
    { icon: <FaAlignCenter />, text: "Marvelous Middle" },
    { icon: <FaSnowflake />, text: "Cooler Fabric" },
    { icon: <FaExpandArrowsAlt />, text: "Super Edge Plus" },
    { icon: <FaThumbsUp />, text: "Great First Feel" },
    { icon: <FaCompressArrowsAlt />, text: "Pocketed Inner Spring" },
    { icon: <FaCalendarCheck />, text: "Up to 10 Years Warranty" },
  ];

  return (
    <div className="relative bg-[#FBF6F0] py-20">
      <motion.h2
        className="text-3xl font-bold text-center text-[#FFA45B] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Features
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center md:gap-4 gap-2 px-4">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="text-center flex flex-col items-center w-28 sm:w-40"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl sm:text-4xl mb-3 text-[#FFA45B]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">
                {feature.text}
              </p>
            </motion.div>
            {index < features.length - 1 && (
              <motion.div
                className="h-16 w-px bg-[#FFA45B] opacity-30 hidden sm:block"
                initial={{ height: 0 }}
                animate={{ height: "4rem" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FBF6F0] to-[#FFA45B] opacity-10" />
    </div>
  );
}
