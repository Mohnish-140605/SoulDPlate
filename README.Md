SoulDPlate/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   └── ProductCard.jsx
│       │   └── Navbar.jsx
│       │   └── ClassCard.jsx
│       ├── pages/
│       │   └── Home.jsx
│       │   └── Spices.jsx
│       │   └── Pickles.jsx
│       │   └── LiveClasses.jsx
│       ├── App.jsx
│       ├── index.js
│       └── tailwind.css
├── server/                 # Node.js + Express backend
│   ├── controllers/
│   │   └── productController.js
│   │   └── paymentController.js
│   │   └── emailController.js
│   ├── models/
│   │   └── Product.js
│   │   └── Class.js
│   ├── routes/
│   │   └── productRoutes.js
│   │   └── paymentRoutes.js
│   │   └── emailRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── .env
│   ├── server.js
├── package.json (root)
└── README.md
