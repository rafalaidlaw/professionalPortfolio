import React from "react";
import { useTheme } from "../context/ThemeContext";

export const RetroFont = ({ txt }) => {
  const { colors } = useTheme();
  
  return (
    <div>
      <div className="relative  flex justify-center">
        <h1 className={`text-6xl font-Monoton tracking-wider ${colors.text[600]} drop-shadow absolute top-0.5 scale-125`}>
          {txt}
        </h1>
        <h1 className={`text-6xl font-Monoton tracking-wider ${colors.text[500]} drop-shadow absolute top-0.5 scale-105`}>
          {txt}
        </h1>
        <div className="scale-75">
          <h1 className={`text-6xl font-Monoton tracking-wider ${colors.text[400]} drop-shadow absolute top-0 scale-125`}>
            {txt}
          </h1>
          <h1 className={`text-6xl font-Monoton tracking-wider ${colors.text[300]} drop-shadow pb-2 scale-110`}>
            {txt}
          </h1>
        </div>
        <h1 className={`text-6xl font-Monoton tracking-wider ${colors.text[200]} drop-shadow absolute top-0 scale-75`}>
          {txt}
        </h1>
      </div>
    </div>
  );
};

export default RetroFont;
