import { useState, useEffect } from "react";

export const Weather = () => {
  const [userLat, setUserLat] = useState("");
  const [userLong, setUserLong] = useState("");

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

    //----using users' lat and long fetch weather data from n----//
  }, []);

  return (
    <div>
      <p>Weather component here</p>
      <p>{userLong}</p>
      <p>{userLat}</p>
    </div>
  );
};
