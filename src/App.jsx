
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'

function App() {

  return (
    <div className='mx-2'>
    <RouterProvider router={router}></RouterProvider>
  </div>
  )
}

export default App
