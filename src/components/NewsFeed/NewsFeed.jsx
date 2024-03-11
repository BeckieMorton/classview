import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

export const NewsFeed = () => {
  const [firstNews, setFirstNews] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const parser = new Parser();
        const feed = await parser.parseURL(
          "https://www.theguardian.com/international/rss"
        );
        if (feed.items && feed.items.length > 0) {
          // Set the first news item
          setFirstNews(feed.items[0]);
        }
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };

    fetchFeed();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Latest News</h1>
      {firstNews && (
        <div>
          <h2>{firstNews.title}</h2>
          <p>{firstNews.contentSnippet}</p>
          <a href={firstNews.link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      )}
    </div>
  );
};
