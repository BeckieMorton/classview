export const NewsFeed = () => {
  const RSS_URL = `https://feeds.bbci.co.uk/news/world/rss.xml`;

  fetch(RSS_URL)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => console.log(data));

  return <div>NewsFeed</div>;
};
