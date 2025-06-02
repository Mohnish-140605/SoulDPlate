export default function ProductCarousel({ title, products }) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex overflow-x-auto gap-6">
        {products.map((p, i) => (
          <div key={i} className="min-w-[180px] bg-white rounded-xl shadow p-4">
            <img src={p.image} alt={p.name} className="w-full h-28 object-cover rounded-lg" />
            <div className="font-bold mt-2">{p.name}</div>
            <div className="text-gray-500">{p.price} ₹</div>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}