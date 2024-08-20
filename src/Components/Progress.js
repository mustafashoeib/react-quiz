import React from "react";

export default function Progress({
  index,
  numQues,
  points,
  maxPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQues}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Questions <strong>{index + 1}</strong>/ <strong>{numQues}</strong>
      </p>
      <p>
        <strong>{points}</strong>/ <strong>{maxPoints}</strong>
      </p>
    </header>
  );
}
