import React from "react";

const ErrorComponent = ({ inputText = "", incorrectIndex }) => {
  const inputLength = inputText.length;
  const visibleCharacters = 20; // Number of characters to show in the view

  const getTransformValue = (length, visibleChars, charWidth = 1.8) => {
    return Math.max(0, length - visibleChars) * charWidth;
  };

  return (
    <div className="text-3xl flex flex-col items-center mt-4">
      <div className="flex justify-center items-center bg-slate-100 p-4 rounded-lg shadow-md overflow-hidden w-full max-w-3xl">
        <div className="whitespace-nowrap overflow-hidden w-full max-w-full">
          <div
            className="flex items-center"
            style={{
              transform: `translateX(-${getTransformValue(
                inputLength,
                visibleCharacters
              )}rem)`,
            }}
          >
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
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
