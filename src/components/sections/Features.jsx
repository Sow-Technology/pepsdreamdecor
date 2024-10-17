"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, HeadphonesIcon, LockIcon } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Free Shipping Across India",
    description: "On all orders",
  },
  {
    icon: <HeadphonesIcon className="w-10 h-10" />,
    title: "Support",
    description: "Monday - Saturday\n9.00 am to 6.00 pm",
  },
  {
    icon: <LockIcon className="w-10 h-10" />,
    title: "100% Secure Checkout",
    description: "Visa / Master Card",
  },
];

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r  opacity-30" />
      <div className="relative bg-white/40 bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 h-full flex flex-col items-center text-center">
        <motion.div
          className="text-[#FFA45B] mb-6"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-[#FFA45B]">{title}</h3>
        <p className="text-gray-800 whitespace-pre-line">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FBF6F0]" />
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFA45B] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" /> */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFDA77] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#AEE6E6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FFA45B]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
