import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  getQuestions,
  getGameDetails,
  postNewQuestion,
} from "../../services/gameServices";
import AddQuestion from "./AddQuestion/AddQuestion";
import QuestionList from "./QuestionList/QuestionList";

const EditGameByID = () => {
  const [loading, setLoading] = useState(true);

  const [gameDetails, setGameDetails] = useState();
  const [gameQuestions, setGameQuestions] = useState([]);

  const { id } = useParams();

  const [isAddQuestionPressed, setIsAddQuestionPressed] = useState(false);

  const getAllGameDetails = async () => {
    const details = await getGameDetails(id);
    const questions = await getQuestions(id);
    setGameDetails(details[0]);
    setGameQuestions(questions);
    setLoading(false);
  };

  const addNewQuestion = async (questionBody) => {
    setLoading(true);
    await postNewQuestion(questionBody, id);
    getAllGameDetails();
  };

  useEffect(() => {
    console.log("useEffect entered");
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

      {isAddQuestionPressed ? (
        <div>
          <AddQuestion
            postNewQuestion={addNewQuestion}
            isAddQuestionPressed={() => setIsAddQuestionPressed(false)}
          />
          
        </div>
      ) : (
        <button onClick={() => setIsAddQuestionPressed(true)}>
          Add a Question
        </button>
      )}
    </div>
  );
};

export default EditGameByID;
