import React from "react";

export default function NextButton({ dispatch, answer, index }) {
  if (answer === null) return null;
  if (index < 14) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === 14) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
