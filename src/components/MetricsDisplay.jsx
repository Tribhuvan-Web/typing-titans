import React from "react";
import { FaClock } from "react-icons/fa";

const MetricsDisplay = ({
  correctCount,
  correctWordCount,
  timer,
  selectedTime,
  handleSelectChange,
}) => {
  return (
    <div className="flex flex-wrap justify-end space-x-1 text-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center bg-slate-600 p-2 rounded-lg shadow-md w-40">
        <p className="text-lg">Correct Chars: {correctCount}</p>
      </div>
      <div className="flex flex-col items-center bg-slate-600 p-2 rounded-lg shadow-md w-40">
        <p className="text-lg">Correct Words: {correctWordCount}</p>
      </div>
      <div className="flex justify-evenly items-center bg-slate-600 p-2 rounded-lg shadow-md w-40">
        <FaClock className="text-lg" />
        <p className="text-lg">{timer} &nbsp; /</p>
        <div className="flex fle">
          <select
            name="timer-select"
            id="timer-select"
            value={selectedTime}
            onChange={(e) => handleSelectChange(e)}
            className="bg-slate-600 text-white flex flex-col"
          >
            <option value="15" className="text-white bg-slate-600">
              15
            </option>
            <option value="30" className="text-white bg-slate-600">
              30
            </option>
            <option value="60" className="text-white bg-slate-600">
              60
            </option>
            <option value="90" className="text-white bg-slate-600">
              90
            </option>
            <option value="120" className="text-white bg-slate-600">
              120
            </option>
            <option value="300" className="text-white bg-slate-600">
              300
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
