// const Razorpay = require('razorpay');

// exports.createOrder = async (req, res) => {
//   const { amount } = req.body;
//   const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });

//   const options = {
//     amount: amount * 100, 
//     currency: 'INR',
//     receipt: `receipt_order_${Date.now()}`,
//   };

//   try {
//     const order = await instance.orders.create(options);
//     res.json(order);
//   } catch (err) {
//     res.status(500).json({ error: 'Payment order creation failed' });
//   }
// };

exports.processPayment = (req, res) => {
  // Dummy payment logic for now
  res.json({ success: true, message: "Payment not yet decide!" });
};

