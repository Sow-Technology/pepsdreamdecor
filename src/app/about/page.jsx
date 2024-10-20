"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
// import sleepAnimation from "../public/sleep-animation.json";
// import comfortAnimation from "../public/comfort-animation.json";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-[#FBF6F0] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-[#FFA45B] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Peps XP Experience Centre
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/store.jpg" // Replace with your actual image
              alt="Peps XP Store Front"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-[500px]"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to Peps XP, your ultimate destination for experiencing the
              best in comfort and relaxation. As an exclusive seller of Peps
              Mattresses and Peps Accessories, we pride ourselves on being an
              authorized partner of Peps, ensuring you get the highest quality
              sleep solutions.
            </p>
            <p className="text-lg text-gray-700">
              At Peps XP, we believe in the power of a perfect night&#39;s
              sleep. That&#39;s why we&#39;ve created a one-of-a-kind experience
              centre where you can try and feel the comfort of Peps mattresses
              before making your purchase.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-[#FFA45B] mb-6">
            Our Experience Centre
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center ">
            <div className="md:w-1/2 mb-8 md:mb-0 ">
              {/* <Lottie
                loop
                animationData={sleepAnimation}
                play
                style={{ width: 300, height: 300 }}
              /> */}
              <Image
                src="/store2.jpg" // Replace with your actual image
                alt="Peps XP Store Front"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-[400px] ml-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                Our store features the complete range of Peps mattresses,
                allowing you to experience their unparalleled comfort and
                support firsthand. We are proud to be one of the top sellers in
                the offline market, known for our commitment to excellence and
                customer satisfaction.
              </p>
              <p className="text-lg text-gray-700">
                Our knowledgeable and friendly staff are here to assist you in
                finding the perfect mattress that suits your needs and
                preferences.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#FFA45B] mb-6">
            Why Choose Peps XP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Exclusive Peps Products: As an authorized partner, we offer a wide selection of Peps mattresses and accessories, ensuring access to the best sleep solutions.",
              "Experience Before You Buy: Our store is designed to provide a hands-on experience. Lie down, relax, and feel the comfort of Peps mattresses before making your decision.",
              "Expert Guidance: Our staff are trained to provide expert advice and personalized recommendations, helping you find the perfect mattress for a restful night's sleep.",
              "Top Seller: We are a leading name in the offline market, known for our quality products and excellent customer service.",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="w-6 h-6 text-[#FFA45B] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#FFA45B] mb-6">
            Your Journey to Better Sleep Starts Here
          </h2>
          <div className="flex justify-center mb-8">
            {/* <Lottie
              loop
              animationData={comfortAnimation}
              play
              style={{ width: 200, height: 200 }}
            /> */}
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Join us at Peps XP Experience Centre and discover the difference a
            quality mattress can make. Your journey to a better night&#39;s
            sleep starts here.
          </p>
          <motion.button
            className="bg-[#FFA45B] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFDA77] hover:text-[#FFA45B] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Store
          </motion.button>
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.685405712938!2d77.6587946!3d12.9919622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11861bd7e0df%3A0x21d7776f976eae73!2sPEPS%20Mattress%20-%20Experience%20Centre%20(GSS)%20-%20Old%20Madras%20Road!5e0!3m2!1sen!2sin!4v1729270835300!5m2!1sen!2sin"
              width="100%"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
