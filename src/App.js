import "./App.css";
import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import Card from "./components/card";
import SearchbarResult from "./components/SearchbarResult";
function App() {
  const [results, setResults] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);

  const handleSelectBeer = (beer) => {
    setSelectedBeer(beer);
  };
  const clearSearch = () => {
    setResults([]); // Clear search results
  };

  return (
    <div className="App">
      <Searchbar setResults={setResults} clearSearch={clearSearch} />
      <SearchbarResult
        results={results}
        onSelectBeer={handleSelectBeer}
        clearSearch={clearSearch}
      />
      <Card selectedBeer={selectedBeer} />
    </div>
  );
}

export default App;
