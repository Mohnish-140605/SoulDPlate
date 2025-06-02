import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <SearchBar />
      <Filters />
      <ProductGrid />
    </div>
  );
}