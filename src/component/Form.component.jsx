import React from "react";

const FormComponent = ({ type, name, label, placeholder = "" ,...rest}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-indigo-500 font-bold mb-1">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        id={name}
        name={name}
        className="w-full px-4 py-2 border rounded-lg  border-indigo-500 placeholder:text-indigo-500 focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormComponent;
