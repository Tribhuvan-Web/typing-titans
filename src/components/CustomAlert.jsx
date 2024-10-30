import React from "react";

const CustomAlert = ({ cpm, wpm, average, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Time's Up!</h2>
        <p className="text-lg mb-2">CPM: {cpm}</p>
        <p className="text-lg mb-2">WPM: {wpm}</p>
        <p className="text-lg mb-4">Average: {average}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
