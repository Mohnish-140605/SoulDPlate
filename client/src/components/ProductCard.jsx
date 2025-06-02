import React from 'react';

export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="text-yellow-700 font-semibold">{price} ₹</p>
      <button
        onClick={onAddToCart}
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}