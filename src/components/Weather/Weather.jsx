import { useState, useEffect } from "react";

import { CloudsAnimation } from "../Animations/CloudsAnimation";
import { ClearAnimation } from "../Animations/ClearAnimation";
import { SnowAnimation } from "../Animations/SnowAnimation";
import { ThunderstormAnimation } from "../Animations/ThunderstormAnimation";
import { RainAnimation } from "../Animations/RainAnimation";
import { OtherAnimation } from "../Animations/OtherAnimation";

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
      weatherImage = <CloudsAnimation />;
      break;
    case "Clear":
      weatherImage = <ClearAnimation />;
      break;
    case "Snow":
      weatherImage = <SnowAnimation />;
      break;
    case "Rain":
    case "Drizzle":
      weatherImage = <RainAnimation />;
      break;
    case "Thunderstorm":
      weatherImage = <ThunderstormAnimation />;
      break;
    default:
      //case for Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash, Squall, Tornado
      weatherImage = <OtherAnimation />;
      break;
  }

  return (
    <div>
      <div>{weatherImage}</div>
      <h2>{currentTemp}°C</h2>
      <p>Feels like: {currentFeelsLike}</p>
      <h2>{weatherDesc}</h2>
    </div>
  );
};
