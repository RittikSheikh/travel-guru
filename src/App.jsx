import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router/router'

function App() {

  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
