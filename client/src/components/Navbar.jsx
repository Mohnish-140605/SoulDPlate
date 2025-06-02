import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

const products = [
  { name: "Kashmiri Red Chili Powder", category: "Masalas", state: "Kashmir" },
  { name: "Mango Pickle", category: "Pickles", state: "Maharashtra" },
  { name: "Turmeric Powder", category: "Masalas", state: "Kerala" },
  { name: "Lemon Pickle", category: "Pickles", state: "Tamil Nadu" },
  { name: "Black Pepper Powder", category: "Masalas", state: "Kerala" },
  { name: "Mixed Veg Pickle", category: "Pickles", state: "Punjab" },
];

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const fuse = useMemo(() => {
    return new Fuse(products, {
      keys: ["name", "category", "state"],
      threshold: 0.3,
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({
        name: "Mohnish G Naidu",
        picture: "/dummy-user.png",
      });
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map((r) => r.item));
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleSelect = (item) => {
    setQuery("");
    setResults([]);
    navigate(`/products?search=${encodeURIComponent(item.name)}`);
  };

  return (
    <nav className="relative w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/mango-bg.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h1 className="text-yellow-700 text-2xl font-extrabold">SoulDPlate</h1>
            <p className="text-sm text-yellow-600 font-medium">
              Tradition in Every Bite
            </p>
          </div>
        </Link>

        <div className="relative hidden md:block w-1/2 mx-6">
          <input
            type="text"
            placeholder="Search masalas, pickles, memories..."
            className="w-full px-4 py-2 text-sm rounded-full border border-yellow-300 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {results.length > 0 && (
            <ul className="absolute z-10 bg-white border border-yellow-300 mt-1 rounded w-full max-h-48 overflow-auto shadow-lg">
              {results.map((item, i) => (
                <li
                  key={i}
                  className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  <strong>{item.name}</strong> - {item.category} from {item.state}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-3">
          {user && (
            <>
              <img
                src={user.picture}
                alt="User"
                className="h-8 w-8 rounded-full border border-yellow-500"
              />
              <span className="text-yellow-800 font-medium hidden sm:inline-block">
                Hi, {user.name.split(" ")[0]}
              </span>
            </>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-1.5 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-1.5 rounded-full transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {isLoggedIn && (
        <div className="flex justify-center space-x-10 px-6 py-3 border-t border-yellow-200 bg-white">
          {[ 
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/live-classes", label: "Live Cooking" },
            { to: "/order-confirmation", label: "My Orders" },
          ].map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              className="relative text-lg text-yellow-700 font-semibold hover:text-yellow-900 transition group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
