import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import ProductList from "./ProductList";
import CartIcon from "./CartIcon";
import Cart from "./Cart";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isCartOpen, setisCartOpen] = useState(false);

  const fetchProducts = async (page, searchTerm) => {
    try {
      setLoading(true);

      const skip = (page - 1) * limit;

      let url = "";

    	if (searchTerm) {
			url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
		} 
		else 
		{
			url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
		}

    	if (sortOrder) {
			url += `&sortBy=rating&order=${sortOrder}`;
		}

      const res = await fetch(url);

      if (!res.ok) throw new Error("Error in fetching data");

      const data = await res.json();

      setProducts(data.products);
      setTotal(data.total);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page, searchTerm);
  }, [page, searchTerm, sortOrder]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>

      <CartIcon 
      onClick={() => setisCartOpen(true)}
      />

      <SearchBar
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      setPage={setPage} 
      />

      <SortDropdown
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setPage={setPage}
      />

      <ProductList 
        products={products} 
        loading={loading} 
      />

      <div className="paging-tab">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setisCartOpen(false)}
      />
    </>
  );
}