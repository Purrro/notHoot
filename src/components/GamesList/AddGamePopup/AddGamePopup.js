import React, { useState } from "react";
import "./AddGamePopup.scss";

const AddGamePopup = ({ onClose, onAddGame }) => {
  const [gameName, setGameName] = useState("");
  
  const handleAddGameEvent = () => {
    if (gameName.length) {
      setIsInputFieldNull(false);
      onAddGame(gameName);
      onClose();
    }
    else {
      setIsInputFieldNull(true);
    }
  };
  const [isInputFieldNull, setIsInputFieldNull] = useState(false);

  return (
    <div
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
      className="popupOverlay"
    >
      <div className="popupBody">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <h2>Create new game</h2>
        {isInputFieldNull && <div className="inputFieldEmptyPrompt">Game name can not be empty</div>}
        <input
          className="popupInputText"
          type={"text"}
          placeholder="Enter game name"
          value={gameName}
          onChange={(e) => {
            setGameName(e.target.value);
          }}
          onKeyDown= { (e) => {
            if(e.keyCode === 13)
              handleAddGameEvent();
          }}
        />
        <button className="button-addGame" onClick={handleAddGameEvent}>
          Add Game
        </button>
      </div>
    </div>
  );
};

export default AddGamePopup;