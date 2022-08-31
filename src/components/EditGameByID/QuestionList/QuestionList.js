import React from 'react'
import "./QuestionList.scss"

const QuestionList = ({id, body}) => {

  console.log(id);
  return (
    <div className="listItem" key={id}>
       {body}
    </div>
  )
}

export default QuestionList