import React from 'react'
import Product from './components/Product'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Cart from './components/cart'
import Fooditem from './components/Fooditem'
import Login from './login'


const App = () => {
  return (
    <div className='app'>
      <Product/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Fooditem' element={<Fooditem/>}/>
        <Route path="/login"element={<Login/>}/>
      </Routes>
     
    </div>
  )
}

export default App
