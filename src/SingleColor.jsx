import React from "react";
import { ToastContainer, toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Copied to clipboard: #${hex}`);
      } catch (err) {
        toast.error("Failed to copy to clipboard");
      }
    } else {
      toast.error("Clipboard API not supported in this browser");
      return;
    }
  };

  return (
    <article
      onClick={() => saveToClipboard()}
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
