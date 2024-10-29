import React, { useEffect, useRef, useState } from "react";
import InputText from "./InputText";
import DataComponent from "./MetricsDisplay";
import StoryComponent from "./StoryComponent";
import ButtonComponent from "./ButtonComponent";

const MainComponents = () => {
  const [stories, setStories] = useState([]);
  const [randomStory, setRandomStory] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [input, setInput] = useState("");

  const textAreaRef = useRef(null);
  const [accuracy, setAccuracy] = useState(0);

  let startTime;
  let intervalId; // To store the interval ID
  let count = 0;
  let wordCount = 0;

  function startTimer() {
    if (count > 0) {
      startTime = new Date();
      intervalId = setInterval(() => {
        setTimer(getTimerTime());
      }, 1000);
    } else {
      startTime = new Date();
      intervalId = setInterval(() => {
        setTimer(getTimerTime());
      }, 1000);
    }
  }

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
    return 1;
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

  function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
  }

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/random.json");
        const result = await response.json();
        setStories(result.stories);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    };

    fetchStories();
    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
    };
  }, []);

  const getRandomStory = () => {
    if (stories.length > 0) {
      const randomIndex = getRandomInt(0, stories.length - 1);
      setRandomStory(stories[randomIndex]);
    }
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <DataComponent
        cpm={!calculateCPM() ? 0 : calculateCPM()}
        wpm={!calculateWPM() ? 0 : calculateWPM()}
        average={!calculateAverage() ? 0 : calculateAverage()}
        correctCount={correctCount}
        correctWordCount={correctWordCount}
        timer={timer}
      />
      <StoryComponent randomStory={randomStory} />
      <hr />
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
