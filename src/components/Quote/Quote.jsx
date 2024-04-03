import { useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);

      const QuoteoftheDayAPI = "https://api.quotable.io/quotes/random";

      try {
        const response = await fetch(QuoteoftheDayAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setDayQuote(json);
        localStorage.setItem("storedQuote", JSON.stringify(json));
        localStorage.setItem("lastFetchTimestamp", new Date().getTime());
      } catch (error) {
        console.log("Error fetching daily quote data;", error);
      } finally {
        setLoading(false);
      }
    };

    const lastFetchTimestamp = localStorage.getItem("lastFetchTimestamp");
    const currentTime = new Date().getTime();
    const twelveHours = 12 * 60 * 60 * 1000; // milliseconds in 12 hours

    if (
      !lastFetchTimestamp ||
      currentTime - lastFetchTimestamp >= twelveHours
    ) {
      fetchQuote();
    } else {
      const storedQuote = localStorage.getItem("storedQuote");
      if (storedQuote) {
        setQuote(JSON.parse(storedQuote));
      }
    }
  }, []);

  return (
    <div>
      {quote ? (
        <div>
          <p>{quote[0].content}</p>
          <p>{quote[0].author}</p>
        </div>
      ) : (
        <p>No quote available</p>
      )}
    </div>
  );
};

// import { useEffect, useState } from "react";

// export const Quote = () => {
//   const [dayQuote, setDayQuote] = useState("");
//   const QuoteoftheDayAPI = "https://api.quotable.io/quotes/random";

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         const response = await fetch(QuoteoftheDayAPI);
//         if (!response.ok) {
//           throw new Error("Network Response Error");
//         }
//         const json = await response.json();
//         setDayQuote(json);
//       } catch (error) {
//         console.log("Error fetching daily quote data;", error);
//       }
//     };

//     fetchQuote();
//     if (dayQuote !== "") {
//       console.log(dayQuote);
//     }
//   }, []);

//   return (
//     <div>
//       {dayQuote ? (
//         <div>
//           <p>{dayQuote[0].content}</p>
//           <p>{dayQuote[0].author}</p>
//         </div>
//       ) : (
//         <p>No quote available</p>
//       )}
//     </div>
//   );
// };
