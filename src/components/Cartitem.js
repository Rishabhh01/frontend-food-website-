import React from 'react'

const Cartitem = (props) => {
    const {_id, name, price,image}=props.data
  return (
    <div>
        <img src={image }/>
        <p>{name}</p>
        <p>{price}</p>
        <p></p>
        
    
    </div>
  )
}

export default Cartitem
