import axios from "axios";

const serverAdress = "http://localhost:3001";

export const getGamesList = async () => {
  try {
    const res = await axios.get(`${serverAdress}/showallgames`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getGameById = async (id) => {
  try {
    const res = await axios.get(`${serverAdress}/getgamebyid`, { id });
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export const postAddGame = async (name) => {
  try {
    const res = await axios.post(`${serverAdress}/creategame`, { name });
    return res.data.insertId;
  } catch (e) {
    console.log(e);
  }
};

// TODO = Create a new question with { body, game_id }

export const addNewQuestion = async (body, game_id) => {
  try {
    const res = await axios.post(`${serverAdress}/createquestion`, { body, game_id });
    return res.data.insertId;
  } catch (e) {
    console.log(e);
  }
}

//        Create new answer with { body, iscorrect, question_id }
