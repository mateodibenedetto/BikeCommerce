import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext';

import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const { totalPrice } = useCartContext() 

    const handleAdd = () => {
        if(count < stock) {
            setCount(count + 1);
            totalPrice()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'There is no more stock'
              })
        }
    }

    const handleDec = () => {
        if(count <= 0) return;
        setCount(count - 1);
        totalPrice()
    }

    const addCart = () => {
        onAdd(count);  
        totalPrice();
    }

  return (
    <div className='item-count-container'>
        <div className='item-count'>
            <div className="quantity">Quantity: </div>
            <div className='item-count-handler'>
                <span onClick={handleDec} className="item-dec">-</span>
                <p className='item-count-number'>{count}</p>
                <span onClick={handleAdd} className="item-inc">+</span>
            </div>
            <div className="stock">({stock} Available)</div>
        </div>
        <button className='add-item' onClick={addCart}>Add to cart</button>
    </div>
  )
}

export default ItemCount