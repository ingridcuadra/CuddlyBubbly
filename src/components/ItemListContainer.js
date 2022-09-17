import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getProducts from '../utils/products';
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

    return (
        <div>
            <h1>{props.greeting}</h1>
            {loading ? <Loader /> : <ItemList products={arrayProducts} />}
        </div>
    );
}

export default ItemListContainer;