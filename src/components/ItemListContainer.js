import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getProducts from '../utils/products'
import ItemCount from './ItemCount';
import Loader from './Loader'

const ItemListContainer = (props) => {
    const [arrayProducts, setArrayProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts()
          .then((response) => setArrayProducts(response))
          .catch((err) => console.error(err))
          .finally(() => setLoading(false))
    }, []);

    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} producto(s) al carrito`)
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            {loading ? <Loader /> : <ItemList products={arrayProducts} />}
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;