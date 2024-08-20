import React, { useEffect } from "react";

export default function Tick({ dispatch, remainingSeconds }) {
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      /// clean up function
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <button className="btn btn-ui">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </button>
  );
}
