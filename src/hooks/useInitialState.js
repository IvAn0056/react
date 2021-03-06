import React, { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [toggleOrder, setToggleOrder] = useState(false);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, {...payload, idCart:state.cart.length+1}, ]
        });
        
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((product) => product.idCart !== payload.idCart)
        })
        
    };
    
    const toggleOrderHandle = () => {
        setToggleOrder(!toggleOrder);
    }

    return {
        state,
        addToCart,
        removeFromCart,
        toggleOrderHandle,
        toggleOrder
    }
}

export default useInitialState;