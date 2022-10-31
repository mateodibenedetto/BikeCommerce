import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

import { Loader } from "../../components/Loader/Loader";
import { useTheme } from "../../context/ThemeContext";
import { useFirebase } from "../../hooks/useFirebase";

const ItemListContainer = () => { 
  const { theme } = useTheme(); 

  const {categoryId} = useParams() 

  const [loading, products, error] = useFirebase(categoryId)  

  return (
    <div className={`item-list-container ${theme}`}>
      { loading
      ? <Loader />
      : <ItemList products={products} />
      } 
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ItemListContainer;
