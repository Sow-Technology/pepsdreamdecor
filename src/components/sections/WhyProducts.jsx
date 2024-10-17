export default function WhyProducts() {
  const features = [
    { title: "25 Years of Experience", icon: "✔️" },
    { title: "For All Sleep Positions", icon: "🛌" },
    { title: "Natural Materials", icon: "🌿" },
    { title: "Orthopedic Support", icon: "🦴" },
    { title: "Cooling Materials", icon: "❄️" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Our Products?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
