import React from 'react';
import { useState } from 'react';
import osito from '../img/osito.jpg'

const ItemCount = () => {
    const [cant, setCant] = useState(0);
    const handleCant = () => {
        setCant(cant+1)
    }
    const handleCantMin = () => {
        setCant(cant-1)
    }
    const handleAlert = () => {
        alert(`Agregaste ${cant} producto(s) al carrito`)
    }
    return (
        <div>
            <div className="card" style={{width: '14rem'}}>
                <img src={osito} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Osito</h5>
                    <div className="container-count">
                        <button disabled={cant >= 10} onClick={handleCant} className="btn-cart btn btn-secondary btn-sm" type="submit">+</button>
                        <p className="cant">{cant}</p>
                        <button disabled={cant <= 1} onClick={handleCantMin} className="btn-cart btn btn-secondary btn-sm" type="submit">-</button>
                    </div>
                    <button disabled={cant == 0} onClick={handleAlert} className="btn btn-secondary" type="submit">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;