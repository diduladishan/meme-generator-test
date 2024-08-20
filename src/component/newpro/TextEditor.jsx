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
    <div className="">
      <div className="mb-4">
        <input
          type="text"
          value={text.text || ""}
          className="h-[40px] w-full"
          onChange={onTextChange}
          placeholder="Enter text"
        />
      </div>

      <div className="flex gap-4 bg-[#29e6e6] mb-4">
        <button onClick={onAddText} disabled={isAddDisabled}>
          Add Text
        </button>
        <button onClick={onDeleteText}>Delete Text</button>
      </div>

      <div className="mb-4">
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
