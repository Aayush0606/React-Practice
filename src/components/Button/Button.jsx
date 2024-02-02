import React from "react";

export default function Button(props) {
  const { placeholder, handleSubmit, type } = props;
  return (
    <>
      <button
        onClick={handleSubmit}
        className={`rounded-full ml-2
        ${type === "add" ? "w-16 hover:bg-green-600 bg-green-500" : ""}
        ${type === "del" ? "w-16 hover:bg-red-600 bg-red-500" : ""}`}
      >
        {placeholder}
      </button>
    </>
  );
}
