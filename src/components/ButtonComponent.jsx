import React from "react";

const ButtonComponent = ({ getRandomStory, focusTextArea, disabled }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-3 rounded-lg">
        <button
          onClick={() => {
            if (!disabled || disabled) {
              getRandomStory();
              focusTextArea();
            }
          }}
          className={`text-2xl p-2 text-white rounded-lg ${
            disabled ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {disabled ? "Restart" : "Start"}
        </button>
      </div>
    </>
  );
};

export default ButtonComponent;
