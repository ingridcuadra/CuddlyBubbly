import React, { useState, createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCartList(cartList.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCartList([...cartList, {...item, quantity}]);
        }
    }

    const subtotalEachProd = (id) => {
        let index = cartList.map(product => product.id).indexOf(id);
        return cartList[index].price * cartList[index].quantity;
    }

    const subtotalPrice = () => {
        let total = cartList.map(item => subtotalEachProd(item.id))
        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcIVA = () => {
        return subtotalPrice() * 0.21;
    }

    const totalPrice = () => {
        return subtotalPrice() + calcIVA();
    }

    const totalProducts = () => cartList.reduce((counter, productoActual) => counter + productoActual.quantity, 0)

    const isInCart = (id) => cartList.find(product => product.id === parseInt(id)) ? true : false;

    const removeItem = (id) => setCartList(cartList.filter((product) => product.id !== id));

    const clear = () => setCartList([]);

    return (
        <CartContext.Provider value={{cartList, addItem, subtotalEachProd, subtotalPrice, calcIVA, totalPrice, totalProducts, isInCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;