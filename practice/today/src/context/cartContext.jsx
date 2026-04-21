import { useContext, useState } from "react";
import React from "react";

const CartContext = React.createContext();

export function CartProvider({children})
{
    const [cartItems, setcartItems] = useState([]);

    const addToCart = (product) => {
        setcartItems((prev) => [...prev, product]);
    }

    return (
        <CartContext.Provider value = {{cartItems, addToCart}} >
            {children}
        </CartContext.Provider>
    );
}

export function useCart()
{
    return useContext(CartContext);
}