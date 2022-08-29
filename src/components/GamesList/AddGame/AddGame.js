import React from 'react'
import "./AddGame.scss"

const AddGame = () => {
  return (
    <div>
        <h2>Create new game</h2>
        <div>
            <label>Game name:</label>
            <button onClick={handleAddGameEvent}>Add Game</button>
        </div>
    </div>
  )
}

export default AddGame