import React, { useEffect } from "react";

function TextBox(props) {
  const { placeholder, handleSubmit, handleChange } = props;

  return (
    <>
      <div className="relative w-72">
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm 
              text-gray-900 bg-transparent rounded-lg border-2 
              border-gray-300 appearance-none  
              focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500
            duration-300 transform -translate-y-4 scale-75 
            top-2 z-10 origin-[0] bg-white
             px-2 peer-focus:px-2 peer-focus:text-blue-600  
             peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
               rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {placeholder}
        </label>
      </div>
    </>
  );
}

export default TextBox;
