import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreator";

export default function ProductList({ products, loading }) {
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.title}</h3>

          <p>💰 Price: ${product.price}</p>
          <p>⭐ Rating: {product.rating}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}