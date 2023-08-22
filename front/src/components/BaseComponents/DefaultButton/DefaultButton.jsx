import React from "react";

export const DefaultButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-indigo-500 rounded-md p-3 text-white font-semibold mr-4"
    >
      {children}
    </button>
  );
};
