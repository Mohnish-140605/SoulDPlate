import React, { useState } from 'react';
import axios from 'axios';
import CartItem from '../components/CartItem';

export default function Cart() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [msg, setMsg] = useState('');
  const [qr, setQr] = useState('');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/orders', { items: cart }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMsg('Order placed successfully!');
      setQr(res.data.qrCode); // Assume backend returns QR code as Data URL
      setCart([]);
      localStorage.removeItem('cart');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Checkout failed');
    }
  };

  const removeItem = (idx) => {
    const updated = cart.filter((_, i) => i !== idx);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  if (!cart.length) return <div>Your cart is empty.</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item, i) => (
        <CartItem key={i} {...item} />
      ))}
      <div className="text-right font-bold mt-4">Total: {total} ₹</div>
      <button onClick={handleCheckout} className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold mt-4">
        Proceed to Checkout
      </button>
      <div className="mt-4">{msg}</div>
      {qr && (
        <div>
          <h3 className="font-bold mt-4">Scan this QR to hear the grandma's story:</h3>
          <img src={qr} alt="QR Code" className="w-40 h-40" />
        </div>
      )}
    </div>
  );
}