import React from 'react' 
import { Cart } from '../../components/Cart/Cart'
import { useTheme } from '../../context/ThemeContext';
 

const CartContainer = () => {
  const { theme } = useTheme(); 

  return (
    <div className={theme} > 
      <Cart />
    </div>
  )
}

export default CartContainer