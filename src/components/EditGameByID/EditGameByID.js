import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getQuestions, getGameDetails } from "../../services/gameServices";
import AddQuestion from "./AddQuestion/AddQuestion";
import QuestionList from "./QuestionList/QuestionList";

const EditGameByID = () => {
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
  useEffect(() => {
    getAllGameDetails();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="questionList">
      <h2>{gameDetails.name}</h2>
      {gameQuestions &&
        gameQuestions.map((item) => {
          return (
            <div className="questionsPage">
              <QuestionList {...item} />
            </div>
          );
        })}
    </div>
  );
};

export default EditGameByID;
