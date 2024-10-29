import React from "react";

const ButtonComponent = ({ getRandomStory, startTimer, focusTextArea }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-3 rounded-lg">
        <button
          onClick={() => {
            getRandomStory();
            startTimer();
            focusTextArea();
          }}
          className="text-3xl bg-red-600 p-3 text-white rounded-lg"
        >
          Start
        </button>
      </div>
    </>
  );
};

export default ButtonComponent;
