import React from "react";
import { Link } from "react-router-dom";
import { items } from "./text";

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/blg/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;