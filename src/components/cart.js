import React, { useContext } from 'react';
import { storecontext } from "../Contextapi/Storecontext";
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from './images/OIP.jpeg';


const Cart = () => {
  const { cartitem, food_list, removeFromCart } = useContext(storecontext);

  if (!cartitem || !food_list) {
    return <div>Loading...</div>;
  }

  const cartItems = food_list.filter(item => cartitem[item._id] > 0);

  // Calculate the total cost
  const totalCost = cartItems.reduce((total, item) => {
    return total + item.price * cartitem[item._id];
  }, 0);

  return (
    <div className='cart'>
      <div className='cart-header'>
        <img src={Logo} alt='Logo' className='logo' />
        <h1>Your Cart <FontAwesomeIcon icon={faShoppingCart} /></h1>
      </div>
      {cartItems.length === 0 ? (
        <p className='empty-cart'>Your cart is empty.</p>
      ) : (
        <>
          <div className='cart-items-header'>
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>
          <div className='cart-items-list'>
            {cartItems.map(item => (
              <div key={item._id} className='cart-item'>
                <img src={item.image} alt={item.name} className='cart-item-img' />
                <p className='cart-item-title'>{item.name}</p>
                <p className='cart-item-price'>${item.price}</p>
                <p className='cart-item-quantity'>{cartitem[item._id]}</p>
                <p className='cart-item-total'>${item.price * cartitem[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)} className='remove-btn'>
                  <FontAwesomeIcon icon={faTrashAlt} /> Remove
                </button>
              </div>
            ))}
          </div>
          <div className='cart-total'>
            <h2>Total Cost: <span>${totalCost.toFixed(2)}</span></h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
