import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardOptionKey } from "react-icons/md";
import ".././App.css";
import { FaToggleOff } from "react-icons/fa";
import { IoToggleSharp } from "react-icons/io5";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

const NavbarComponents = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="">
      <nav className="border-gray-200 bg-gray-500  dark:border-gray-300 mySticky">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <MdOutlineKeyboardOptionKey color="white" size={30} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Typing Titan
            </span>
          </a>
          <div onClick={toggleTheme}>
            {!darkMode ? (
              <div className="flex items-center">
                {" "}
                <BsToggle2Off className="w-8 h-8" />{" "}
              </div>
            ) : (
              <div className="flex items-center">
                {" "}
                <BsToggle2On className="w-8 h-8" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponents;
