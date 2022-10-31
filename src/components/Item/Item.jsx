import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, pictureUrl } = product;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="item">
      <div className="item-picture">
        <img className="item-img" src={pictureUrl} alt={name} />
      </div>
      <div className="item-description">
        <p className="item-name">{name}</p>
        <button className="item-detail" onClick={handleNavigate}>
          see more
        </button>
      </div>
    </div>
  );
};

export default Item;
