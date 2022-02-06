import React from 'react';
import '../styles/MenuMobile.scss';

const MenuMobile = () => {
  return (
    <div className="mobile-menu">
    <ul className="menuM menu-one">
        <li>
            <a>CATEGORIES</a>
        </li>
        <li>
            <a href="/home">All</a>
        </li>
        <li>
            <a href="/home">Clothes</a>
        </li>
        <li>
            <a href="/home">Electronics</a>
        </li>
        <li>
            <a href="/home">Furnitures</a>
        </li>
        <li>
            <a href="/home">Toys</a>
        </li>
        <li>
            <a href="/home">Others</a>
        </li>
    </ul>

    <ul className="menuM menu-two">
        <li>
            <a href="/myorders">My orders</a>
        </li>
        <li>
            <a href="/edit-account">My account</a>
        </li>
    </ul>

    <ul className="menuM menu-three">
        <li>
            <a  className="emailM">camilayoko@gmail.com</a>
        </li>
        <li>
            <a href="/" className="sign-outM">Sign out</a>
        </li>
    </ul>
</div>
  );
};

export default MenuMobile;
