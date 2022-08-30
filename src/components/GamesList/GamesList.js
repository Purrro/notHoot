import React from "react";
import ListItem from "./ListItem/ListItem";
import AddGame from "./AddGamePopup/AddGamePopup";

const GamesList = ({ games, loading }) => {
  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="gameList">
      {games &&
        games.map((item) => {
          return (
          <div className="gameListPage">
            <ListItem item={item} />
          </div>
        )})}
    </div>
  );
};

export default GamesList;
