import React from 'react';
import { CartContext } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { Routing } from './routes/Routing';

function App() {

  return (
    <ThemeProvider>
      <CartContext>
        <Routing />
      </CartContext>
    </ThemeProvider>
  );
}

export default App;
