import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", form);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setMsg("Unexpected response");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/mango-bg.png')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600"
          >
            Login
          </button>
        </form>
        {msg && (
          <p className="text-red-500 mt-4 text-center">
            {msg}
          </p>
        )}
        <p className="mt-6 text-center">
          Not registered?{" "}
          <Link
            to="/register"
            className="text-yellow-600 font-bold hover:underline"
          >
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}
