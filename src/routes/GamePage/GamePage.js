import React, { useEffect, useState } from "react";
import { getGamesList, postAddGame } from "../../services/gameServices";
import GamesList from "../../components/GamesList/GamesList"

const GamePage = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  
  const getGames = async () => {
    setGames(await getGamesList());
    setLoading(false)
  };

  const addGame = async (gameName) => {
    const res = await postAddGame(gameName);
  };

  useEffect(() => {
    setLoading(true);
    getGames();
    ;
  }, []);

  return (
    <div>
        <div>
          <h2>All Games:</h2>
          <GamesList games={games} loading={loading}/>
        </div>
      
    </div>
  );
};

export default GamePage;