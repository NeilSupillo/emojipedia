import Emoji from "./emojis";
import React from "react";

function App(props) {
  let arr = [];
  let emojis = Emoji.map(map2);
  if (arr.length > 0) {
    return emojis;
  } else {
    return;
  }

  function map2(emo) {
    for (let i = 0; i < emo.tag.length; i++) {
      if (props.find === emo.tag[i]) {
        arr.push(1);
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
  }
}

export default App;
