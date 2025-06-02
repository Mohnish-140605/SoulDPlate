import React from 'react';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-colors">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </div>
  );
}