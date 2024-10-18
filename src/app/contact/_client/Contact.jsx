"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Audit from "./Audit";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background text-foreground min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-primary mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&#39;d love to hear from you. Let&#39;s start a conversation!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt
                    className="text-primary mr-4 min-h-5 min-w-5"
                    size={24}
                  />
                  <p>
                    Ground floor, #23, Trinity Enclave, Old Madras Rd, near
                    Shell Petrol Station Rajana Colony, beside Shell petrol
                    station, Nagavarapalya, C V Raman Nagar, Bengaluru,
                    Karnataka 560093
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-primary mr-4 " size={24} />
                  <p>078991 14456</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-primary mr-4" size={24} />
                  <p>contact@peacefulpillow.com</p>
                </div>
              </div>
              <h2 className="text-2xl font-semibold my-6">Follow us</h2>
              <div className="flex gap-5">
                <Link href="https://www.instagram.com/peps.omr" target="_blank">
                  {" "}
                  <FaInstagram className="h-7 w-7 " />
                </Link>
                <Link
                  href="https://www.facebook.com/share/jGezAG3yte26XeX8/"
                  target="_blank"
                >
                  <FaFacebook className="h-7 w-7 text-indigo-600" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Audit />
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
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
      </div>
      <Footer />
    </>
  );
};

export default Contact;
