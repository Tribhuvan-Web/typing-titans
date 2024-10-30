import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full mt-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
          <p>&copy; 2024 Typing Titans. All rights reserved.</p>
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <a href="/about" className="text-gray-400 hover:text-gray-200 mx-2">
            About Us
          </a>
          <a href="/contact" className="text-gray-400 hover:text-gray-200 mx-2">
            Contact
          </a>
          <a href="/terms" className="text-gray-400 hover:text-gray-200 mx-2">
            Terms of Service
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-gray-200 mx-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
