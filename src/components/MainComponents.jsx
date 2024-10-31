import React, { useEffect, useRef, useState } from "react";
import InputText from "./InputText";
import MetricsDisplay from "./MetricsDisplay";
import StoryComponent from "./UnfunctionalComponent/StoryComponent";
import ButtonComponent from "./ButtonComponent";
import ErrorComponent from "./ErrorComponent";
import CustomAlert from "./CustomAlert";

const MainComponents = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [input, setInput] = useState("");
  const [selectedTime, setSelectedTime] = useState("15");
  const [incorrectIndex, setIncorrectIndex] = useState(null);
  const [incorrectValue, setIncorrectValue] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isTiming, setIsTiming] = useState(false);
  const [stories, setStories] = useState([]);
  const [randomStory, setRandomStory] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [finalCPM, setFinalCPM] = useState(0);
  const [finalWPM, setFinalWPM] = useState(0);
  const [finalAvg, setFinalAvg] = useState(0);
  const intervalId = useRef(null);
  const textAreaRef = useRef(null);
  let startTime;

  const handleInputChange = (event) => {
    const { value } = event.target;
    let correctChars = 0;
    let errorIndex = null;
    let errorVal = null;
    let wordCount = 0;

    if (!isTiming) {
      setIsTiming(true);
      startTimer();
    }

    for (let i = 0; i < value.length; i++) {
      if (value[i] === randomStory.content[i]) {
        correctChars++;
        if (value[i] === " ") {
          wordCount++;
        }
      } else {
        errorVal = randomStory.current.content[i];
        errorIndex = i;
        break;
      }
    }
    setInput(value);
    setCorrectCount(correctChars);
    setCorrectWordCount(wordCount);
    setIncorrectValue(errorVal);
    setIncorrectIndex(errorIndex);
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const calculateAverage = () => {
    const cpm = calculateCPM();
    const wpm = calculateWPM();
    return (cpm + wpm) / 2;
  };

  const startTimer = () => {
    clearInterval(intervalId.current);
    setTimer(0);
    setButtonDisabled(true);
    startTime = new Date();
    intervalId.current = setInterval(() => {
      const elapsedTime = getTimerTime();
      setTimer(elapsedTime);
      if (elapsedTime == selectedTime) {
        clearInterval(intervalId.current);
        setIsTiming(false);
        setButtonDisabled(false);

        const cpm = calculateCPM();
        const wpm = calculateWPM();
        const avg = calculateAverage();

        setFinalCPM(cpm);
        setFinalWPM(wpm);
        setFinalAvg(avg);
        setShowAlert(true);
      }
    }, 1000);
  };

  const getTimerTime = () => {
    return Math.floor((new Date() - startTime) / 1000);
  };

  const handleSelectChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setTimer(0);
    setCorrectCount(0);
    setCorrectWordCount(0);
    setInput(""); // Clear the input text when closing the alert
  };

  const focusTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    alert("No cheating");
  };

  const calculateCPM = () => {
    if (timer > 0) {
      return Math.floor((correctCount / timer) * 60);
    }
    return 0;
  };

  const calculateWPM = () => {
    if (timer > 0) {
      return Math.floor((correctWordCount / timer) * 60);
    }
    return 0;
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        setStories(result.stories);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchStories();
    return () => {
      clearInterval(intervalId.current); // Cleanup interval on unmount
    };
  }, []);

  const getRandomStory = () => {
    if (stories.length > 0) {
      const randomIndex = getRandomInt(0, stories.length - 1);
      setRandomStory(stories[randomIndex]);
    }
  };

  return (
    <>
      {showAlert && (
        <CustomAlert
          cpm={finalCPM}
          wpm={finalWPM}
          average={finalAvg}
          onClose={handleCloseAlert}
        />
      )}
      <MetricsDisplay
        correctCount={correctCount}
        correctWordCount={correctWordCount}
        timer={timer}
        selectedTime={selectedTime}
        handleSelectChange={handleSelectChange}
      />
      <StoryComponent randomStory={randomStory} />
      <ErrorComponent
        inputText={input}
        incorrectIndex={incorrectIndex}
        incorrectValue={incorrectValue}
      />
      <div className="mt-3 p-4">
        <InputText
          textAreaRef={textAreaRef}
          input={input}
          handleInputChange={handleInputChange}
          handlePaste={handlePaste}
        />
      </div>
      <ButtonComponent
        getRandomStory={getRandomStory}
        startTimer={startTimer}
        focusTextArea={focusTextArea}
        disabled={buttonDisabled}
      />
    </>
  );
};

export default MainComponents;
