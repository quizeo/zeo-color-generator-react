import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colorList }) => {
  return (
    <section className="colors">
      {colorList.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
