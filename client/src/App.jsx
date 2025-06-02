import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookLiveClass from "./pages/BookLiveClass";
import OrderConfirmation from "./pages/OrderConfirmation"; // Ensure this component exists
import ProtectedRoute from "./components/ProtectedRoute";
import ProductGrid from "./components/ProductGrid";
import ProductCarousel from "./components/ProductCarousel";
import HowItWorks from "./components/HowItWorks";
import FeaturedDishes from "./components/FeaturedDishesCarousel";
import Spices from "./pages/Spices";
import Pickles from "./pages/Pickles";
import LiveClasses from "./pages/LiveClasses";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const syncAuth = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  return (
    <Router>
      <Notification message={notification} onClose={() => setNotification("")} />
      {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/book-live-class" element={<BookLiveClass />} />
          <Route path="/carousel" element={<ProductCarousel />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/featured-dishes" element={<FeaturedDishes />} />
          <Route path="/spices" element={<Spices />} />
          <Route path="/pickles" element={<Pickles />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;