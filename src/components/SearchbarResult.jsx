import React from "react";
import "./SearchbarResult.css";
import ShowResults from "./ShowResults";

function SearchbarResult({ results, onSelectBeer, clearSearch }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <ShowResults
            result={result}
            key={id}
            onSelectBeer={onSelectBeer}
            clearSearch={clearSearch}
          />
        );
      })}
    </div>
  );
}

export default SearchbarResult;
