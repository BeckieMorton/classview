import moment from "moment";
import { useState, useEffect } from "react";

export const OnThisDay = () => {
  const [dayFact, setDayFact] = useState("");
  const onthisdayAPI = "http://numbersapi.com/3/11/date?json";
  const monthNumber = moment().month() + 1;
  const dayNumber = moment().day();

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
    if (dayFact !== "") {
      console.log(dayFact);
    }
  }, []);

  return (
    <div>
      ON THIS DAY
      <p>{dayFact.text}</p>
    </div>
  );
};
