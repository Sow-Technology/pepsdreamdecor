"use client";
import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    name: "PRABHAKAR CH",
    time: "5 days ago on Google",
    rating: 5,
    comment: "Awesome time for my kid",
  },
  {
    name: "Kusuma Ernest",
    time: "7 days ago on Google",
    rating: 5,
    comment:
      "Lovely place for the kids who love legos. They have a lot of legos and themes",
  },
  {
    name: "Sony Sunny George",
    time: "10 days ago on Google",
    rating: 5,
    comment:
      "Great place! More than 2 mill plus pieces! You can make any thing and will be...",
  },
  {
    name: "archana rajput",
    time: "10 days ago on Google",
    rating: 5,
    comment:
      "The place is very interesting and the staffs are helpful. Parents can sit and relax...",
  },
  {
    name: "Aishwarya John",
    time: "10 days ago on Google",
    rating: 5,
    comment:
      "Great place for kids to enjoy, make time and go as if they want to build...",
  },
  {
    name: "MELNA MATHEW",
    time: "17 days ago on Google",
    rating: 5,
    comment:
      "My kids enjoyed spending time here...it’s a new concept..All the very best",
  },
  {
    name: "Srishti Kalra",
    time: "18 days ago on Google",
    rating: 5,
    comment:
      "It's a very good and thoughtful place. My child had a wonderful time.",
  },
  {
    name: "Sneha Jain",
    time: "18 days ago on Google",
    rating: 5,
    comment:
      "It was a great fun experience for my 8yr old and even for us as adults...",
  },
];

const ReviewCard = ({ review, index }) => (
  <motion.div
    className="border border-[#FFA45B] rounded-lg p-4 shadow-md bg-white relative overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="font-bold text-lg text-[#FFA45B]">{review.name}</div>
      <div className="flex items-center space-x-2">
        <FcGoogle />
        <span className="text-sm text-gray-500">
          {review.time.replace("on Google", "")}
        </span>
      </div>
    </div>
    <div className="flex items-center mb-2">
      {Array.from({ length: review.rating }, (_, i) => (
        <span key={i} className="text-[#FFDA77]">
          ★
        </span>
      ))}
    </div>
    <p className="text-gray-700">{review.comment}</p>
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFA45B] to-[#FFDA77] opacity-5 pointer-events-none" />
  </motion.div>
);

const ReviewsGrid = () => (
  <div className="bg-[#FBF6F0] py-16 px-4 md:px-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFA45B] to-[#FFDA77] opacity-10" />
    {/* Top fading gradient */}
    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FBF6F0] to-transparent z-10" />
    {/* Bottom fading gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBF6F0] to-transparent z-10" />{" "}
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.h2
        className="text-3xl font-bold text-center text-[#FFA45B] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Customers Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default ReviewsGrid;
