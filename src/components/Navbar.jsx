"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Menu, X, ShoppingCart, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "Mattress",
    link: "/mattress",
    submenu: [
      { name: "Spring Mattress", link: "/mattress/spring" },
      { name: "Foam Mattress", link: "/mattress/foam" },
      { name: "Hybrid Mattress", link: "/mattress/hybrid" },
      { name: "Orthopedic Mattress", link: "/mattress/orthopedic" },
      { name: "Latex Mattress", link: "/mattress/latex" },
    ],
  },
  { name: "Pillow", link: "/pillow" },
  { name: "Accessories", link: "/accessories" },
  { name: "About us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const toggleMobileDropdown = (idx) => {
    setMobileActiveDropdown(mobileActiveDropdown === idx ? null : idx);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownEnter = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(idx);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(idx)}
              onMouseLeave={handleDropdownLeave}
              ref={idx === activeDropdown ? dropdownRef : null}
            >
              <MotionLink
                href={item.link}
                className="relative text-gray-800 hover:text-[#FFA45B] transition-colors flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFA45B]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </MotionLink>
              {item.submenu && activeDropdown === idx && (
                <motion.div
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    {item.submenu.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFDA77] hover:text-[#FFA45B]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Shop Now Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FFA45B] focus:ring-offset-2 focus:ring-offset-[#FBF6F0]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFA45B_0%,#FFDA77_50%,#FFA45B_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FBF6F0] px-3 py-1 text-sm font-medium text-[#FFA45B] backdrop-blur-3xl">
              <ShoppingCart className="h-4 w-4 mr-2" /> Shop Now
            </span>
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={toggleMenu} className="text-[#FFA45B]">
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#FBF6F0]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  <div
                    className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-[#FFDA77] hover:text-[#FFA45B] transition-colors"
                    onClick={() =>
                      item.submenu ? toggleMobileDropdown(idx) : toggleMenu()
                    }
                  >
                    <Link href={item.link}>{item.name}</Link>
                    {item.submenu && (
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          mobileActiveDropdown === idx ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </div>
                  <AnimatePresence>
                    {item.submenu && mobileActiveDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6"
                      >
                        {item.submenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.link}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-[#FFDA77] hover:text-[#FFA45B]"
                            onClick={toggleMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <motion.div
              className="px-5 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <button className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FFA45B] focus:ring-offset-2 focus:ring-offset-[#FBF6F0]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFA45B_0%,#FFDA77_50%,#FFA45B_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FBF6F0] px-3 py-1 text-sm font-medium text-[#FFA45B] backdrop-blur-3xl">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Shop Now
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
