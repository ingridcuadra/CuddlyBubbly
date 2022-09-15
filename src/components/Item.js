import React from 'react';

const Item = ( { product } ) => {
    return (
        <div>
            <div className="card" style={{width: '14rem'}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="description">{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Stock disponible: {product.stock}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;
