/**
 * PUBLIC_INTERFACE
 * API utility functions for getting recipes and categories.
 * Uses REACT_APP_API_URL from environment variables.
 * Stub data is used if no backend is defined.
 */

const API_URL = process.env.REACT_APP_API_URL;

// Helper: Random images for demonstration
const IMG = [
  "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
];
const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert", "Drinks"];
const STUB_RECIPES = [
  {
    id: "1",
    title: "Classic Pancakes",
    category: "Breakfast",
    image: IMG[0],
    gallery: [IMG[0], IMG[2], IMG[3]],
    ingredients: ["2 cups flour", "2 eggs", "1 cup milk", "1/2 tsp salt", "1 tbsp sugar"],
    instructions: [
      "Mix dry ingredients.",
      "Whisk eggs and milk, add to dry mix.",
      "Cook on skillet until golden brown on both sides."
    ]
  },
  {
    id: "2",
    title: "Avocado Toast",
    category: "Breakfast",
    image: IMG[1],
    gallery: [IMG[1]],
    ingredients: ["2 slices bread", "1 ripe avocado", "Salt & pepper", "Lemon juice"],
    instructions: [
      "Toast the bread.",
      "Mash avocado, spread on toast.",
      "Season with salt, pepper, and lemon juice."
    ]
  },
  {
    id: "3",
    title: "Chicken Caesar Salad",
    category: "Lunch",
    image: IMG[2],
    ingredients: ["Chicken breast", "Romaine lettuce", "Parmesan", "Caesar dressing", "Croutons"],
    instructions: [
      "Grill chicken and let it rest.",
      "Toss lettuce, dressing, and croutons together.",
      "Top with sliced chicken and shaved parmesan."
    ]
  }
];

/** Get recipes, optionally filtered by category or search */
export async function getRecipes({ category = "All", search = "" } = {}) {
  // If API_URL is set, make actual backend call
  if (API_URL) {
    let url = API_URL + "/recipes";
    const params = [];
    if (category && category !== "All") params.push(`category=${encodeURIComponent(category)}`);
    if (search) params.push(`search=${encodeURIComponent(search)}`);
    if (params.length) url += "?" + params.join("&");
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch recipes");
    return await res.json();
  } else {
    // Use stub/mock data
    let items = STUB_RECIPES;
    if (category && category !== "All") items = items.filter(r => r.category === category);
    if (search) items = items.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));
    // Simulate network delay
    return new Promise(resolve => setTimeout(() => resolve(items), 300));
  }
}

/** Get one recipe by id. */
export async function getRecipeById(id) {
  if (API_URL) {
    const res = await fetch(`${API_URL}/recipes/${id}`);
    if (!res.ok) throw new Error("Recipe not found");
    return await res.json();
  } else {
    let found = STUB_RECIPES.find(r => r.id === id);
    return new Promise(resolve => setTimeout(() => resolve(found || null), 150));
  }
}

/** Get categories */
export async function getCategories() {
  if (API_URL) {
    const res = await fetch(`${API_URL}/categories`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return await res.json();
  } else {
    return new Promise(resolve => setTimeout(() => resolve(CATEGORIES), 120));
  }
}
