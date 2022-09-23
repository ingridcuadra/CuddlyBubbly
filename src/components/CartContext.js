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

    const isInCart = (id) => cartList.find(product => product.id === parseInt(id)) ? true : false;

    const removeItem = (id) => {
        // setCartList(cartList.filter((product) => product.id !== parseInt(id)))
        // setCartList(cartList.filter((product) => product.id !== id))
        const newCartList = cartList.filter((product) => product.id !== parseInt(id))

        setCartList(newCartList)

        console.log(`estoy funcionando`)
        console.log(newCartList)
    }

    const clear = () => setCartList([]);

    return (
        <CartContext.Provider value={{cartList, addItem, isInCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;