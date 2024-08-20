import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ currentColor, onColorChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>
      <h3 className="text-white mb-2">Select Text Color:</h3>
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
        style={{
          backgroundColor: currentColor,
          width: "50px",
          height: "50px",
          border: "2px solid white",
          cursor: "pointer",
        }}
      />
      {showColorPicker && (
        <SketchPicker color={currentColor} onChangeComplete={onColorChange} />
      )}
    </div>
  );
};

export default ColorPicker;
