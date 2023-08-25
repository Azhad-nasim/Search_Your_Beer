import React from "react";
import { useState } from "react";
import "./card.css";

function Card({ selectedBeer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`container_card ${isFlipped ? "flipped" : ""}`}>
      <div className="content">
        {selectedBeer ? (
          isFlipped ? (
            // Render the Ingredients and other details here
            <div className="profile-card-flip">
              <h3>Ingredients</h3>
              <div className="ingredient-list">
                {/* Malt */}
                <h4>Malt:</h4>
                <ul>
                  {selectedBeer.ingredients.malt.map((malt, index) => (
                    <li key={index}>
                      {malt.name} - {malt.amount.value} {malt.amount.unit}
                    </li>
                  ))}
                </ul>

                {/* Hops */}
                <h4>Hops:</h4>
                <ul>
                  {selectedBeer.ingredients.hops.map((hop, index) => (
                    <li key={index}>
                      {hop.name} - {hop.amount.value} {hop.amount.unit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Method */}
              <h3 className="section-header">Method</h3>
              <div className="method-details">
                <p className="solid-line">
                  Temperature: {selectedBeer.method.mash_temp[0].temp.value}°C
                </p>
                <p className="solid-line">
                  Fermentation: {selectedBeer.method.fermentation.temp.value}°C
                </p>
              </div>
              <h3 className="section-header">Food Pairing</h3>
              <div className="food-pairing">
                <ul>
                  {selectedBeer.food_pairing.map((pairing, index) => (
                    <li key={index} className="solid-line">
                      {pairing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            // Render the Beer information here
            <div className="profile-card">
              <header>
                <a>
                  <img
                    src={selectedBeer.image_url}
                    alt="Profile"
                    className="hovercard"
                  />
                </a>
                <h1>{selectedBeer.name}</h1>
                <h2>{selectedBeer.tagline}</h2>
              </header>
              <div className="card-description">
                <p>{selectedBeer.description}</p>
              </div>
            </div>
          )
        ) : (
          // Default state when no beer is selected
          <div className="display">
            Please select a beer from the search results.
          </div>
        )}

        {selectedBeer && (
          <div className="btn">
            <button className="open-button" onClick={handleToggleFlip}>
              Show the Ingredient
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
