import React from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ( { product } ) => {
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} producto(s) al carrito`)
    }

    return (
        <>
            <div className="detail-container">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="description">{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    <p className="stock">Stock disponible: {product.stock}</p>
                </div>
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>
        </>
    );
}

export default ItemDetail;
