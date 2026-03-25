import { useCart } from "../context/cartContext"

export default function ProductList({ products, loading }) {

    const  {addToCart}  = useCart();

    return (
        <div className="home">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                {item.title} ({item.rating})
                <button onClick={() => addToCart(item)}>
                    Add to cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}