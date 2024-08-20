import React from "react";

export default function StartQues({ numQues, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To the react quiz!</h2>
      <h3>{numQues} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
