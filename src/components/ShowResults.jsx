import React from "react";
import "./ShowResult.css";

function ShowResults({ result, onSelectBeer, clearSearch }) {
  const handleClick = () => {
    onSelectBeer(result);
    clearSearch(); // Call clearSearch after a beer is selected
  };
  return (
    <div className="search-result" onClick={handleClick}>
      {result.name}
    </div>
  );
}

export default ShowResults;
