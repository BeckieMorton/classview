import React, { useState, useEffect } from "react";

import styles from "./TrueOrFalse.module.css";

export const TrueOrFalse = () => {
  //list of categories
  //https://opentdb.com/api_category.php
  //animal = category=27
  //geography = category = 22
  //general knowledge = 9
  //science and nature = 17

  //main page to generate api documentation
  //https://opentdb.com/api_config.php

  //EXAMPLE: this returns 10 t or f questions about animals
  //https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean

  const categoryArray = [27, 22, 9, 17];
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [torFQuestion, setTorFQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  //choose a random category for the question
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * categoryArray.length);
    const randomNum = categoryArray[randomIndex];
    setSelectedNumber(randomNum);
  }, [categoryArray]);

  //fetch question from api
  useEffect(() => {
    if (selectedNumber !== null && !loading) {
      setLoading(true);
      const TorFAPI = `https://opentdb.com/api.php?amount=1&category=${selectedNumber}&difficulty=easy&type=boolean`;

      const fetchQuestion = async () => {
        try {
          const response = await fetch(TorFAPI);
          if (!response.ok) {
            throw new Error("Network Response Error");
          }
          const json = await response.json();
          setTorFQuestion(json);
        } catch (error) {
          console.log("Error fetching daily quote data;", error);
        } finally {
          setLoading(false);
        }
      };

      fetchQuestion();
    }
  }, [selectedNumber]);

  console.log(torFQuestion.results[0]);

  const handleClick = () => {
    setDisplayAnswer(!displayAnswer);
  };

  return (
    <div>
      <p>True of false?</p>
      {torFQuestion.results[0].question}
      <p
        className={displayAnswer ? "styles.display" : "styles.hide"}
        onClick={() => handleClick()}
      >
        {displayAnswer ? (
          <p>see answer</p>
        ) : (
          <p> {torFQuestion.results[0].correct_answer}</p>
        )}
      </p>
    </div>
  );
};
