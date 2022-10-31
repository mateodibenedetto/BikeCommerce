import React from 'react';
import {IoMdCart} from 'react-icons/io';
import { useCartContext } from '../../context/CartContext';

const CardWidget = () => {
  const { totalProducts } = useCartContext()

  return (
    <><IoMdCart />
    <span className='product-number'>{totalProducts() || ''}</span></>
  )
}

export default CardWidget