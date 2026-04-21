import { useSelector, useDispatch } from "react-redux";
import {removeFromCart} from "../redux/actionCreator";

export default function CartModal() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}