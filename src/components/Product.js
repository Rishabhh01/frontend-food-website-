import React, { useState, useContext } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { storecontext } from "../Contextapi/Storecontext";
import Logo from './images/OIP.jpeg';

const Product = () => {
  const [menu, setMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartitem, food_list } = useContext(storecontext);

  const notify = () => toast.success('🦄 Welcome to our site!', {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
  };

  const cartItems = food_list ? food_list.filter(item => cartitem[item._id] > 0) : [];

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img src={Logo} alt="" className='logo' />
        <span className='logo-text modern-text'>SWADIFY</span>
      </Link>

      <div className='navbar-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to='/' onClick={() => { setMenu("home"); notify(); setIsMenuOpen(false); }} className={menu === "home" ? "active" : ""}>
            <AiOutlineHome className='menu-icon' /> Home
          </Link>
        </li>
        <li>
          <Link to='/menu' onClick={() => { setMenu("Menu"); setIsMenuOpen(false); }} className={menu === "Menu" ? "active" : ""}>
            <AiOutlineMenu className='menu-icon' /> Menu
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={() => { setMenu("Contact us"); setIsMenuOpen(false); }} className={menu === "Contact us" ? "active" : ""}>
            <AiOutlinePhone className='menu-icon' /> Contact Us
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => { setMenu("About us"); setIsMenuOpen(false); }} className={menu === "About us" ? "active" : ""}>
            <AiOutlineUser className='menu-icon' /> About Us
          </Link>
        </li>
      </ul>

      <div className='navbar-right'>
        <div className='navbar-search'>
          <input
            type="text"
            className='search-input'
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='search-button' onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        <Link to='/cart' className='navbar-cart'>
          <FaShoppingCart />
          <span className='cart-text'>Cart</span>
          {cartItems.length > 0 && <div className='cart-dot'></div>}
        </Link>

        <Link to='/login' className='navbar-signin'>
          <FiUser />
          <span className='signin-text'>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Product;
