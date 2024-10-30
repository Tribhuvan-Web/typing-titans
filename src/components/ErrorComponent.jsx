import { Input } from "postcss";
import React from "react";

const ErrorComponent = ({
  inputText = "",
  incorrectIndex,
  incorrectValue = "",
}) => {
  return (
    <div className="text-3xl flex flex-col items-center mt-4">
      {incorrectIndex === null ? (
        <div className="flex justify-center items-center bg-slate-100 p-4 rounded-lg shadow-md">
          {inputText.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                index === incorrectIndex
                  ? "bg-red-200 text-red-500"
                  : "bg-green-200 text-green-800"
              } p-1 rounded mx-1`}
            >
              {char}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center  bg-slate-500 p-4 rounded-lg shadow-md">
          <p className="text-blue-900 mb-2 text-lg font-semibold">
            There is an error:
          </p>
          <p>
            <span className="font-light text-white">Entered value :</span>
            <span className="bg-red-200 text-red-500 p-1 rounded-xl mx-1">
              {inputText[incorrectIndex]}
            </span>{" "}
            &nbsp;
            <span className="font-light text-white">Expected:</span>
            <span className="bg-red-600 text-white p-2 rounded-lg mx-2">
              {incorrectValue}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;
