import { useEffect } from "react";

export const WordoftheDay = () => {
  //my Rapid API key: bceeb35453msh0f33b002fc24565p1497cajsn96fde2ab4ab0

  useEffect(() => {
    const fetchWord = async () => {
      const url = "https://wordsapiv1.p.rapidapi.com/words/?random=true";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "bceeb35453msh0f33b002fc24565p1497cajsn96fde2ab4ab0",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWord();
  });

  return <div>WordoftheDay</div>;
};
