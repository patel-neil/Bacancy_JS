import { useState } from "react";

export default function AddProduct({ setProducts }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;

    const newProduct = {
      id: Date.now(),
      title,
      price: Math.floor(Math.random() * 1000),
    };

    setProducts((prev) => [newProduct, ...prev]);
    setTitle("");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}