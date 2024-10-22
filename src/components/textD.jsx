import React from "react";
import { useParams } from "react-router-dom";
import { items } from "./text";

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div>
      {item ? (
        <>
          <h1 style={{color:"#fff"}}>{item.name}</h1>
          <p style={{color:'#fff'}}>{item.description}</p>
        </>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default ItemDetail;
