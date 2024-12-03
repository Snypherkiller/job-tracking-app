import React from 'react'
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom'
import {Dashboard,Landing,Register,Error} from './pages/Index'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Landing' element={<Landing/>}/>
          <Route path='/Login' element={<div>Login</div>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
