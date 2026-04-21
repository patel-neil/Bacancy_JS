import React from "react";
import { useCart } from "../context/cartContext";

export default function CartIcon({onClick}) {
    const { cartItems } = useCart();

    return (
        <div style = {{cursor : "pointer"}} onClick={onClick}>
            🛒 Cart ({cartItems.length})
        </div>
    );
}