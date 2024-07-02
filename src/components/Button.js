import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-gray-200 rounded-md mx-2 my-3 px-2 py-1 shadow-md"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
