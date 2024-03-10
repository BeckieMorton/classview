import { useState, useEffect } from "react";

export const Weather = () => {
  const [userLat, setUserLat] = useState("");
  const [userLong, setUserLong] = useState("");
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9055fb4826563eac25a47e211073a627"; //Beckie's API key
  const [weatherForLocation, setWeatherForLocation] = useState({});

  useEffect(() => {
    //----get user location as latitude and longitude using Geolocation----//
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      //round lat and long to one decimal place
      var roundedLat = Math.round(latitude * 10) / 10;
      setUserLat(roundedLat);
      var roundedLong = Math.round(longitude * 10) / 10;
      setUserLong(roundedLong);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []);

  //----using users' lat and long fetch weather data from n----//
  console.log(userLat);
  const currentWeather = `${BASE_URL}?lat=${userLat}&lon=${userLong}&units=metric&APPID=${API_KEY}`;

  console.log(currentWeather);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(currentWeather);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setWeatherForLocation(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchWeather();
  }, [currentWeather]);

  console.log(weatherForLocation);
  const currentTemp = weatherForLocation.main
    ? weatherForLocation.main.temp
    : "N/A";
  const currentFeelsLike = weatherForLocation.main
    ? weatherForLocation.main.feels_like
    : "N/A";

  const weatherMain = weatherForLocation.weather
    ? weatherForLocation.weather[0].main
    : "N/A";

  const weatherDesc = weatherForLocation.weather
    ? weatherForLocation.weather[0].description
    : "N/A";

  //assign icon to weather to display

  let weatherImage = "";

  switch (weatherMain) {
    case "Clouds":
      weatherImage = "/assets/weather-clouds.png";
      break;
    case "Clear":
      weatherImage = "/assets/weather-clear.png";
      break;
    case "Snow":
      weatherImage = "/assets/weather-snow.png";
      break;
    case "Rain":
    case "Drizzle":
      weatherImage = "/assets/weather-rain.png";
      break;
    case "Thunderstorm":
      weatherImage = "/assets/weather-thunderstorm.png";
      break;
    default:
      //case for Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash, Squall, Tornado
      weatherImage = "/assets/weather-other.png";
      break;
  }

  return (
    <div>
      <p>Weather component here</p>
      <div>
        <img src={weatherImage} />
      </div>
      <h2>{currentTemp}°C</h2>
      <p>Feels like: {currentFeelsLike}</p>
      <h2>{weatherMain}</h2>
      <p>{weatherDesc}</p>
    </div>
  );
};
