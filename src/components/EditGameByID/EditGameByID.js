import React, { useState } from "react";
import { useParams } from "react-router";
import { getGameById } from "../../services/gameServices";
import QuestionList from "./QuestionList/QuestionList";

const EditGameByID = () => {
  const [loading, setLoading] = useState(true);
  const { id, name } = useParams();
  const [gameQuestions, setGameQuestions] = useState([]);

  const getQuestions = async () => {
    setGameQuestions(await getGameById(id))
    setLoading(false)
  }
  console.log(id + ", " + name)

  return (
    <div>
        <h2>{id}</h2>
        <QuestionList />
    </div>
  );
};

export default EditGameByID;
