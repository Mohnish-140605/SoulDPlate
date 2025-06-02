import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  // cart comes via location.state.cart = [{ product, quantity }, ...]
  const initialCart = location.state?.cart || [];

  const [cart, setCart] = useState(initialCart);

  // Group items by category for summary
  const groupedByCategory = cart.reduce((acc, item) => {
    const cat = item.product.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  // Increase quantity (max 5)
  const increaseQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity (min 1)
  const decreaseQty = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // just in case
    );
  };

  // Remove product entirely (Cancel)
  const cancelItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Calculate subtotal for a category
  const categorySubtotal = (items) =>
    items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Calculate total for all categories
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleProceedToPay = () => {
    alert(
      "Payment gateway integration is under development.\nTill then, enjoy your delicious meals! 🍽️"
    );
  };

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4">
          Your cart is empty!
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded"
        >
          Browse Products
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-yellow-50 p-8 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold text-yellow-800 mb-6 text-center">
          Order Summary
        </h2>

        {Object.entries(groupedByCategory).map(([category, items]) => (
          <div
            key={category}
            className="mb-8 border border-yellow-300 rounded p-4 bg-yellow-100"
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">
              {category}
            </h3>
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b border-yellow-200 py-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded object-cover border border-yellow-400"
                  />
                  <div>
                    <p className="font-semibold text-yellow-900">{product.name}</p>
                    <p className="text-sm text-yellow-700">
                      From: <span className="font-medium">{product.state}</span>
                    </p>
                    <p className="text-sm text-yellow-700">
                      Price: ₹{product.price} x {quantity} = ₹
                      {(product.price * quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="px-3 py-1 rounded bg-yellow-300 text-yellow-900 font-bold hover:bg-yellow-400"
                  >
                    -
                  </button>
                  <span className="font-semibold text-yellow-800">{quantity}</span>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="px-3 py-1 rounded bg-yellow-500 text-white font-bold hover:bg-yellow-600"
                  >
                    +
                  </button>

                  <button
                    onClick={() => cancelItem(product.id)}
                    className="ml-4 px-3 py-1 rounded bg-red-500 text-white font-semibold hover:bg-red-600"
                    title="Cancel Item"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}

            <p className="mt-4 font-bold text-yellow-900 text-right">
              Subtotal: ₹{categorySubtotal(items).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="text-right border-t border-yellow-300 pt-4">
          <h3 className="text-2xl font-extrabold text-yellow-900">
            Total: ₹{totalAmount.toFixed(2)}
          </h3>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handleProceedToPay}
            className="bg-yellow-600 text-white font-bold py-3 px-10 rounded hover:bg-yellow-700 transition"
          >
            Proceed to Pay
          </button>
          <button
            onClick={() => navigate("/products")}
            className="bg-gray-300 text-yellow-900 font-semibold py-3 px-8 rounded hover:bg-gray-400 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
