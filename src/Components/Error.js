import React from "react";

function Error() {
  return (
    <p className="error">
      <span role="img" aria-label="error emoji">
        😢
      </span>{" "}
      There was an error fecthing questions.
    </p>
  );
}

export default Error;
