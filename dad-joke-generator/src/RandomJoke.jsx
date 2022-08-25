import './App.css';
import { useState, useEffect } from "react";
let url = "https://icanhazdadjoke.com/";

const RandomJoke = () => {
  const [joke, setJoke] = useState("");
  let fetchJoke = () => {
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };
  useEffect(() => {
    if (!joke) {
      fetchJoke();
    }
  }, [joke]);

  return (
    <div>
      <div id="header-container">
        <h1 id="header">Dad Jokes</h1>
      </div>
    <div id="parent-div">

      <div id="joke-container">
        <div id="joke-text">{joke}</div>
      </div>

      <br></br>
      <div id="button-container">
        <button id="button" onClick={fetchJoke}>
          New Joke
        </button>
      </div>
      </div>
      </div>
  );
};

export default RandomJoke;