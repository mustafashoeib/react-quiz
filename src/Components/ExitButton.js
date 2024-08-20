import React from "react";

export default function ExitButton({ dispatch }) {
  return (
    <button className="btn btn-exit" onClick={() => dispatch({ type: "Exit" })}>
      Exit
    </button>
  );
}
