import React, { useEffect, useState } from "react";
import FooterComponent from "./components/UnfunctionalComponent/FooterComponent";
import NavbarComponents from "./components/UnfunctionalComponent/NavbarComponents";
import MainComponents from "./components/MainComponents";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view if screen width is less than or equal to 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <NavbarComponents />
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl text-center mt-3">
              Please open in desktop to test your typing speed
            </h1>
          </div>
        </>
      ) : (
        <>
          <NavbarComponents />
          <MainComponents />
          <FooterComponent />
        </>
      )}
    </>
  );
}

export default App;
