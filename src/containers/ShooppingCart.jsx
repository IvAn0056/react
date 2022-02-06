import React, { useContext, useState } from 'react';
import '../styles/ShoppingCart.scss';
import AppContext from '../context/AppContext';

import flecha from '@icons/flechita.svg';
import OrderItem from '../components/OrderItem';

const ShooppingCart = () => {
    const { state } = useContext(AppContext);
    const { toggleOrderHandle } = useContext(AppContext);
    
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
        
    }
  return (
    <div className="principal-containerSC">

        <div className="secundary-containerSC">
            <div className="titleSC">
                <img src={flecha} alt="arrow" onClick={toggleOrderHandle}/>
                <h1> Shopping cart</h1>
            </div>
            {state.cart.map(product => (
                
                <OrderItem product= {product} key={`orderItem-${product.idCart}`}/>
                
            ))}
    
            <div className="total-container">
                <div className="total">
                    <p>Total</p>
                    <p>${sumTotal()}</p>
                </div>
                <button className="primary-buttonSC">Checkout</button>
            </div>
        </div>
        
    </div>
  );
};

export default ShooppingCart;

/* {state.cart.length > 1 ? state.cart.reduce((a, b) => {
    return a.price + b.price;
}) : state.cart.length == 1 ? state.cart[0].price : '0'} */