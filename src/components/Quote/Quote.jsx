import { useEffect, useState } from "react";

export const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [dayQuote, setDayQuote] = useState("");
  const QuoteoftheDayAPI = "https://api.quotable.io/quotes/random";

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(QuoteoftheDayAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setDayQuote(json);
      } catch (error) {
        console.log("Error fetching daily quote data;", error);
      }
    };

    fetchQuote();
    if (dayQuote !== "") {
      console.log(dayQuote);
    }
  }, []);

  return (
    <div>
      <p>Quote</p>
      {dayQuote ? (
        <div>
          <p>{dayQuote[0].content}</p>
          <p>{dayQuote[0].author}</p>
        </div>
      ) : (
        <p>No quote available</p>
      )}
    </div>
  );
};
