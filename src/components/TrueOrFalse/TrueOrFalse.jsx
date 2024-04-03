import React, { useState, useEffect } from "react";
import styles from "./TrueOrFalse.module.css";

export const TrueOrFalse = () => {
  const categoryArray = [27, 22, 9, 17];
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [torFQuestion, setTorFQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      const randomIndex = Math.floor(Math.random() * categoryArray.length);
      const randomNum = categoryArray[randomIndex];

      const TorFAPI = `https://opentdb.com/api.php?amount=1&category=${randomNum}&difficulty=easy&type=boolean`;

      try {
        const response = await fetch(TorFAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setTorFQuestion(json);
        localStorage.setItem("storedQuestion", JSON.stringify(json));
        localStorage.setItem("lastFetchTimestamp", new Date().getTime());
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const lastFetchTime = localStorage.getItem("lastFetchTime");
    const currentTime = new Date().getTime();
    const twelveHours = 12 * 60 * 60 * 1000; // milliseconds in 12 hours

    if (!lastFetchTime || currentTime - lastFetchTime >= twelveHours) {
      fetchQuestion();
    } else {
      const storedQuestion = localStorage.getItem("storedQuestion");
      console.log(storedQuestion);
      if (storedQuestion) {
        setTorFQuestion(JSON.parse(storedQuestion));
      }
    }
  }, []);

  console.log(`this is in the question1`, torFQuestion);

  const handleClick = () => {
    setDisplayAnswer(!displayAnswer);
  };

  return torFQuestion ? (
    <>
      <div>
        <p>True or false?</p>
        <p>{torFQuestion.results[0].question}</p>
        <p
          className={displayAnswer ? styles.display : styles.hide}
          onClick={handleClick}
        >
          {displayAnswer ? (
            <p>see answer</p>
          ) : (
            <p>{torFQuestion.results[0].correct_answer}</p>
          )}
        </p>
      </div>
      <div></div>
    </>
  ) : null;
};
