import React from "react";

const ButtonComponent = ({ style,children,...rest }) => {
  return (
      <button
        {...rest}
        className={`w-full bg-indigo-500 active:ring-2 active:ring-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 ${style}`}
      >
          {children}
      </button>
  );
};

export default ButtonComponent;
