import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ClassCard = ({ cookingClass }) => {
  const handlePayment = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/payment/create-order', {
        amount: cookingClass.price,
      });

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual
        amount: res.data.amount,
        currency: 'INR',
        name: 'SoulDPlate',
        description: 'Cooking Class Access',
        order_id: res.data.id,
        handler: async function (response) {
          alert('Payment successful! Check your email for the session link.');

          await axios.post('http://localhost:5000/api/email/send', {
            email: 'customer@example.com', // Replace with logged-in user's email
            subject: 'Your Live Class Access',
            message: `You are confirmed for the "${cookingClass.title}" session. Join using this link: ${cookingClass.link}`,
          });
        },
        prefill: {
          name: 'Customer',
          email: 'customer@example.com',
        },
        theme: {
          color: '#f59e0b',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert('Payment failed. Try again.');
    }
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl border transition transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-2xl font-bold text-gray-800">{cookingClass.title}</h2>
      <p className="text-gray-600 mt-2">📅 {new Date(cookingClass.date).toLocaleDateString()}</p>
      <p className="text-gray-800 font-semibold mt-1">💰 ₹{cookingClass.price}</p>
      <button
        onClick={handlePayment}
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
      >
        Join Class
      </button>
    </motion.div>
  );
};

export default ClassCard;
