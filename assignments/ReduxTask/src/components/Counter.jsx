import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/actions';

export default function Counter() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const exampleItem = { id: 1, name: 'Sample Product' };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>Redux Cart Example</h2>
      <p>Cart Items: {cart.length}</p>
      <button onClick={() => dispatch(addToCart(exampleItem))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(exampleItem.id))} style={{ marginLeft: '1rem' }}>Remove from Cart</button>
      <div style={{ marginTop: '1rem' }}>
        <strong>Cart Contents:</strong>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
