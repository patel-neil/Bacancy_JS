import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../features/cart/cartSlice";

const CartComp = () => {

    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div>
            <h1>Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                {items.map((item) => (
                    <div key = {item.id}>
                        <h3>{item.title}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>

                        <button onClick={() => dispatch(increaseQty({ id : item.id}))}>
                            +
                        </button>

                        <button onClick={() => dispatch(decreaseQty({ id : item.id}))}>
                            -
                        </button>

                        <button onClick={() => dispatch(removeItem({ id : item.id}))}>
                            Remove
                        </button>
                    </div>
                ))}

                <h3>Total Amount: {totalAmount}</h3>
                </>
            )}
        </div>
    )
}

export default CartComp;