import React from "react";

const CustomAlert = ({ cpm, wpm, average, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center p-4 m-4">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg text-center w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Time's Up!</h2>
        <p className="text-lg mb-4 tracking-wide">
          Characters per minute : {cpm}
        </p>
        <p className="text-lg mb-4 tracking-wide">Words per minute : {wpm}</p>
        <p className="text-lg mb-6 tracking-wide">Average speed: {average}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg text-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
