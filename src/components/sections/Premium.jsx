"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaSnowflake,
  FaCogs,
  FaHandPaper,
  FaMemory,
  FaBolt,
  FaThermometerHalf,
} from "react-icons/fa";

const technologies = [
  {
    icon: <FaSnowflake className="text-4xl text-blue-400" />,
    title: "3X Cooling Technology",
    description: `This unique heat dissipation method incorporates the finest materials for an unparalleled experience. The combination of ALUMIGRAPH memory foam, ChillGel technology, and Cooler fabric creates a symphony that lulls you into a profound slumber.`,
  },
  {
    icon: <FaCogs className="text-4xl text-blue-400" />,
    title: "ChillGel Technology",
    description: `ChillGel technology provides the comfort of reduced pressure points and the efficient dissipation of body heat. This foam not only absorbs partner motion disturbances but also reacts to temperature variances.`,
  },
  {
    icon: <FaHandPaper className="text-4xl text-red-400" />,
    title: "Handcrafted Mattress",
    description: `Each mattress is meticulously assembled by hand. Investing hours of craftsmanship into every detail ensures that you not only get the best bed but also the best sleep.`,
  },
  {
    icon: <FaBolt className="text-4xl text-orange-500" />,
    title: "India's First Radon Free Mattress Foam",
    description: `Italiano Living mattresses are radon-free, ensuring a healthier sleep environment without any radioactive gas concerns.`,
  },
  {
    icon: <FaMemory className="text-4xl text-red-500" />,
    title: "Alumigraph Memory Foam",
    description: `Infused with aluminium, this cutting-edge technology not only grants superior pressure point relief but also extends the cool embrace throughout the night.`,
  },
  {
    icon: <FaThermometerHalf className="text-4xl text-teal-400" />,
    title: "Comfy Cool",
    description: `This fabric boasts high-temperature flow capacity due to thermal conductivity, providing a cooling sense that transcends expectations.`,
  },
  {
    icon: <FaCogs className="text-4xl text-green-400" />,
    title: "Micro Pocketed",
    description: `Micro pocketed spring on pasting layer offers targeted support and responsive bounce. Encased in fabric, these coils minimize motion transfer.`,
  },
];

const TechItem = ({ tech, index }) => (
  <motion.div
    className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="text-left text-[#FFA45B]">{tech.icon}</div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-[#FFA45B]">
        {tech.title}
      </h3>
      <p className="text-gray-700">{tech.description}</p>
    </div>
  </motion.div>
);

export default function Premium() {
  return (
    <div className="bg-[#FBF6F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-[#FFA45B] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Premium Technologies
        </motion.h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="grid grid-cols-1 gap-8">
              {technologies.map((tech, index) => (
                <TechItem key={index} tech={tech} index={index} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-start">
            <div className="sticky top-52 w-full">
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#FFA45B]">
                  Experience Premium Comfort
                </h3>
                <p className="text-gray-700 mt-2">
                  Discover the perfect blend of technology and comfort
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/1.webp"
                  alt="Premium Mattress"
                  width={600}
                  height={800}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
