import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from  './components/Home'
import { CartProvider } from './context/cartContext'
import CartIcon from './components/CartIcon'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Home />
    </CartProvider>
  </StrictMode>,
)
