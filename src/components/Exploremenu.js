import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../assets/assets'


const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Are You Ready To Explore 🤔 </h1>
        <p className='explore-menu-text'> Explore Our Delicious Menu Featuring Fresh Salads, Gourmet Pizzas🍕, Savory Burgers🍔 And Decadent Desserts🍨. Each Dish is Crafted With The Finest Ingredients To Satisfy Your Cravings. Order Now For Fast And Convenient Delivery! </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>

                )
            })}

        </div>
        

      
    </div>
  )
}

export default Exploremenu
