import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-gray-100 rounded-md mx-2 my-1 px-2 py-1 shadow-md font-roboto font-arial text-md leading-[1.5rem] font-semibold"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
