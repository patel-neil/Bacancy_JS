import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClassForm from './component/ClassForm'
import ConfigDrivenForm from './component/Functional'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      {/* <ClassForm /> */}
      <ConfigDrivenForm />
    </div>
  </StrictMode>
)
