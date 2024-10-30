import React, { useEffect, useRef, useState } from "react";
import InputText from "./InputText";
import MetricsDisplay from "./MetricsDisplay";
import StoryComponent from "./StoryComponent";
import ButtonComponent from "./ButtonComponent";

const MainComponents = () => {
  const [stories, setStories] = useState([]);
  const [randomStory, setRandomStory] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [input, setInput] = useState("");
  const [selectedTime, setSelectedTime] = useState("0"); // default 60 seconds
  const textAreaRef = useRef(null);
  const intervalId = useRef(null); // Use ref to store interval ID
  let startTime;

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
    return Math.floor((correctCount / timer) * 60);
  };

  const calculateWPM = () => {
    return Math.floor((correctWordCount / timer) * 60);
  };

  const calculateAverage = () => {
    const cpm = calculateCPM();
    const wpm = calculateWPM();
    return (cpm + wpm) / 2;
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    let newInput = [...value]; // Copy of the current input
    const newContent = [...randomStory.content]; // Copy of the story content
    let count = 0;
    let wordCount = 0;
    let correct = true; // Flag to stop further iterations if wrong key is pressed

    if (randomStory) {
      for (let i = 0; i < newInput.length; i++) {
        if (!correct) {
          newInput[i] = ""; // Clear the wrong character input
          continue;
        }
        if (newInput[i] === newContent[i]) {
          count++;
          if (newInput[i] === " ") {
            wordCount++;
          }
        } else {
          correct = false; // Stop further correct counting
          break;
        }
      }
    }

    setInput(newInput.join("")); // Update the state with the new input
    setCorrectCount(count);
    setCorrectWordCount(wordCount);
  };

  const startTimer = () => {
    clearInterval(intervalId.current); // Clear previous interval if exists
    setTimer(0); // Reset timer to 0
    startTime = new Date();
    intervalId.current = setInterval(() => {
      const elapsedTime = getTimerTime();
      setTimer(elapsedTime);
      // Check if the elapsed time matches the selected time
      if (elapsedTime >= selectedTime) {
        clearInterval(intervalId.current);
      }
    }, 1000);
  };

  const getTimerTime = () => {
    return Math.floor((new Date() - startTime) / 1000);
  };

  const handleSelectChange = (event) => {
    setSelectedTime(event.target.value);
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

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <MetricsDisplay
        cpm={!calculateCPM() ? 0 : calculateCPM()}
        wpm={!calculateWPM() ? 0 : calculateWPM()}
        average={!calculateAverage() ? 0 : calculateAverage()}
        correctCount={correctCount}
        correctWordCount={correctWordCount}
        timer={timer}
        selectedTime={selectedTime}
        handleSelectChange={handleSelectChange}
      />
      <StoryComponent randomStory={randomStory} />
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
      />
    </>
  );
};

export default MainComponents;
