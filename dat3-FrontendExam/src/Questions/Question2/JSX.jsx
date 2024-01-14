import React, { useState } from "react";

const JSX = () => {
     // Initialize state for button color
  const [buttonColor, setButtonColor] = useState("blue");

  // Function to toggle button color
  const toggleButtonColor = () => {
    setButtonColor((prevColor) => (prevColor === "blue" ? "white" : "blue"));
  };

  return (
    <>
      <div className="container-fluid">
        <h2>Heading 2</h2>
        <p>Paragraph</p>
        {/* Using buttonColor varible in our inline style*/}
         <button style={{ backgroundColor: buttonColor }} onClick={toggleButtonColor}>
          Toggle Color
        </button>
      </div>
    </>
  );
};

export default JSX;
