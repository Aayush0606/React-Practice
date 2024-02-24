import React, { useState } from "react";
function ClickMe2Home() {
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(52);
  const handleMouseOver = () => {
    setLeft(Math.floor(Math.random() * 101));
    setTop(Math.floor(Math.random() * 101));
  };
  return (
    <>
      <div className="absolute">
        <button
          className="h-12 w-12 bg-purple-500 fixed top-[50%] left-[48%]"
          onClick={() => alert("You Lost!!!")}
        >
          Yes
        </button>
        <button
          onMouseOver={handleMouseOver}
          className={`h-12 w-12 bg-purple-500 fixed `}
          style={{ top: `${top}%`, left: `${left}%` }}
        >
          No
        </button>
      </div>
    </>
  );
}

export default ClickMe2Home;
