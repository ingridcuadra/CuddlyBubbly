import React, { useState, createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, quantity) => {
        setCartList([...cartList, product])
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;