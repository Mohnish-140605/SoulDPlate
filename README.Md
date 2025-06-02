# 🥘 SoulDPlate

**SoulDPlate** is a full-featured MERN stack platform that brings the warmth, love, and heritage of traditional, homemade food to everyone. Order delicious, family-inspired dishes, listen to the stories behind each recipe, and join live cooking sessions with the grandmothers who make them.

---

## 📚 Table of Contents

- [✨ Project Overview](#-project-overview)
- [🔥 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [⚙️ Requirements](#-requirements)
- [🚀 Installation & Setup](#-installation--setup)
  - [🔧 Backend Setup](#-backend-setup-server)
  - [🎨 Frontend Setup](#-frontend-setup-client)
- [🏃‍♂️ Running the App](#-running-the-app)
- [🔐 Environment Variables](#-environment-variables)
- [🛡️ Security & Best Practices](#-security--best-practices)
- [🤝 Contribution](#-contribution)
- [📄 License](#-license)

---

## ✨ Project Overview

SoulDPlate connects people to authentic, homemade food and ancestral stories. Every dish is lovingly prepared by grandmothers, with a QR code linking you to the personal story behind the recipe. Users can also join **live cooking classes**, preserving culinary heritage and enjoying special moments.

---

## 🔥 Features

- 🍲 **Order authentic, traditional foods** made with love by grandmothers  
- 📱 **Scan QR codes** to hear heartwarming stories behind your meals  
- 🎥 **Join live cooking sessions** to learn directly from our grandmas  
- 📚 **Preserve culinary heritage** with a growing food storytelling community  

---

## 📁 Project Structure

```
SoulDPlate/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ProductCard.jsx
│       │   ├── Navbar.jsx
│       │   └── ClassCard.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Spices.jsx
│       │   ├── Pickles.jsx
│       │   └── LiveClasses.jsx
│       ├── App.jsx
│       ├── index.js
│       └── tailwind.css
├── server/                 # Node.js + Express backend
│   ├── controllers/
│   │   ├── productController.js
│   │   ├── paymentController.js
│   │   └── emailController.js
│   ├── models/
│   │   ├── Product.js
│   │   └── Class.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── emailRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── .env
│   ├── server.js
├── package.json (root)
└── README.md
```

---

## ⚙️ Requirements

- ✅ **Node.js** v18 or higher (recommended: v20+)
- ✅ **npm** v9 or higher
- ✅ **MongoDB** (Atlas or local)
- ✅ Modern web browser

---

## 🚀 Installation & Setup

### 🔧 Backend Setup (`server/`)

1. Navigate to the backend folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/` directory with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. Ensure `.env` is added to `.gitignore`.

---

### 🎨 Frontend Setup (`client/`)

1. Navigate to the frontend folder:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. *(Optional)* Create a `.env` in `client/`:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

---

## 🏃‍♂️ Running the App

Start both frontend and backend in separate terminals:

- **Backend:**
  ```bash
  cd server
  npm start       # or use: npm run dev
  ```

- **Frontend:**
  ```bash
  cd client
  npm start
  ```

- 📍 Visit the app at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

### Backend (`server/.env`)
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Frontend (`client/.env`, optional)
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🛡️ Security & Best Practices

- ❌ Never commit `.env` or secrets to version control  
- 📁 Add `node_modules/`, `.env`, and build folders to `.gitignore`  
- 🔐 Use strong JWT secrets and email credentials  
- ✅ Review changes using `git status` before commits  

---

## 🤝 Contribution

We welcome feedback, ideas, and PRs!  
To contribute:

1. Fork the repo  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a pull request 🚀  

---

## 📄 License

This project is licensed under the **ISC License**.  
See the [LICENSE](LICENSE) file for details.

---

> 🧡 **Experience the warmth, tradition, and flavor of grandma’s kitchen with SoulDPlate!**
