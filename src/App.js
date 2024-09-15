import React from 'react'
import Product from './components/Product'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Cart from './components/cart'
import Placeorder from './components/placeorder'
import Login from './components/Login'


const App = () => {
  return (
    <div className='app'>
      <Product/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
     
    </div>
  )
}

export default App
