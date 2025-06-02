import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", form);
      setMsg("Registration successful! Please login.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setMsg(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/mango-bg.png')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600"
          >
            Register
          </button>
        </form>
        {msg && (
          <p className="text-green-600 mt-4 text-center">
            {msg}
          </p>
        )}
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-600 font-bold hover:underline"
          >
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}