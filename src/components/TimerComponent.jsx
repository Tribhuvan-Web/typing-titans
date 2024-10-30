import React, { useEffect, useRef, useState } from "react";

const TimerComponent = ({ selectedTime, onTimeUp }) => {
  const [timer, setTimer] = useState(0);
  const intervalId = useRef(null);
  let startTime = useRef(null);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalId.current);
    };
  }, [selectedTime]);

  const startTimer = () => {
    clearInterval(intervalId.current);
    setTimer(0);
    startTime.current = new Date();
    intervalId.current = setInterval(() => {
      const elapsedTime = getTimerTime();
      setTimer(elapsedTime);
      if (elapsedTime >= selectedTime) {
        clearInterval(intervalId.current);
        onTimeUp();
      }
    }, 1000);
  };

  const getTimerTime = () => {
    return Math.floor((new Date() - startTime.current) / 1000);
  };

  return;
};

export default TimerComponent;
