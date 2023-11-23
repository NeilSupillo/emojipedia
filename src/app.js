import Emoji from "./emojis";
import React from "react";
import Search from "./search";
import Logo from "./white.svg";

function App() {
  const [emojiName, getName] = React.useState("");
  const [giveName, setName] = React.useState("");

  function passName(e) {
    const name = e.target.value;
    if (name === "") {
      setName("");
    }
    getName(name);
  }

  function find() {
    setName(emojiName);
  }

  return (
    <div>
      <div className="h1">
        <h1>Emojipedia</h1>
      </div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
            onChange={passName}
          />
          <button type="submit" onClick={find} class="searchButton">
            <img src={Logo} alt="search" />
          </button>
        </div>
      </div>

      <dl className="dictionary">
        {giveName === "" ? Emoji.map(map) : <Search find={giveName} />}
      </dl>
    </div>
  );

  function map(emo) {
    return (
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emo.emoji}
          </span>
          <span>{emo.name}</span>
        </dt>
        <dd>{emo.meaning}</dd>
      </div>
    );
  }
}

export default App;
