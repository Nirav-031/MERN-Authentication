import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Register from './components/Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}>

          </Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
