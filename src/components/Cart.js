import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartList, clear, removeItem } = useContext(CartContext);

    return (
        <>
            <h5 className="i-am-cart">Carrito 🛒​</h5>
            {
                cartList.map(product => 
                <div className="cart-container" key={product.id}>
                    <div className="card-cart-container card mb-3">
                        <div className="row g-0">
                            <div className="img-cart-container col-md-4">
                                <img src={product.image} className="img-cart" alt={product.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body card-body-cart">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Cantidad seleccionada: {product.quantity}</p>
                                    <p className="card-text">Precio: ${product.price}</p>
                                    <button onClick={removeItem} className="btn btn-secondary" type="submit">Eliminar artículo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            <div className="btn-delete-all">
                <button onClick={clear} className="btn btn-secondary" type="submit">Eliminar todos los artículos</button>
            </div>
        </>
    );
}

export default Cart;
