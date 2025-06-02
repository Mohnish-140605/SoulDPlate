export default function ProductCard({ name, story, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-lg mb-2" />
      <div className="font-bold">{name}</div>
      <div className="text-sm text-gray-500 mb-2">{story}</div>
      <div className="font-semibold mb-2">{price} ₹</div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
        Order Now
      </button>
    </div>
  );
}