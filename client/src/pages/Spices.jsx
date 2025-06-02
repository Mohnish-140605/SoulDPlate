import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Spices() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    axios.get('/api/products/Spices').then(res => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, qty: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Added to cart!');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Spices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">₹{product.price}</p>
            <a href={product.storyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline block my-2">
              Hear Grandma's Story
            </a>
            {product.liveSessionLink && (
              <a href={product.liveSessionLink} target="_blank" rel="noopener noreferrer" className="text-green-600 underline block my-2">
                Join Live Cooking Session
              </a>
            )}
            <button onClick={() => addToCart(product)} className="bg-yellow-600 text-white px-4 py-2 rounded mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
