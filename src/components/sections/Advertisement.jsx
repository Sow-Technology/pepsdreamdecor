"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const products = ["/ads/1.jpeg", "/ads/2.jpg"];

export default function Advetisement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slideWidth = containerRef.current
    ? containerRef.current.offsetWidth / itemsPerView
    : 0;

  return (
    <div className="bg-[#FBF6F0] py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * slideWidth }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {[...products, ...products.slice(0, itemsPerView)].map(
              (product, index) => (
                <div
                  key={index}
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
        src={product}
        alt=""
        className="h-full w-full object-contain object-center"
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
