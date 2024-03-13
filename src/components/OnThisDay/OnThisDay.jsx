import moment from "moment";
import { useState, useEffect } from "react";

export const OnThisDay = () => {
  const [dayFact, setDayFact] = useState("");
  // On this day API = "http://numbersapi.com/3/11/date?json";
  const monthNumber = moment().month() + 1;
  const dayNumber = moment().date();

  const onthisdayAPI = `http://numbersapi.com/${monthNumber}/${dayNumber}/date?json`;

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(onthisdayAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setDayFact(json);
      } catch (error) {
        console.log("Error fetching daily quote data;", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      ON THIS DAY
      <p>{dayFact.text}</p>
    </div>
  );
};
