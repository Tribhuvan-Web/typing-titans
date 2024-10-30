import React from "react";

const ButtonComponent = ({
  getRandomStory,
  startTimer,
  focusTextArea,
  disabled,
}) => {
  return (
    <>
      <div className="flex justify-center items-center mt-3 rounded-lg">
        <button
          onClick={() => {
            getRandomStory();
            startTimer();
            focusTextArea();
          }}
          disabled={disabled}
          className="text-2xl bg-blue-600 p-2 text-white rounded-lg"
        >
          Start
        </button>
      </div>
    </>
  );
};

export default ButtonComponent;
