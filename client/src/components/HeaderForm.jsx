import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="font-bold text-2xl text-yellow-600">SoulDPlate</div>
      <input
        type="text"
        placeholder="Search for products"
        className="flex-1 mx-6 px-4 py-2 rounded-lg border border-gray-200"
      />
      <div className="flex items-center gap-4">
        <FaUser className="text-xl cursor-pointer" />
        <FaShoppingCart className="text-xl cursor-pointer" />
      </div>
    </header>
  );
}