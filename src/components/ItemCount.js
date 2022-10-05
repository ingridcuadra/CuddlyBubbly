import React from 'react';
import { useState } from 'react';

const ItemCount = ( { initial, stock, onAdd} ) => {
    const [quantity, setQuantity] = useState(initial);
    const handleCant = () => {
        setQuantity(quantity+1)
    }
    const handleCantMin = () => {
        setQuantity(quantity-1)
    }
    return (
        <>
            <div className="container-count">
                <button disabled={quantity >= stock} onClick={handleCant} className="btn-cart btn btn-secondary btn-sm">+</button>
                <p className="quantity">{quantity}</p>
                <button disabled={quantity <= 0} onClick={handleCantMin} className="btn-cart btn btn-secondary btn-sm">-</button>
                <button disabled={quantity <= 0 || stock <= 0} onClick={() => onAdd(quantity)} className="btn btn-secondary">Añadir al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;