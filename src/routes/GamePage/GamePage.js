import React, { useEffect, useState } from "react";
import { getGamesList, postAddGame } from "../../services/gameServices";
import GamesList from "../../components/GamesList/GamesList";
import "./GamePage.scss";
import AddGamePopup from "../../components/GamesList/AddGamePopup/AddGamePopup";

const GamePage = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getGames = async () => {
    setGames(await getGamesList());
    setLoading(false);
  };

  const onAddGame = async (gameName) => {
    const id = await postAddGame(gameName);
    getGames();
  };

  useEffect(() => {
    setLoading(true);
    getGames();
  }, []);

  return (
    <div>
      <h2>All Games:</h2>
      <GamesList games={games} loading={loading} />
      <button onClick={() => setIsPopupOpen(true)}>Add new game</button>
      {isPopupOpen && (
        <AddGamePopup
          onClose={() => setIsPopupOpen(false)}
          onAddGame={onAddGame}
        />
      )}
    </div>
  );
};

export default GamePage;
