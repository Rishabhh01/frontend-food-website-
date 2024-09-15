import React, { useState, useContext } from 'react';
import './Fooditem.css';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storecontext } from "../Contextapi/Storecontext";

const Fooditem = ({ id, name, price, description, image }) => {
  const [itemcount, setitemcount] = useState(0);
  const { addTocart, cartitem } = useContext(storecontext);
  const cartItemamount = cartitem && cartitem[id] ? cartitem[id] : 0;

  const notifyAdd = () => toast.success('🦄 Item added to cart', {
    position: "bottom-left",
    autoClose: 800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const notifyRemove = () => toast.success('🦄 Item removed from cart', {
    position: "bottom-left",
    autoClose: 800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        <div className='food-item-actions'>
          {itemcount === 0 ? (
            <img
              className='add'
              onClick={() => {
                setitemcount((prev) => {
                  notifyAdd();
                  addTocart(id);
                  return prev + 1;
                });
              }}
              src={assets.add_icon_white}
              alt='Add'
            />
          ) : (
            <div className='food-item-counter'>
              <img
                onClick={() => {
                  if (itemcount > 0) {
                    setitemcount((prev) => {
                      notifyRemove();
                      return prev - 1;
                    });
                  }
                }}
                src={assets.remove_icon_red}
                alt='Remove'
              />
              <p>{itemcount}</p>
              <img
                onClick={() => {
                  setitemcount((prev) => {
                    notifyAdd();
                    addTocart(id);
                    return prev + 1;
                  });
                }}
                src={assets.add_icon_green}
                alt='Add'
              />
            </div>
          )}
        </div>
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
}

export default Fooditem;
