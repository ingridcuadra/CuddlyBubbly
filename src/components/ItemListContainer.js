import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getProducts from '../utils/getProducts';
import Products from '../utils/products';
import Loader from './Loader';
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        if(id){
            setLoading(true)
            getProducts(2000, Products.filter(product => product.categoryId === parseInt(id)))
                .then((response) => setArrayProducts(response))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false))
        }else{
            setLoading(true)
            getProducts(2000, Products)
                .then((response) => setArrayProducts(response))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false))
        }
    }, [id]);

    return (
        <div>
            {loading ? <Loader /> : <ItemList products={arrayProducts} />}
        </div>
    );
}

export default ItemListContainer;