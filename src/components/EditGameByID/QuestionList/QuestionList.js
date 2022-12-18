import React, { useEffect, useState } from "react";
import "./QuestionList.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddAnswer from "../AddAnswer/AddAnswer";

const QuestionList = ({ id, body, postAnswers, getAllAnswers, removeQuestion }) => {
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);

  

  const handleAnswersSubmit = (
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    isCorrect
  ) => {
    postAnswers([answerOne, answerTwo, answerThree, answerFour], isCorrect, id);
    setIsEditButtonPressed(false);
  };

  useEffect (() => {
    console.log("UseEffect : " + isEditButtonPressed)
  }, [isEditButtonPressed])

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
          <DeleteOutlined
          onClick={() => {
            removeQuestion(id)
          }} />
        </div>
      </div>
      <div>
        <AddAnswer
          handleAnswersSubmit={handleAnswersSubmit}
          getAllAnswers={getAllAnswers}
          questionId={id}
          isEditButtonPressed={isEditButtonPressed}
        />
      </div>
     
      
    </div>
  );
};

export default QuestionList;
