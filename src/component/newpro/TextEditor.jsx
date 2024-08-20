import React from "react";

const TextEditor = ({
  text,
  onTextChange,
  onAddText,
  onDeleteText,
  onToggleBold,
  onToggleUnderline,
  onToggleItalic,
  isAddDisabled,
}) => {
  return (
    <div>
      <input
        type="text"
        value={text.text || ""}
        onChange={onTextChange}
        placeholder="Enter text"
      />

      <div className="flex flex-col">
        <button onClick={onAddText} disabled={isAddDisabled}>
          <p>Add Another Text</p>
        </button>
        <button onClick={onDeleteText}>Delete Selected Text</button>
      </div>

      <div>
        <button
          onClick={onToggleBold}
          style={{ fontWeight: text.fontWeight === "bold" ? "bold" : "normal" }}
        >
          Bold
        </button>
        <button
          onClick={onToggleItalic}
          style={{
            fontStyle: text.fontStyle === "italic" ? "italic" : "normal",
          }}
        >
          Italic
        </button>
        <button
          onClick={onToggleUnderline}
          style={{
            textDecoration:
              text.textDecoration === "underline" ? "underline" : "none",
          }}
        >
          Underline
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
