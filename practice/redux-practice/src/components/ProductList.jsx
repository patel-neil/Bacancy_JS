import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Navigate,useNavigate } from "react-router-dom";

const ProductListComp = () => {

    const [productList, setProductList] = useState([])

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        const fetchdata = async () => {
            const res = await fetch("https://dummyjson.com/products");

            const data = await res.json();

            setProductList(data.products);
        }

        fetchdata();
    },[])

    const items = useSelector((state) => state.cart.items);

    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
        <div>
            <button className="cart-btn" onClick={() => navigate("/cart")}>
                🛒 {totalCount}
            </button>
        </div>
        <div>
            {productList.map((item) => {
                return (<div key = {item.id}>
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                    <button onClick={() => dispatch(addItem({
                        id : item.id,
                        title : item.title,
                        price : item.price,
                        quantity : 1
                    }))}>
                        Add to cart
                    </button>
                </div>)
            })}
        </div>
        </>
    )
}

export default ProductListComp;