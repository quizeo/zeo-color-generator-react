import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  const isLightColor = (hexColor) => {
    if (!hexColor) return false;

    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5;
  };

  return (
    <section className="container">
      <h4>Zeo Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button
          type="submit"
          className="btn"
          style={{
            background: color,
            color: isLightColor(color) ? "#222" : "#fff",
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
