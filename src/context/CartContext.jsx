import React, { createContext, useState, useContext } from "react"; 
import { useLocalStorage } from "../hooks/useLocalStorage";

const Shop = createContext([]);

// exportar un Hook para que traiga toda la info de useContext y el createContext
export const useCartContext = () => useContext(Shop);


export const CartContext = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);  
  const [totalAmount, setTotal] = useState();


  const addItem = (item) => {

    const productoRepetido = isInCart(item.id); 
    if (productoRepetido) {
        const cartModified = cart.map(product => {
            if (product.id === item.id) {
                product.quantity += item.quantity
                return product
            }
            return product
        })
        setCart(cartModified)
    } else {
        const cartModificado = [...cart, item]
        setCart(cartModificado)
    }

}

  const totalProducts = () => cart.reduce((acc, product) => acc + product.quantity, 0)

  const totalPrice = () => setTotal(cart.reduce((prev, act) => prev += act.quantity * act.price, 0))

  const isInCart = (id) => cart.some((product) => product.id === id);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const clearCart = () => setCart([]);


  return (
    <Shop.Provider value={{ cart, totalAmount, addItem, removeItem, clearCart, totalProducts, totalPrice }}>
      {children}
    </Shop.Provider>
  )
};
