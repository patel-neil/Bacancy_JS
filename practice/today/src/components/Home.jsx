import React, { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setPage(1);
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div>
        <select
          value={sortOrder}
          onChange={(e) => {
            setPage(1);
            setSortOrder(e.target.value);
          }}
        >
          <option value="">Sort by Rating</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      <div className="home">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                {item.title} ({item.rating})
              </li>
            ))}
          </ul>
        )}
      </div>

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
    </>
  );
}