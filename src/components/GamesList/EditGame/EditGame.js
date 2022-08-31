import React, { useState } from 'react'
import { useParams } from "react-router";
import AddQuestion from '../../EditGameByID/AddQuestion/AddQuestion'

const EditGame = (gameId, gameName) => {
  // Game Id
  const [thisGameId, setThisGameId] = useState(0);
  // Question Id and Body
  const [thisQuestionId, setThisQuestionId] = useState(0);
  const [thisQuestionBody, setThisQuestionBody] = useState("");
  // Answer 1 Id and Body
  const [thisFirstAnswerId, setThisFirstAnswerId] = useState(0);
  const [thisFirstAnswerBody, setThisFirstQuestionBody] = useState("");
  // Answer 2 Id and Body
  const [thisSecondAnswerId, setThisSecondAnswerId] = useState(0);
  const [thisSecondAnswerBody, setThisSecondAnswerBody] = useState("");
  // Answer 3 Id and Body
  const [thisThirdAnswerId, setThisThirdAnswerId] = useState(0);
  const [thisThirdAnswerBody, setThisThirdAnswerBody] = useState("");
  // Answer 4 Id and Body
  const [thisFourthAnswerId, setThisFourthAnswerId] = useState(0);
  const [thisFourthAnswerBody, setThisFourthAnswerBody] =useState("");

  const { id, name } = useParams();

  return (
    <div>
      <h2>{gameId}</h2>
      {/* <AddQuestion gameId={gameId} /> */}
    </div>
  )
}

export default EditGame