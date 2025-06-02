import React from 'react';
import { Link } from 'react-router-dom';

export default function BookLiveClass() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-400 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
        Book a Live Session with Our Grannys
      </h2>
      <p className="mb-8 text-yellow-900 text-center max-w-lg text-lg">
        Ready to cook with our loving grannys? Click below to proceed to payment and reserve your spot for a soulful live cooking experience!
      </p>
      <Link
        to="/pay-for-live-class"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow transition"
      >
        Proceed to Payment
      </Link>
    </div>
  );
}