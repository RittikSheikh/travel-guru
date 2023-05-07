import { RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './pages/Shared/Header/Header'
import { router } from './Router/router'

function App() {

  return (
    <div className='p-2'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
