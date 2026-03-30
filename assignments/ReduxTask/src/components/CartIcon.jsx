import { useSelector } from "react-redux";

export default function CartIcon() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      🛒 Cart: {cartItems.length}
    </div>
  );
}