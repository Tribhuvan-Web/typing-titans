import React from "react";

const InputText = ({ textAreaRef, input, handleInputChange, handlePaste }) => {
  return (
    <>
      <div>
        <textarea
          ref={textAreaRef}
          autoComplete="off"
          name=""
          id=""
          className="bg-black text-white text-xl min-w-full h-10 rounded-lg p-1"
          value={input}
          onChange={handleInputChange}
          onPaste={handlePaste} // Disable paste
          onInput={(e) => {
            const { value } = e.target;
            e.target.value = value;
          }}
          onKeyDown={(e) => {
            const input = e.currentTarget.value;
            if (e.target.selectionStart !== input.length) {
              e.preventDefault();
            }
          }}
          placeholder="Start typing...."
        ></textarea>
      </div>
    </>
  );
};

export default InputText;
