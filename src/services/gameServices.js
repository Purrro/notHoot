import axios from "axios";

const serverAdress = 'http://localhost:3001'

export const getGamesList = async () => {
  try {
      const res = await axios.get(`${serverAdress}/showallgames`)
      return res.data
    } catch (e) {
        console.log(e)
    }
};

export const postAddGame = async (name) => {
    try {
        const res = await axios.post(`${serverAdress}/creategame`, {name})
        return res.data
    } catch(e) {
        console.log(e)        
    }
}

