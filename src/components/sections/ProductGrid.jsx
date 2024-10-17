import ProductCard from "../ProductCard";

export default function ProductGrid() {
  const products = [
    {
      title: "Mattress",
      imgSrc: "https://source.unsplash.com/1600x900/?mattress",
      description: "A mattress designed for ultimate comfort and support.",
      features: ["12-year warranty", "Bio-Ceramic Fiber", "Cooling top"],
    },
    {
      title: "Pillow",
      imgSrc: "https://source.unsplash.com/1600x900/?pillow",
      description:
        "Our orthopedic pillow provides a perfect balance of softness.",
      features: ["Hypoallergenic", "Cooling", "Orthopedic design"],
    },
    {
      title: "Comforter",
      imgSrc: "https://source.unsplash.com/1600x900/?comforter",
      description: "Stay warm and cozy with our soft, durable comforter.",
      features: ["5-year warranty", "Cooling materials", "Natural fabrics"],
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
