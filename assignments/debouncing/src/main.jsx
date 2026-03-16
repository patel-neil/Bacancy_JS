import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './component/SearchBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Search />
  </StrictMode>,
)
