import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import SendMail from './components/SendMail.jsx';

// import { Login } from './components/Login.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/recoveryPassword' element={<SendMail/>}></Route>
         
          
        </Routes>
      </BrowserRouter>
      {/* <SendMail/> */}
      </>
  )
}

export default App
