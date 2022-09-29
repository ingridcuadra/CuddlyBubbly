import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        const docFetch = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            setDetailProduct(docSnap.data())
            setLoading(false)
        }
        docFetch()
    }, [id]);

    return (
        <>
            {loading ? <Loader /> : <ItemDetail product={detailProduct} />}
        </>
    );
}

export default ItemDetailContainer;
