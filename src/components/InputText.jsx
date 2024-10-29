import React from "react";

const InputText = ({ textAreaRef, input, handleInputChange, handlePaste }) => {
  return (
    <div>
      <div>
        <textarea
          ref={textAreaRef}
          autoComplete="off"
          name=""
          id=""
          className="bg-black text-white text-3xl min-w-full h-24 rounded-lg p-4"
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
            // if (e.key === "Backspace") {
            //   e.preventDefault();
            // }
          }}
          placeholder="Start typing...."
        ></textarea>
      </div>
      ;
    </div>
  );
};

export default InputText;