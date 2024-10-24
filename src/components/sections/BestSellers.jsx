"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Tartania",
    href: "#",
    imageSrc: "/p2.jpg",
    imageAlt: "Elegant white vase with minimalist design.",
    price: "Starting from ₹10,822",
  },
  {
    id: 2,
    name: "Zebimo",
    href: "#",
    imageSrc: "/p3.jpg",
    imageAlt: "Soft throw pillow in earthy tones.",
    price: "Starting from ₹14,995",
  },
  {
    id: 3,
    name: "Cameo",
    href: "#",
    imageSrc: "/p4.jpg",
    imageAlt: "Sleek wall clock with minimalist design.",
    price: "Starting from ₹18,672",
  },
  {
    id: 4,
    name: "Grand palais",
    href: "#",
    imageSrc: "/p5.jpg",
    imageAlt: "Abstract wall print in vibrant colors.",
    price: "Starting from ₹36,413",
  },
  {
    id: 5,
    name: "Double decker",
    href: "#",
    imageSrc: "/p6.jpg",
    imageAlt: "Elegant white vase with minimalist design.",
    price: "Starting from ₹76,529",
  },
  {
    id: 6,
    name: "Vivah",
    href: "#",
    imageSrc: "/p7.jpg",
    imageAlt: "Soft throw pillow in earthy tones.",
    price: "Starting from ₹47,603",
  },
  {
    id: 7,
    name: "Crystal",
    href: "#",
    imageSrc: "/p8.jpg",
    imageAlt: "Sleek wall clock with minimalist design.",
    price: "Starting from ₹47,603",
  },
];

export default function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideWidth = containerRef.current
    ? containerRef.current.offsetWidth / itemsPerView
    : 0;

  return (
    <div className="bg-[#FBF6F0] py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          className="text-5xl  text-center font-bold tracking-tight text-[#FFA45B] mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Best Sellers
        </motion.h2>

        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * slideWidth }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {[...products, ...products.slice(0, itemsPerView)].map(
              (product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className={`flex-shrink-0  px-2 ${
                    itemsPerView > 1 ? `w-1/${itemsPerView}` : "w-full"
                  }`}
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <ProductCard product={product} />
                </div>
              )
            )}
          </motion.div>
        </div>

        <div className="mt-4 flex justify-center">
          {products.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex % products.length
                  ? "bg-[#FFA45B]"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => (
  <motion.div
    className="group relative h-full  flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-lg bg-[#FBF6F0] lg:aspect-none group-hover:opacity-75">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm font-medium text-[#FFA45B]">
          <a href={product.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
      </div>
      <p className="text-sm font-medium text-[#FFA45B]">{product.price}</p>
    </div>
  </motion.div>
);
