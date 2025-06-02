import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Kashmiri Red Chili Powder",
    price: 200,
    category: "Masalas",
    state: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1608131033627-5c737196bc5a?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    name: "Mango Pickle",
    price: 150,
    category: "Pickles",
    state: "Maharashtra",
    image:
      "https://images.unsplash.com/photo-1569693556940-bf20d3b58c9c?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    name: "Turmeric Powder",
    price: 180,
    category: "Masalas",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1617191518697-3c4b4f3f34bb?auto=format&fit=crop&w=400&q=60",
  },
];

export default function ProductGrid() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  // Add first time or increase quantity up to 5
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === product.id && item.quantity < 5
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  // Decrease quantity; remove if zero
  const removeFromCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists && exists.quantity > 1) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // remove product if quantity reaches 0 or doesn't exist
        return prev.filter((item) => item.product.id !== product.id);
      }
    });
  };

  const handleProceed = () => {
    if (cart.length === 0) {
      alert("Add at least one product to cart!");
      return;
    }
    navigate("/order-confirmation", { state: { cart } });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const inCart = cart.find((item) => item.product.id === product.id);

          return (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Category: {product.category} | State: {product.state}
              </p>
              <p className="text-yellow-600 font-bold mb-2">
                ₹ {product.price}
              </p>

              {/* Show quantity controls only if product in cart */}
              {inCart ? (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => removeFromCart(product)}
                    className="bg-yellow-300 px-3 py-1 rounded text-yellow-900 font-bold"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{inCart.quantity}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded font-bold"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded font-semibold"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Proceed Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleProceed}
          className="bg-yellow-600 text-white px-8 py-3 rounded font-bold text-lg hover:bg-yellow-700 transition"
        >
          Proceed to Order Confirmation
        </button>
      </div>
    </div>
  );
}
