import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

function Searchbar({ setResults }) {
  const [input, setInput] = useState("");
  const fetchValue = (value) => {
    fetch("https://api.punkapi.com/v2/beers/")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        // console.log(results);
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchValue(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
