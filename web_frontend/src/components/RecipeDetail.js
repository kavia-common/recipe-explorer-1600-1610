import React from "react";
import ImageGallery from "./ImageGallery";
import "./RecipeDetail.css";

/**
 * PUBLIC_INTERFACE
 * Shows the details for a single recipe, with images, ingredients and instructions.
 *
 * @param {{
 *   recipe: object|null,
 *   onBack: () => void
 * }} props
 */
const RecipeDetail = ({ recipe, onBack }) => {
  if (!recipe) return null;
  return (
    <section className="recipe-detail-container">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>{recipe.title}</h2>
      <p className="detail-category">{recipe.category}</p>
      <ImageGallery images={recipe.gallery || [recipe.image]} />
      <h3>Ingredients</h3>
      <ul>
        {(recipe.ingredients || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {(recipe.instructions || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </section>
  );
};
export default RecipeDetail;
