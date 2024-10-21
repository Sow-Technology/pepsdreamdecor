"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaFilter,
  FaSortAmountDown,
  FaRupeeSign,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Updated product data structure
const allProducts = {
  mattress: [
    {
      id: 1,
      name: "Comfort Plus Mattress",
      category: "Spring",
      price: 599,
      rating: 4.5,
      image: "/.jpg",
      fabric: "Cotton",
      size: "Queen",
      color: "White",
    },
    {
      id: 2,
      name: "Memory Foam Delight",
      category: "Foam",
      price: 499,
      rating: 4.2,
      image: "/mattress2.jpg",
      fabric: "Polyester",
      size: "King",
      color: "Gray",
    },
    {
      id: 3,
      name: "Hybrid Dream",
      category: "Hybrid",
      price: 799,
      rating: 4.8,
      image: "/mattress3.jpg",
      fabric: "Bamboo",
      size: "Full",
      color: "Beige",
    },
    // ... more mattresses
  ],
  pillow: [
    {
      id: 1,
      name: "PEPS ALLURA PU MOULDED PILLOW",
      category: "Bed",
      price: 1299,
      rating: 5,
      image: "/products/p1.jpg",
      fabric: "Moulded PU Foam",
      size: "610X390X110mm",
      color: "White",
    },
    {
      id: 2,
      name: "Arm Guard Memory Pillow",
      category: "Bed",
      price: 2499,
      rating: 5,
      image: "/products/p2.jpg",
      fabric: "Memory Foam",
      size: "L 66cm X W 11.5cm X H 48.5 cm/29 cm",
      color: "White",
    },
    {
      id: 3,
      name: "Tender Plush Pillow",
      category: "Bed",
      price: 999,
      rating: 5,
      image: "/products/p3.jpg",
      fabric: "Cotton",
      size: "27x17",
      color: "White",
    },
    {
      id: 4,
      name: "Stargaze Plus Pillow",
      category: "Bed",
      price: 599,
      rating: 5,
      image: "/products/p4.jpg",
      fabric: "Swiss Cotton Shell",
      size: "27x17",
      color: "White",
    },
    {
      id: 5,
      name: "Stargaze Pillow",
      category: "Bed",
      price: 499,
      rating: 5,
      image: "/products/p5.jpg",
      fabric: " Cotton ",
      size: "26x16",
      color: "White",
    },
    {
      id: 6,
      name: "Neckguard-Tufted Pillow",
      category: "Bed",
      price: 1499,
      rating: 5,
      image: "/products/p6.jpg",
      fabric: "Fine Jersey Knitted Fabric",
      size: "24x15x5",
      color: "White",
    },
    {
      id: 7,
      name: "Jumbo Plush Pillow- Gusseted",
      category: "Bed",
      price: 1599,
      rating: 5,
      image: "/products/p7.jpg",
      fabric: "Swiss Cotton Shell",
      size: "30x20",
      color: "White",
    },
    {
      id: 8,
      name: "3d Latex Massage Pillow",
      category: "Bed",
      price: 4199,
      rating: 5,
      image: "/products/p8.jpg",
      fabric: "Natural Latex",
      size: "23x15x4.5",
      color: "White",
    },
    {
      id: 9,
      name: "Ultra Soft Pu Foam Moulded Pillow",
      category: "Bed",
      price: 4199,
      rating: 5,
      image: "/products/p9.jpg",
      fabric: "Moulded PU Foam",
      size: "23x15x4.5",
      color: "White",
    },
    {
      id: 10,
      name: "Ultra Soft Pu Foam Moulded Pillow",
      category: "Bed",
      price: 2199,
      rating: 5,
      image: "/products/p10.jpg",
      fabric: ["Cotton Jersey Knitted Fabric", "Memory Foam"],
      size: "24x13x4",
      color: "White",
    },
    {
      id: 11,
      name: "Neck Guard Memory Moulded Pillow - Contour",
      category: "Bed",
      price: 4199,
      rating: 5,
      image: "/products/p11.jpg",
      fabric: "Moulded Foam",
      size: "24x13x4.5/3.5",
      color: "White",
    },
  ],
  accessories: [
    {
      id: 1,
      name: "Mattress Protector",
      category: "Bedding",
      price: 49,
      rating: 4.4,
      image: "/accessory1.jpg",
      fabric: "Polyester",
      size: "Queen",
      color: "White",
    },
    {
      id: 2,
      name: "Bed Sheets Set",
      category: "Bedding",
      price: 89,
      rating: 4.5,
      image: "/accessory2.jpg",
      fabric: "Egyptian Cotton",
      size: "King",
      color: "Blue",
    },
    // ... more accessories
  ],
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="bg-[#FFA45B] text-white hover:bg-[#FFDA77] hover:text-[#FFA45B]"
                >
                  Experience Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold text-[#FFA45B] mb-2">
            {product.name}
          </CardTitle>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[#FFA45B] flex items-center">
              {product.price.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </span>
            <div className="flex items-center">
              <FaStar className="text-[#FFDA77] mr-1" />
              <span>{product.rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FilterCheckbox = ({ label, checked, onCheckedChange }) => (
  <div className="flex items-center space-x-2 mb-2">
    <Checkbox id={label} checked={checked} onCheckedChange={onCheckedChange} />
    <Label htmlFor={label}>{label}</Label>
  </div>
);

const ProductsPage = () => {
  const pathname = usePathname();
  const productType = pathname.split("/").pop();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    fabrics: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 200000,
  });
  const [sortBy, setSortBy] = useState("name");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const initialProducts = allProducts[productType] || [];
    setProducts(initialProducts);
  }, [productType]);

  useEffect(() => {
    let filteredProducts = (allProducts[productType] || []).filter(
      (product) =>
        (filters.categories.length === 0 ||
          filters.categories.includes(product.category)) &&
        (filters.fabrics.length === 0 ||
          filters.fabrics.includes(product.fabric)) &&
        (filters.sizes.length === 0 || filters.sizes.includes(product.size)) &&
        (filters.colors.length === 0 ||
          filters.colors.includes(product.color)) &&
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice
    );

    filteredProducts.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

    setProducts(filteredProducts);
  }, [filters, sortBy, productType]);

  const getUniqueValues = (key) => [
    ...new Set((allProducts[productType] || []).map((p) => p[key])),
  ];

  const categories = getUniqueValues("category");
  const fabrics = getUniqueValues("fabric");
  const sizes = getUniqueValues("size");
  const colors = getUniqueValues("color");

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };
  const FilterSection = ({ title, items, filterType }) => (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      {items.map((item) => (
        <FilterCheckbox
          key={item}
          label={item}
          checked={filters[filterType].includes(item)}
          onCheckedChange={(checked) =>
            handleFilterChange(filterType, item, checked)
          }
        />
      ))}
    </div>
  );

  const FiltersContent = () => (
    <>
      <FilterSection
        title="Category"
        items={categories}
        filterType="categories"
      />
      <FilterSection title="Fabric" items={fabrics} filterType="fabrics" />
      <FilterSection title="Size" items={sizes} filterType="sizes" />
      <FilterSection title="Color" items={colors} filterType="colors" />
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: Number(e.target.value) })
            }
          />
          <span>-</span>
          <Input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#FFA45B] mb-8 text-center capitalize">
            {productType}s
          </h1>

          <div className="flex flex-col lg:flex-row">
            {/* Mobile Filters Dialog */}

            {/* Desktop Filters */}
            <div className="hidden lg:block lg:w-1/4 lg:pr-8">
              <h2 className="text-xl font-semibold text-[#FFA45B] mb-4">
                Filters
              </h2>
              <FiltersContent />
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between mb-4">
                <div className="lg:hidden mb-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <FaFilter className="mr-2" />
                        Filters
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Filters</DialogTitle>
                      </DialogHeader>
                      <FiltersContent />
                    </DialogContent>
                  </Dialog>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
