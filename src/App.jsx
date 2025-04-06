import React, { useState, useEffect } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      toast.error("Please enter a valid color");
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colorList={colorList} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
