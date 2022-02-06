import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import "../styles/Header.scss";
import DisplayMenuD from './DisplayMenuD';
import MenuMobile from "../containers/MenuMobile";
import menu from "../assets/Icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import ShooppingCart from "../containers/ShooppingCart";
import shopCart from "@icons/icon_shopping_cart.svg";
import shopCartN from "@icons/icon_shopping_cart_notification.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { state } = useContext(AppContext);
  const { toggleOrderHandle } = useContext(AppContext);
  const { toggleOrder } = useContext(AppContext);
  

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      
      <img src={menu} alt="menu" className="menu" onClick={() => setToggleMenu(!toggleMenu)}/>
      
      <div className="navbar-left">
      <Link to="/home">
        <img src={logo} alt="logo" className="navLogo" />
      </Link>
        <ul>
          <li>
            <a className="all" href="/">
              All
            </a>
          </li>
          <li>
            <a href="/home">Clothes</a>
          </li>
          <li>
            <a href="/home">Electronics</a>
          </li>
          <li>
            <a href="/home">Furniture</a>
          </li>
          <li>
            <a href="/home">Toys</a>
          </li>
          <li>
            <a href="/home">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="email" onClick={handleToggle}>
            camilayoko@gmail.com
          </li>
          <li className="navbar-shoppingcar" onClick={toggleOrderHandle}>
            <img src={state.cart.length > 0 ? shopCartN : shopCart} alt="shopping-car" />
          </li>
          {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
        </ul>
      </div>
      {toggleMenu ? <MenuMobile /> : null}
      {toggle ? <DisplayMenuD /> : null}
      {toggleOrder ? <ShooppingCart /> : null}
    </nav>
  );
};

export default Header;
