import React from "react";

const FontSelector = ({ currentFont, onFontChange }) => {
  return (
    <div>
      <h3 className="text-white mb-2">Select Font Style:</h3>
      <select value={currentFont} onChange={onFontChange}>
        <option value="Roboto">Roboto</option>
        <option value="Lobster">Lobster</option>
        <option value="Oswald">Oswald</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Raleway">Raleway</option>
        <option value="Pacifico">Pacifico</option>
      </select>
    </div>
  );
};

export default FontSelector;
