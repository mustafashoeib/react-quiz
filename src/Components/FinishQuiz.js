import React from "react";

export default function FinishQuiz({ maxPoints, points, highScore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😐";
  if (percentage > 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "😲";
  return (
    <>
      <p className="result">
        {emoji} You Scored {points} out of {maxPoints} ({percentage}%)
      </p>
      <p className="highScore">Your high score is {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
