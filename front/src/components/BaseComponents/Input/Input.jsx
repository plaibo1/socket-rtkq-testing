import React from "react";

export const Input = (props) => {
  return (
    <input
      {...props}
      className="mb-4 p-3 rounded-md border border-slate-500 focus:bg-slate-100"
    />
  );
};
