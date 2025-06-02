import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/auth/register", formData);
      setMsg("");
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.error || "Registration failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl flex">
        <div className="w-1/2 flex flex-col items-center justify-center bg-yellow-100 rounded-l-lg p-8">
          <img
            src="https://via.placeholder.com/150"
            alt="SoulDPlate Logo"
            className="mb-6 w-32 h-32"
          />
          <h2 className="text-3xl font-bold text-yellow-700 mb-4 text-center">
            Welcome to SoulDPlate!
          </h2>
          <p className="text-center text-gray-600">
            Experience grandma’s kitchen, live. Register to order soulful food or join a live class!
          </p>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
            Create your SoulDPlate Account
          </h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
            >
              {loading ? "Registering..." : "Register"}
            </button>
            {msg && <div className="text-red-600 mt-3 text-center">{msg}</div>}
          </form>
          <p className="mt-4 text-center">
            Already registered?{" "}
            <Link to="/login" className="text-yellow-700 font-bold hover:underline">
              Click here to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}