import React from "react";
import "./NameGenerator.css";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function NameGenerator(props) {
  const { names } = props;
  if (!names || names.length < 2) {
    return null;
  }
  const shuffledNames = shuffle(names);
  const result = shuffledNames.map(
    (x, i) =>
      ` ${x} ska ge julklapp till ${
        shuffledNames[i + 1] ? shuffledNames[i + 1] : shuffledNames[0]
      } `
  );
  return (
    <div className="Generated">
      {result.map((x, i) => (
        <h3 key={i}>
          <span role="img" aria-label="Santa">
            🌲
          </span>
          {x}
          <span role="img" aria-label="Santa">
            🌲
          </span>
          <br />
        </h3>
      ))}
    </div>
  );
}
