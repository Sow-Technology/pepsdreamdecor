"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Mattress", href: "/products/mattress" },
      { name: "Pillow", href: "/products/pillow" },
      { name: "Accessories", href: "/products/accessories" },
    ],
  },
  {
    title: "People",
    links: [
      { name: "My Account", href: "/account" },
      { name: "Orders", href: "/orders" },
      { name: "Help and Support", href: "/support" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#FBF6F0] text-gray-700 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFA45B]/10 to-[#FFDA77]/10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=" my-2"
            >
              <Logo />
            </motion.div>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaPhone className="mr-2 text-[#FFA45B]" />
                078991 14456
              </p>
              <p className="flex items-start text-sm">
                <FaMapMarkerAlt className="mr-2 mt-1 text-[#FFA45B] min-h-4 min-w-4 " />
                <span>
                  Ground floor, #23, Trinity Enclave, Old Madras Rd, near Shell
                  Petrol Station Rajana Colony, beside Shell petrol station,
                  Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka 560093
                </span>
              </p>
            </div>
          </motion.div>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#FFA45B] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#FFA45B] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-300 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} PeacefulPillow. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
