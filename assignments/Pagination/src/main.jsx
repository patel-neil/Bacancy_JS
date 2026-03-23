import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import useDebounce from "./utils/useDebounce";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");

  const limit = 10;

  const debouncedSearch = useDebounce(search, 500);

  const fetchProducts = async () => {
    const skip = (page - 1) * limit;

    const baseUrl = debouncedSearch
      ? `https://dummyjson.com/products/search?q=${debouncedSearch}`
      : `https://dummyjson.com/products`;

    const separator = baseUrl.includes("?") ? "&" : "?";

    const url = `${baseUrl}${separator}limit=${limit}&skip=${skip}&sortBy=price&order=${sortOrder}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    setProducts(data.products || []);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });
  };

   useEffect(() => {
    fetchProducts();
  }, [debouncedSearch, page, sortOrder]);


  return (
    <div>
      <h1>Products</h1>

      <AddProduct setProducts={setProducts} />

      <SearchBar search={search} setSearch={setSearch} />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Price Low → High</option>
        <option value="desc">Price High → Low</option>
      </select>

      <ProductList products={products} onDelete={handleDelete} />

      <div>
        <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
          Previous
        </button>

        <span> Page {page} </span>

        <button onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);