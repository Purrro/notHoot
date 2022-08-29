import React from "react";
import ListItem from "./ListItem/ListItem";
import AddGame from "./AddGame/AddGame";

const GamesList = ({ games, loading }) => {
  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="gameList">
      {games &&
        games.map((item) => {
          return ({
            <ListItem item={item} />
            <AddGame />
        });
        })}
    </div>
  );
};

export default GamesList;
