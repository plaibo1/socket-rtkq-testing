import React from "react";
import { FetchingWithThunk } from "./FetchingWithThunk";
import { FetchWithRTK } from "./FetchWithRTK";

export const FetchedData = () => {
  return (
    <div className="border-2 border-slate-200 rounded-xl p-4">
      <FetchingWithThunk />
      <FetchWithRTK />
    </div>
  );
};
