import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemListContainer = () => {
    const [arrayProducts, setArrayProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const firestoreFetch = async () => {
            let q
            if (id) {
                q = query(collection(db, "products"), where('categoryId', '==', parseInt(id)))
            } else {
                q = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            setLoading(false)
            return dataFromFirestore
        }
        firestoreFetch()
            .then(result => setArrayProducts(result))
    }, [id]);

    return (
        <div>
            {loading ? <Loader /> : <ItemList products={arrayProducts} />}
        </div>
    );
}

export default ItemListContainer;