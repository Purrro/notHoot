import React from 'react'
import { Link } from "react-router-dom";
import "./QuestionList.scss"

const QuestionList = (item) => {
  return (
    <div className="listItem" key={item.id}>
      <Link to={`/questions/${item.id}`}> {item.name} </Link>
    </div>
  )
}

export default QuestionList