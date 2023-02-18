import axios from "axios";

const serverAdress = "http://localhost:3001";

// Get all games
export const getGamesList = async () => {
  try {
    const res = await axios.get(`${serverAdress}/games`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
// Get game by ID
export const getGameDetails = async (gameId) => {
  try {
    const res = await axios.get(`${serverAdress}/games/${gameId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
// Create new game
export const postAddGame = async (name) => {
  try {
    const res = await axios.post(`${serverAdress}/games/create`, { name });
    return res.data.insertId;
  } catch (e) {
    console.log(e);
  }
};
// Remove Game
export const deleteGame = async (gameId) => {
  try {
    const res = await axios.post(`${serverAdress}/games/delete`, {
      gameId,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// Get questions by game ID
export const getQuestions = async (gameID) => {
  try {
    const res = await axios.get(`${serverAdress}/questions/${gameID}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
// Create a new question with { body, game_id }
export const postNewQuestion = async (body, game_id) => {
  try {
    const res = await axios.post(`${serverAdress}/questions/create`, {
      body,
      game_id,
    });
    return res.data.insertId;
  } catch (e) {
    console.log(e);
  }
};
// Remove Question
export const removeQuestion = async (questionId) => {
  try {
    const res = await axios.post(`${serverAdress}/questions/delete`, {
      questionId,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// Get answers by question ID
export const getAnswers = async (questionId) => {
  try {
    const res = await axios.get(`${serverAdress}/answers/${questionId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
// Create new answer with { body, iscorrect, question_id }
export const postAnswers = async (body, isCorrect, questionId) => {
  console.log("GameServices: " + body, isCorrect, questionId);

  try {
    const res = await axios.post(`${serverAdress}/answers/create`, {
      body,
      isCorrect,
      questionId,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};




