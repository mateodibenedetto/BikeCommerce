import React, { useState } from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({ product }) => {
  const { name, pictureUrl, price, stock } = product;
  const [qty, setQty] = useState(product.quantity); 
  const { removeItem, totalPrice } = useCartContext() 
   
  const handleAdd = () => {
    if(product.quantity >= stock) {
      alert('No hay mas stock')
    } else {
      setQty(product.quantity += 1); 
      totalPrice()
    } 
  }
  const handleRemove = () => {
    if (product.quantity <= 1) {
      removeItem(product.id)
    }
    setQty(product.quantity -= 1); 
    totalPrice()
  } 

  return (
    <div className="cart-item-container">
      <div className="cart-item-left">
        <button onClick={() => removeItem(product.id)}><RiCloseCircleFill className="cart-item-delete" /></button>
        <img className="cart-item-img" src={pictureUrl} alt="bike" />
        <h2 className="cart-item-name">{name}</h2>
      </div>
      <div className="cart-item-rigth">
        <p className="cart-item-price">${price}</p>
        <div className="quantity">
          <MdKeyboardArrowUp onClick={handleAdd} className="arrow-up"/>
          <p className="cart-item-quantity">{qty}</p>
          <MdKeyboardArrowDown onClick={handleRemove} className="arrow-down" />
        </div>
      </div>
    </div>
  );
};
