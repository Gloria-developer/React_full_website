import React, { useState } from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../routes/CartContext.js";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

   const { cart, isOpen, toggleCart } = useContext(CartContext);
      const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icons: <HomeIcon /> },
    { text: "About", icons: <InfoIcon /> },
    { text: "Testimonials", icons: <CommentRoundedIcon /> },
    { text: "Contact", icons: <PhoneRoundedIcon /> },
    { text: "Cart", icons: <ShoppingCartRoundedIcon /> },
  ];

  return (<nav>
    <div className="nav-logo-container" data-aos="fade-up">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container" data-aos="fade-up">
        {/* <a href="">Home</a> */}
        <Link to="/" className="">
                Home
            </Link>
        <Link to="/fullabout" className="">
                About
            </Link>
            <Link to="/testimonial" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
            transition duration-300">
                Testimonails
            </Link>
            <Link to="/contact" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
            transition duration-300">
                Contact
            </Link>
        {/* <a href="">About</a> */}
        {/* <a href="">Testimonials</a>
        <a href="">Contact</a> */}
        <a onClick={toggleCart} style={{ cursor: "pointer" }}>
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <a href="">
        <button className="primary-button">Sign in</button>
        </a>
        
         {isOpen && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      </div>

      <div className="navbar-menu">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
  </nav>
  );
};

export default Navbar;
