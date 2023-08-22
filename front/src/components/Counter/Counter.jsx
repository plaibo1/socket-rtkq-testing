import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [countValue, setCountValue] = useState(0);

  useEffect(() => {
    const arr = Array.from(Array(1e6).keys());
    const iterationsPerLoop = arr.length / 100;

    let i = 0;
    let start = Date.now();

    function count() {
      // перенесём планирование очередного вызова в начало
      if (i < arr.length - iterationsPerLoop) {
        setTimeout(count); // запланировать новый вызов
      }

      do {
        arr[i] = Math.pow(arr[i], 5);
        i++;
      } while (i % iterationsPerLoop !== 0);

      if (i === arr.length) {
        console.log("Done in " + (Date.now() - start) + "ms");
        // console.log(sum);
        console.log(arr);
      }
    }

    countValue !== 0 && count();
  }, [countValue]);

  const setCountValueHandle = () => {
    setCountValue((v) => v + 1);
  };

  return (
    <div className="p-4 bg-slate-100 rounded-lg w-60 fixed bottom-4 left-4 opacity-50 transition-all -translate-x-[90%] hover:opacity-100 hover:translate-x-0">
      <div className="text-sm">
        <i>million iterations per click</i>
      </div>
      <span className="text-2xl block mb-4">
        Counter <strong>{countValue}</strong>
      </span>

      <button
        onClick={setCountValueHandle}
        className="p-2 bg-indigo-500 rounded-lg w-full text-white"
      >
        +
      </button>
    </div>
  );
};
