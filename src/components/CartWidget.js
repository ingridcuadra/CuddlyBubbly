import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);

    return (
        <div>
            <img className="cart-icon" src="https://img.icons8.com/fluency/43/000000/favorite-cart.png"/>
            <span>{totalProducts() || ''}</span>
        </div>
    );
}

export default CartWidget;
