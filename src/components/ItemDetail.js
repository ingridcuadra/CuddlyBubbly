import React from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ( { product } ) => {
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} producto(s) al carrito`)
    }

    return (
        <>
        <div className="card-datail-container">
            <div className="card-datail-container card mb-3">
                <div className="row g-0">
                    <div className="img-detail-container col-md-4">
                        <img src={product.image} className="img-detail" alt={product.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Precio: ${product.price}</p>
                            <p className="card-text"><small className="text-muted">Stock disponible: {product.stock}</small></p>
                            <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
