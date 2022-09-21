import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartList, clear } = useContext(CartContext);

    return (
        <>
            <h5>Soy un carrito 🛒​</h5>
            <button onClick={clear} className="btn btn-secondary" type="submit">Borrar todo</button>
            {
                cartList.map(product => <li>{product.name}</li>)
            }
        </>
    );
}

export default Cart;
