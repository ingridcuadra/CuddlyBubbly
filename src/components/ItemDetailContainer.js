import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getProducts from '../utils/products';

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    
    useEffect(() => {
        getProducts()
          .then((response) => setDetailProduct(response))
          .catch((err) => console.error(err))
    });

    return (
        <>
            <ItemDetail product={detailProduct} />
        </>
    );
}

export default ItemDetailContainer;
