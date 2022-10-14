import React, { useState } from "react";
import "./QuestionList.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddAnswer from "../AddAnswer/AddAnswer";

const QuestionList = ({ id, body, postAnswers, getAllAnswers }) => {
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);

  const handleAnswersSubmit = (
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    value
  ) => {
    // setAnswersArray([answerOne, answerTwo, answerThree, answerFour]);
    setCorrectAnswerIndex(value);
    postAnswers(
      [answerOne, answerTwo, answerThree, answerFour],
      correctAnswerIndex,
      id
    );
    setIsEditButtonPressed(false);
  };

  return (
    <div className="listItem" key={id}>
      <div className="listItemContent">
        {body}

        <div className="listItemIcons">
          <EditOutlined
            onClick={() => {
              setIsEditButtonPressed(true);
            }}
          />
          <DeleteOutlined />
        </div>
      </div>
      <div>
        {isEditButtonPressed && (
          <AddAnswer handleAnswersSubmit={handleAnswersSubmit} getAllAnswers={getAllAnswers} questionId={id} />
        )}
      </div>
    </div>
  );
};

export default QuestionList;
