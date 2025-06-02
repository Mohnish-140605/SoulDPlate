import React from "react";
import { Link } from "react-router-dom";

export default function Home({ user, products, location, handleAddToCart, handleGetLocation, error }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-400 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
      >
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 via-yellow-100/60 to-yellow-400/80 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-6 drop-shadow-lg">
          Experience Grandma’s Kitchen, Live!
        </h1>
        <p className="text-2xl text-yellow-900 mb-8 max-w-2xl">
          Watch grandmas from across India cook their secret recipes.
          Order soulful food or join a live cooking class!
        </p>
        <Link
          to="/live-classes"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200"
        >
          Watch Live Cooking
        </Link>
      </div>

      <div style={{ maxWidth: 600, margin: "2rem auto" }}>
        <h2 className="text-center text-2xl">Welcome to SoulDPlate</h2>
        <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
          {products &&
            products.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 2px 8px #eee",
                  padding: 16,
                  width: 220,
                }}
              >
                <img
                  src={p.image || "https://via.placeholder.com/220?text=Product"}
                  alt={p.name}
                  style={{
                    width: "100%",
                    borderRadius: 8,
                  }}
                />
                <div style={{ fontWeight: "bold", marginTop: 8 }}>{p.name}</div>
                <div style={{ color: "#888" }}>{p.price} ₹</div>
                <button
                  style={{
                    marginTop: 12,
                    background: "#fbbf24",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "8px 16px",
                  }}
                  onClick={() => handleAddToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>

      <div style={{ margin: "1rem 0" }}>
        <button
          onClick={handleGetLocation}
          style={{
            background: "#fbbf24",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
          }}
        >
          Get Current Location
        </button>
        {location && (
          <div style={{ marginTop: 8 }}>
            <b>Latitude:</b> {location.lat} <br />
            <b>Longitude:</b> {location.lng}
          </div>
        )}
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      </div>

      <div style={{ padding: "2rem", textAlign: "center" }}>
        {user ? (
          <>
            <h1>Welcome, {user?.name || "Guest"}!</h1>
            <img
              src={user?.picture || "https://via.placeholder.com/100?text=Avatar"}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "1rem auto",
              }}
            />
            <p>Email: {user?.email || "Not provided"}</p>
          </>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
}
