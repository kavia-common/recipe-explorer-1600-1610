import React from "react";
import "./RecipeList.css";

/**
 * PUBLIC_INTERFACE
 * Shows a list of recipes with basic info and preview image.
 *
 * @param {{
 *   recipes: Array,
 *   onSelect: (id: string) => void
 * }} props
 */
const RecipeList = ({ recipes, onSelect }) => (
  <section className="main-content">
    {recipes.length === 0 ? (
      <div className="info-message">No recipes found.</div>
    ) : (
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card" onClick={() => onSelect(recipe.id)} tabIndex={0}>
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <div className="recipe-info">
              <h4>{recipe.title}</h4>
              <p className="category">{recipe.category}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default RecipeList;
