import { useCart } from "../context/cartContext";

export default function Cart({ isOpen, onClose }) {
  const { cartItems } = useCart();

  if (!isOpen) return null;

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Cart Items</h3>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}

      <button onClick={onClose}>Close</button>
    </div>
  );
}