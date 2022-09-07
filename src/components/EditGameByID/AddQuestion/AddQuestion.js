import React, { useState } from 'react'
import { useParams } from "react-router";
import './AddQuestion.scss';

const AddQuestion = ({ postNewQuestion, isAddQuestionPressed }) => {

  const [questionBody, setQuestionBody] = useState("");
  const [isInputFieldNull, setIsInputFieldNull] = useState(false);
  
  const handleAddQuestionEvent= () => {
    if (questionBody.length) {
      setIsInputFieldNull(false);
      postNewQuestion(questionBody);
      isAddQuestionPressed();
    }
    else {
      setIsInputFieldNull(true);
    }
  }

  return (
    <div className='AddQuestion'>
      
      <div className="addQuestionBody">
        {isInputFieldNull && <div className="inputFieldEmptyPrompt">Question can not be empty</div>}
        <input
          className="questionInputText"
          type={"text"}
          placeholder="Enter your Question"
          value={questionBody}
          onChange={(e) => {
            setQuestionBody(e.target.value);
          }}
          onKeyDown= { (e) => {
            if(e.keyCode === 13)
              handleAddQuestionEvent();
          }}
        />
        <button className="button-addQuestion" onClick={handleAddQuestionEvent}>
          Add a Question
        </button>
      </div>
    
    </div>
  )
}

export default AddQuestion