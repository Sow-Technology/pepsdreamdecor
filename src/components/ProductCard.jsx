export default function ProductCard({ title, imgSrc, description, features }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img src={imgSrc} alt={title} className="mx-auto w-48 h-48 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <button className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg">
        Shop now
      </button>
    </div>
  );
}
