import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  getQuestions,
  getGameDetails,
  postNewQuestion,
  postAnswers,
  getAnswers,
  removeQuestion,
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

  const addAnswers = async (answers, isCorrect, questionId) => {
    setLoading(true);
    console.log("EditGameByID : " + answers, isCorrect, questionId)
    await postAnswers(answers, isCorrect, questionId);
    getAllGameDetails();
  };

  const getAllAnswers = async (questionId) => {
    const answers = await getAnswers(questionId);
    return answers;
  };

  const removeQuestionFromGame = async (questionId) => {
    setLoading(true);
    await removeQuestion(questionId);
    getAllGameDetails();
  }

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
            <div className="questionsPage" key={item.id}>
              <QuestionList
                {...item}
                postAnswers={addAnswers}
                getAllAnswers={getAllAnswers}
                removeQuestion={removeQuestionFromGame}
              />
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
