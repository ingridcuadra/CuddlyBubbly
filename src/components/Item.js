import React from 'react';
import { Link } from 'react-router-dom';
 
const Item = ( { product } ) => {
    return (
        <>
            <div className="card" style={{width: '14rem'}}>
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>Precio: ${product.price}</p>
                <Link to={"/item/" + product.id}><button className="btn btn-secondary">Ver detalles</button></Link>
                </div>
            </div>
        </>
    );
}

export default Item;
