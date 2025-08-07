import React from "react";
import "./Sidebar.css";

/**
 * PUBLIC_INTERFACE
 * Sidebar component for displaying recipe categories.
 *
 * @param {{
 *   categories: string[],
 *   selected: string,
 *   onSelect: (category: string) => void
 * }} props
 */
const Sidebar = ({ categories, selected, onSelect }) => (
  <aside className="sidebar">
    <h3>Categories</h3>
    <ul className="category-list">
      <li
        className={selected === "All" ? "active" : ""}
        onClick={() => onSelect("All")}
      >
        All
      </li>
      {categories.map(category => (
        <li
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
