"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaRegClock, FaTruck } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaAward className="text-[#FFA45B] text-3xl md:text-4xl" />,
      text: "Industry Best 12-year Warranty",
    },
    {
      icon: <FaRegClock className="text-[#FFA45B] text-3xl md:text-4xl" />,
      text: "100 Night Risk-Free Trial",
    },
    {
      icon: <FaTruck className="text-[#FFA45B] text-3xl md:text-4xl" />,
      text: "Always Free Shipping in 5-7 Business Days",
    },
  ];

  return (
    <div className="bg-[#FBF6F0] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center  text-center md:text-left space-y-3 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {benefit.icon}
              </motion.div>
              <p className="text-gray-700 text-sm md:text-base font-medium max-w-[200px]">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
