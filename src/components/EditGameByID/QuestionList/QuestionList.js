import React from 'react'
import "./QuestionList.scss"

const QuestionList = ({id, body}) => {
  
  return (
    <div className="listItem" key={id}>
       {body}
    </div>
  )
}

export default QuestionList