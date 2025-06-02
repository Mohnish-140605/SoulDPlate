import React from 'react';

export default function PayForLiveClass() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-400 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6" style={{ fontFamily: "'Pacifico', cursive" }}>
        Payment for Live Class
      </h2>
      <p className="mb-8 text-yellow-900 text-center max-w-lg">
        (Payment integration goes here)<br />
        After payment, you’ll receive a link to join the live session with our granny!
      </p>
      <button
        className="bg-yellow-500 text-white font-bold px-8 py-3 rounded-full text-lg shadow cursor-not-allowed opacity-60"
        disabled
      >
        Pay ₹499 (Coming Soon)
      </button>
    </div>
  );
}