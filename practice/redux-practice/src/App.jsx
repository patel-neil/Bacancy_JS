import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductListComp from './components/ProductList'
import CartComp from './components/Cart'

function App() {

  return (
    <Routes>
      <Route path = "/" element = { <ProductListComp/> } />
      <Route path = "/cart" element = { <CartComp/> } />
    </Routes>
  );
}

export default App;