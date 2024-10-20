"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Mattress",
    description:
      "Experience ultimate comfort and unparalleled support with our premium Peps Mattresses. Designed to provide the perfect balance of softness and firmness, they ensure you wake up refreshed every morning.",
    imageSrc: "/fp1.jpg",
    alt: "Premium Peps Mattress",
  },
  {
    id: 2,
    name: "Pillow",
    description:
      "Rest your head on our luxurious Peps Pillows for a peaceful slumber. Designed for optimal neck and head support, our pillows offer the comfort you need for a rejuvenating sleep.",
    imageSrc: "/fp2.jpg",
    alt: "Luxurious Peps Pillow",
  },
  {
    id: 3,
    name: "Accessories",
    description:
      "Transform your bedroom into a sanctuary with our exquisite Peps Accessories. From cozy comforters to stylish cushions, our accessories add elegance and comfort to your sleep space.",
    imageSrc: "/fp3.jpg",
    alt: "Exquisite Peps Accessories",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FBF6F0] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl  font-bold text-center text-[#FFA45B] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="relative h-64">
        <Image
          src={product.imageSrc}
          alt={product.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#FFA45B] mb-3">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Link href="/contact">
          <motion.button
            className="bg-[#FFA45B] text-white px-6 py-2 rounded-full hover:bg-[#FFDA77] hover:text-[#FFA45B] transition-colors duration-300 flex gap-2 items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Now <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
