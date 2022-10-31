import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { name, pictureUrl, description_title, description, stock } = product;
  const [qty, setQty] = useState(0); 
  const navigate = useNavigate();

  /* Context */
  const { addItem } = useCartContext(); 

  const addToCart = (quantity) => {
    setQty(quantity); 
    const productToSave = {...product, quantity: qty}
    addItem(productToSave);
  };
  
  const handleFinish = () => { 
    const productToSave = {...product, quantity: qty}
    addItem(productToSave);
    navigate("/cart");
  };
 

  return (
    <div className="item-detail-container">
      <h2 className="title">{name}</h2>
      <div className="detail-container">
        <div className="item-detail">
          <div className="item-img">
            <img className="img-responsive" src={pictureUrl} alt="img" />
          </div>
          <div className="item-desc">
            <h2 className="description-title">{description_title}</h2>
            <p className="description">{description}</p>
            {!qty ? (
              <ItemCount stock={stock} initial={1} onAdd={addToCart} />
            ) : (
              <button className="btn-finish" onClick={handleFinish}>
                Finish Purchase
              </button>
            )} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
