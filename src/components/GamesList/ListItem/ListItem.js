import React from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

import "./ListItem.scss";

const ListItem = ({ item, removeGame }) => {
  return (
    <div className="gameListItem" key={item.id}>
      <div className="gameListItemContent">
        <Link to={`/game/${item.id}`}> {item.name} </Link>
        <div className="gameListItemIcons">
          <DeleteOutlined
            onClick={() => {
              removeGame(item.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
