import React from "react";

const MetricsDisplay = ({
  cpm,
  wpm,
  average,
  correctCount,
  correctWordCount,
  timer,
}) => {
  return (
    <div className="flex justify-between mt-4 p-4 mb-2">
      <div className="firstComponent">
        <button className="bg-green-300 text-black p-6 text-2xl mb-4 rounded-lg">
          {cpm} / cpm
        </button>
      </div>
      <div className="firstComponent">
        <button className="bg-green-300 text-black p-6 text-2xl mb-4 rounded-lg">
          {wpm} / wpm
        </button>
      </div>
      <div className="firstComponent">
        <button className="bg-green-300 text-black p-6 text-2xl mb-4 rounded-lg">
          Average {average}
        </button>
      </div>
      <div className="firstComponent">
        <button className="bg-green-300 text-black p-6 text-2xl mb-4 rounded-lg">
          Correct characters :{correctCount}
        </button>
      </div>
      <div className="firstComponent">
        <button className="bg-green-300 text-black p-6 text-2xl mb-4 rounded-lg">
          Correct Word :{correctWordCount}
        </button>
      </div>
      <div className="firstComponent bg-green-300 text-2xl rounded-lg flex justify-center items-center p-8 h-8">
        <span className="text-black mb-4">Time &nbsp;: &nbsp;</span>
        <span className="text-black mb-4">{timer}</span>
      </div>
    </div>
  );
};

export default MetricsDisplay;
