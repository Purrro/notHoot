import React from "react";
import { Radio } from "antd";
import { useState } from "react";
import './AddAnswer.scss'

const AddAnswer = (questionId) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group className="RadioGroup" onChange={onChange} value={value}>
        <Radio value={1}>
          <input type={"text"} className="textInput" placeholder="Answer 1" />
        </Radio>
        <Radio value={2}>
          <input type={"text"} className="textInput" placeholder="Answer 2" />
        </Radio>
        <Radio value={3}>
          <input type={"text"} className="textInput" placeholder="Answer 3" />
        </Radio>
        <Radio value={4}>
          <input type={"text"} className="textInput" placeholder="Answer 4" />
        </Radio>
      </Radio.Group>
      <button>Add Answers</button>
    </div>
  );
};

export default AddAnswer;
