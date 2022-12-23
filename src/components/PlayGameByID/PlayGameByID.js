import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  getQuestions,
  getGameDetails,
  getAnswers,
} from "../../services/gameServices";


const PlayGameByID = () => {
  const [loading, setLoading] = useState(true);
  const [gameDetails, setGameDetails] = useState();
  const [gameQuestions, setGameQuestions] = useState([]);
  const { id } = useParams();

  const getAllGameDetails = async () => {
    const details = await getGameDetails(id);
    const questions = await getQuestions(id);
    setGameDetails(details[0]);
    setGameQuestions(questions);
    setLoading(false);
  };

  const getAllAnswers = async (questionId) => {
    const answers = await getAnswers(questionId);
    return answers;
  };

  useEffect(() => {
    getAllGameDetails();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <h2>{gameDetails.name}</h2>
      
    </div>
  );
};

export default PlayGameByID;
