import React from "react";
import ListItem from "./ListItem/ListItem";
import "./GamesList.scss";


const GamesList = ({ games, loading, removeGame }) => {
  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="gameList">
      {games &&
        games.map((item) => {
          return (
          <div className="gameListPage">
            <ListItem item={item} removeGame={removeGame} />
          </div>
        )})}
    </div>
  );
};

export default GamesList;
