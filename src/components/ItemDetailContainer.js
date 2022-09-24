import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getProducts from '../utils/getProducts';
import Products from '../utils/products';
import Loader from './Loader';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        getProducts(2000, Products.find(product => product.id === parseInt(id)))
          .then((response) => {
            setDetailProduct(response)
            setLoading(false)
        })
          .catch((err) => console.error(err))
    });

    return (
        <>
            {loading ? <Loader /> : <ItemDetail product={detailProduct} />}
        </>
    );
}

export default ItemDetailContainer;
