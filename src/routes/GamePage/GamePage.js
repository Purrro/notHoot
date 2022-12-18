import React, { useEffect, useState } from "react";
import { getGamesList, postAddGame } from "../../services/gameServices";
import GamesList from "../../components/GamesList/GamesList";
import AddGamePopup from "../../components/GamesList/AddGamePopup/AddGamePopup";
import { useNavigate } from "react-router-dom";
import { deleteGame } from "../../services/gameServices";
import "./GamePage.scss";

const GamePage = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  const getGames = async () => {
    setGames(await getGamesList());
    setLoading(false);
  };

  const removeGame = async (gameId) => {
    setLoading(true);
    await deleteGame(gameId);
    getGames();
  };

  const onAddGame = async (gameName) => {
    const id = await postAddGame(gameName);
    await getGames();
    navigate(`../game/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    getGames();
  }, []);

  return (
    <div>
      <h2>All Games:</h2>
      <GamesList games={games} loading={loading} removeGame={removeGame} />
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
