import React from "react";

const StoryComponent = ({ randomStory }) => {
  return (
    <>
      <div className="p-4">
        <div className="bg-slate-800 h-35vh sm:h-80vh md:h-full rounded-lg flex justify-center items-center">
          <div className="m-7 text-white h-full w-full flex flex-col items-center justify-center">
            {!randomStory ? (
              <div className="text-center m-7 text-white text-3xl flex flex-col justify-center items-center p-4">
                Click start to begin
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-lg p-6 h-full w-full overflow-auto">
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
