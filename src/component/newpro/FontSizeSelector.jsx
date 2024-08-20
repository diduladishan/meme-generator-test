import React from "react";

const FontSizeSelector = ({ currentSize, onSizeChange }) => {
  return (
    <div>
      <h3 className="text-white mb-2">Select Font Size:</h3>
      <select value={currentSize} onChange={onSizeChange}>
        {[8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72].map(
          (size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default FontSizeSelector;
