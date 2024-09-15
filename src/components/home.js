import React, { useState } from 'react'
import './home.css'
import Header from './Header';
import Exploremenu from './Exploremenu';
import Fooddisplay from './Fooddisplay';


const Home = () => {
  const [category,setcategory]=useState("All")
  
  return (
    <div>
     
       <Header/>
       <Exploremenu category={category} setcategory={setcategory}/>
       <Fooddisplay  category={category}/>

    </div>
  )
}

export default Home
