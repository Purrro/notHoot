import React, { useState } from "react";
import "./QuestionList.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddAnswer from "../AddAnswer/AddAnswer";

const QuestionList = ({ id, body }) => {
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);

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
      <div>{isEditButtonPressed && <AddAnswer />}</div>
    </div>
  );
};

export default QuestionList;
