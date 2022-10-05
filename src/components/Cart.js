import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cartList, subtotalEachProd, subtotalPrice, calcIVA, totalPrice, clear, removeItem } = useContext(CartContext);

    const createOrder = async () => {
        let itemsFromDB = cartList.map(product => ({
            id: product.id,
            title: product.name,
            price: product.price,
            quantity: product.quantity
        }))
        let order = {
            buyer: {
                name: "Arnaldo Ariel Ortega",
                email: "burrito_ortega@gmail.com",
                phone: "1119862018"
            },
            date: serverTimestamp(),
            items: itemsFromDB,
            total: totalPrice()
        }
        
        const newOrder = doc(collection(db, "orders"))
        await setDoc(newOrder, order)

        cartList.forEach(async (product) => {
            const productRef = doc(db, "products", product.id)
            await updateDoc(productRef, {
                stock: increment(-product.quantity)
            })
        });

        clear()

        Swal.fire({
            title: 'Compra realizada',
            text: `Este es el ID de tu compra: ${newOrder.id}`,
            icon: 'success',
            confirmButtonColor: '#d9e3f3',
            footer: 'Conserve el ID de su compra, por favor'
        })
    }

    if(cartList.length === 0) {
        return (
            <>
                <h5 className="i-am-cart">Carrito 🛒​</h5>
                <Link to="/"><button className="btn-continue btn btn-secondary">Continuar comprando</button></Link>
                <div className="empty-cart">
                    <p>No hay productos en el carrito</p>
                </div>
            </>
        )
    }

    return (
        <>
            <h5 className="i-am-cart">Carrito 🛒​</h5>
            <div className="buttons-cart">
                <Link to="/"><button className="btn btn-secondary">Continuar comprando</button></Link>
                <button onClick={clear} className="btn btn-secondary">Eliminar todos los artículos</button>
            </div>
            {
                cartList.map(product => 
                <div className="cart-container" key={product.id}>
                    <div className="card-cart-container card mb-3">
                        <div className="row g-0">
                            <div className="img-cart-container col-md-4">
                                <img src={product.image} className="img-cart" alt={product.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body card-body-cart">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Cantidad seleccionada: {product.quantity}</p>
                                    <p className="card-text">Precio: ${product.price} c/u</p>
                                    <p className="card-text">Subtotal: ${subtotalEachProd(product.id)}</p>
                                    <button onClick={() => removeItem(product.id)} className="btn btn-secondary">Eliminar artículo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            <div className="order-card card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="order-title card-title">Orden de compra</h5>
                    <p className="card-text">Subtotal: ${subtotalPrice().toFixed(2)}</p>
                    <p className="card-text">IVA: ${calcIVA().toFixed(2)}</p>
                    <h5 className="order-total card-text">Total: ${totalPrice().toFixed(2)}</h5>
                    <button onClick={createOrder} className="btn btn-secondary">Comprar ahora</button>
                </div>
            </div>
        </>
    );
}

export default Cart;