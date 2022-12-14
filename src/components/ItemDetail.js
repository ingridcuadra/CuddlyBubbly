import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ( { product } ) => {
    const [itemCount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        Swal.fire({
            title: 'Operación exitosa',
            text: `Agregaste ${quantity} producto(s) al carrito`,
            icon: 'success',
            confirmButtonColor: '#d9e3f3'
        })
        setItemCount(quantity)
        addItem(product, quantity)
    }

    return (
        <>
        <div className="datail-container">
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
                            {
                                itemCount === 0
                                ? <ItemCount initial={itemCount} stock={product.stock} onAdd={onAdd} />
                                : <Link to="/cart"><button className="btn btn-secondary">Finalizar compra</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;