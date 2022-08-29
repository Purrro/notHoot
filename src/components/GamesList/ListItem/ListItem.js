import React from "react";
import "./ListItem.scss"

const ListItem = ({item}) => {
  return (
    <div className="listItem" key={item.id}>
      {item.name}
    </div>
  );
};

export default ListItem;
