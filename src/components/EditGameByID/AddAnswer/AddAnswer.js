import React, { useEffect } from "react";
import { Radio } from "antd";
import { useState } from "react";
import "./AddAnswer.scss";

const AddAnswer = ({ handleAnswersSubmit, getAllAnswers, questionId }) => {
  const [value, setValue] = useState(0);

  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");

  const [arrayOfAnswers, setArrayOfAnswers] = useState([]);

  const [isHaveAnswers, setIsHaveAnswers] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddAnswersButton = () => {
    console.log(value);
    handleAnswersSubmit(answerOne, answerTwo, answerThree, answerFour, value);
  };

  const checkIfAnswers = async () => {
    const answers = await getAllAnswers(questionId);
    console.log(answers);
    if (answers.length) {
      setArrayOfAnswers(answers);
      
      const correctAnswerIndex = answers.findIndex(
        (answer) => !!answer.iscorrect
      );
      setValue(correctAnswerIndex);

      setIsHaveAnswers(true);
    } else {
      setIsHaveAnswers(false);
    }
  };

  useEffect(() => {
    checkIfAnswers();
  }, []);

  return isHaveAnswers ? (
    <div className="Answers">
      {arrayOfAnswers.map(({ id, body }, index) => {
        return (
          <div
            className={
              index === value ? "correctAnswerClass" : "wrongAnswerClass"
            }
            key={id}
          >
            <div className="AnswerText">{body}</div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <Radio.Group className="RadioGroup" onChange={onChange} value={value}>
        <Radio value={0}>
          <input
            type={"text"}
            className="textInput"
            placeholder="Answer 1"
            value={answerOne}
            onChange={(e) => {
              setAnswerOne(e.target.value);
            }}
          />
        </Radio>
        <Radio value={1}>
          <input
            type={"text"}
            className="textInput"
            placeholder="Answer 2"
            value={answerTwo}
            onChange={(e) => {
              setAnswerTwo(e.target.value);
            }}
          />
        </Radio>
        <Radio value={2}>
          <input
            type={"text"}
            className="textInput"
            placeholder="Answer 3"
            value={answerThree}
            onChange={(e) => {
              setAnswerThree(e.target.value);
            }}
          />
        </Radio>
        <Radio value={3}>
          <input
            type={"text"}
            className="textInput"
            placeholder="Answer 4"
            value={answerFour}
            onChange={(e) => {
              setAnswerFour(e.target.value);
            }}
          />
        </Radio>
      </Radio.Group>
      <button onClick={handleAddAnswersButton}>Add Answers</button>
    </div>
  );
};

export default AddAnswer;
