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
            <div className="card" style={{width: '14rem'}}>
                <div className="card-body">
                    <div className="container-count">
                        <button disabled={cant >= stock} onClick={handleCant} className="btn-cart btn btn-secondary btn-sm" type="submit">+</button>
                        <p className="cant">{cant}</p>
                        <button disabled={cant <= 1} onClick={handleCantMin} className="btn-cart btn btn-secondary btn-sm" type="submit">-</button>
                    </div>
                    <button disabled={stock <= 0} onClick={() => onAdd(cant)} className="btn btn-secondary" type="submit">Añadir al carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount;