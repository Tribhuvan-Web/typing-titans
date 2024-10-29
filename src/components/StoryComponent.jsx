import React from "react";

const StoryComponent = ({ randomStory }) => {
  return (
    <>
      <div className="m-4 p-2 mt-4">
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 h-40vh rounded-lg">
          <div className="m-7 text-white flex justify-center items-center h-full">
            {!randomStory ? (
              <div className="m-7 text-orange-400 text-3xl flex justify-center items-center p-4">
                Click
                <span className="first-letter:text-green-600 p-5 rounded-lg">
                  Start
                </span>{" "}
                to begin
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-2xl p-16 h-full w-full overflow-auto mt-4">
                {randomStory.content}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryComponent;
