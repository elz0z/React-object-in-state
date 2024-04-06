import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label for="score" >
        Score: <b>{player.score}</b>
        <button id="score" onClick={handlePlusClick}>+1</button>
      </label>


      <label for="first-name">
        First name:
        <input id="first-name"
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>


      <label for="last-name">
        Last name:
      <input id="last-name"
        value={player.lastName}
        onChange={handleLastNameChange}
      />
            </label>

    </>
  );
}
