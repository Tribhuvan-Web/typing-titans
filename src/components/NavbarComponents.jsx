import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardOptionKey } from "react-icons/md";
import ".././App.css";
import { FaToggleOff } from "react-icons/fa";
import { IoToggleSharp } from "react-icons/io5";

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
    <div>
      <nav className="border-gray-200 bg-gray-500  dark:border-gray-300">
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
                <h3 className="text-3xl mr-2">Dark mode</h3>{" "}
                <FaToggleOff className="w-8 h-8" />{" "}
              </div>
            ) : (
              <div className="flex items-center">
                {" "}
                <h3 className="text-3xl mr-2">White mode</h3>{" "}
                <IoToggleSharp className="w-8 h-8" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponents;
