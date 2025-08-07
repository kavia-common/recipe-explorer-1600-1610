import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import { getRecipes, getCategories, getRecipeById } from "./api";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Main App entrypoint. Handles page state, theme, API fetching, and layout.
 */
function App() {
  // Global layout and theme
  const [theme, setTheme] = useState("light");
  // Data state
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Load categories once
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Load recipes when category or search changes
  useEffect(() => {
    setLoading(true);
    getRecipes({ category: selectedCategory, search }).then(data => {
      setRecipes(data || []);
      setLoading(false);
    });
    setSelectedRecipeId(null);
    setRecipeDetail(null);
  }, [selectedCategory, search]);

  // Load details when a recipe is selected
  useEffect(() => {
    if (selectedRecipeId) {
      setLoading(true);
      getRecipeById(selectedRecipeId)
        .then(data => {
          setRecipeDetail(data);
          setLoading(false);
        });
    }
  }, [selectedRecipeId]);

  // Handlers
  const handleCategory = cat => setSelectedCategory(cat);
  const handleSearch = val => setSearch(val);
  const handleSelectRecipe = id => setSelectedRecipeId(id);
  const handleBack = () => {
    setSelectedRecipeId(null);
    setRecipeDetail(null);
  };

  // Layout
  return (
    <div className="App">
      <Header />
      <button
        className="theme-toggle"
        onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <div className="layout">
        <Sidebar
          categories={categories}
          selected={selectedCategory}
          onSelect={handleCategory}
        />
        <main className="main-area">
          <SearchBar value={search} onChange={handleSearch} />
          {loading && <div className="info-message">Loading...</div>}
          {!loading && !selectedRecipeId && (
            <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
          )}
          {!loading && selectedRecipeId && recipeDetail && (
            <RecipeDetail recipe={recipeDetail} onBack={handleBack} />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
