import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { totalProducts, cartList } = useContext(CartContext);

    if(cartList.length === 0) {
        return (
            <>
                <img className="cart-icon" src="https://img.icons8.com/fluency/43/000000/favorite-cart.png"/>
            </>
        )
    }

    return (
        <div>
            <img className="cart-icon" src="https://img.icons8.com/fluency/43/000000/favorite-cart.png"/>
            <span className="total-cart-icon">{totalProducts()}</span>
        </div>
    );
}

export default CartWidget;
