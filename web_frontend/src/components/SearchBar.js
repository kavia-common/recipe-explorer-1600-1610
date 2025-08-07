import React, { useState } from "react";
import "./SearchBar.css";

/**
 * PUBLIC_INTERFACE
 * SearchBar for entering search queries.
 * 
 * @param {{
 *   value: string,
 *   onChange: (text: string) => void,
 *   placeholder?: string,
 * }} props
 */
const SearchBar = ({ value, onChange, placeholder = "Search recipes..." }) => {
  const [input, setInput] = useState(value);

  // Sync with props
  React.useEffect(() => setInput(value), [value]);

  /** Handle form submit */
  const handleSubmit = e => {
    e.preventDefault();
    onChange(input);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Search for recipes"
      />
      <button type="submit" className="search-btn">🔍</button>
    </form>
  );
};

export default SearchBar;
