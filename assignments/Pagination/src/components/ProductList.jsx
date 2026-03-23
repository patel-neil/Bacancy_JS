// components/ProductList.js
export default function ProductList({ products, onDelete }) {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: 10 }}>
          <h3>{p.title}</h3>
          <p>₹ {p.price}</p>
          <button onClick={() => onDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}