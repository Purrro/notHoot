import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss"

const ListItem = ({item}) => {
  return (
    <div className="listItem" key={item.id}>
      <Link to={`/game/${item.id}`}> {item.name} </Link>
    </div>
  );
};

export default ListItem;
