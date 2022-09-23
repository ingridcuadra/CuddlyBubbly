import React from 'react';
import { useState } from 'react';

const ItemCount = ( { initial, stock, onAdd} ) => {
    const [cant, setCant] = useState(initial);
    const handleCant = () => {
        setCant(cant+1)
    }
    const handleCantMin = () => {
        setCant(cant-1)
    }
    return (
        <>
            <div className="container-count">
                <button disabled={cant >= stock} onClick={handleCant} className="btn-cart btn btn-secondary btn-sm" type="submit">+</button>
                <p className="cant">{cant}</p>
                <button disabled={cant <= 0} onClick={handleCantMin} className="btn-cart btn btn-secondary btn-sm" type="submit">-</button>
                <button disabled={cant <= 0 || stock <= 0} onClick={() => onAdd(cant)} className="btn btn-secondary" type="submit">Añadir al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;