"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolicySection = ({ title, children }) => (
  <motion.section
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
    {children}
  </motion.section>
);

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background text-foreground min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-primary mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shipping and Delivery Policy
          </motion.h1>

          <div className="prose prose-lg">
            <PolicySection title="Fast and Reliable Shipping">
              <p>
                At PeacefulPillow, we aim to deliver our products to you as
                quickly as possible. All shipments will be delivered within 7 to
                14 working days based on your location, unless stated otherwise
                on our website or communicated through other means.
              </p>
              <p>
                For any clarifications regarding your orders, please contact us
                at{" "}
                <a
                  href="mailto:orders@pepsdreamdecor.com"
                  className="text-primary hover:underline"
                >
                  orders@pepsdreamdecor.com
                </a>{" "}
                or call our customer service at{" "}
                <a
                  href="tel:18004259599"
                  className="text-primary hover:underline"
                >
                  18004259599
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="Product Availability">
              <p>
                PeacefulPillow offers a range of sleep products, including
                bedsheets, comforters, stools, cushions, mattresses, pillows,
                and other accessories. Our website serves as an online platform
                that allows you to purchase these products at the listed prices.
              </p>
              <p>
                This Agreement does not create any partnership or joint venture
                between us and you.
              </p>
            </PolicySection>

            <PolicySection title="Out of Stock Products">
              <p>
                If a product is marked as &quot;Out of Stock&quot; on our
                website, it is currently unavailable for sale.
              </p>
            </PolicySection>

            <PolicySection title="Estimated Delivery Time for In-Stock Products">
              <p>
                Products marked as &quot;In Stock&quot; on our website are
                available for immediate sale and may be shipped promptly.
                Delivery timelines will be provided on the website. However, we
                do not guarantee specific delivery timelines as they depend on
                shipping services.
              </p>
              <p>Sometimes, delivery may take longer due to:</p>
              <ul className="list-disc pl-6">
                <li>Bad weather conditions</li>
                <li>Transportation delays</li>
                <li>Political disruptions</li>
                <li>Other unforeseen circumstances</li>
              </ul>
              <p>
                In such cases, we will proactively reach out to you. Please
                check your emails for updates.
              </p>
            </PolicySection>

            <PolicySection title="Liability">
              <p>
                To the maximum extent permissible by law, PeacefulPillow shall
                not be liable for any direct, indirect, incidental, punitive,
                exemplary, special, consequential damages, or loss of profits,
                revenue, or goods incurred due to any delay in the delivery of
                orders.
              </p>
            </PolicySection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
