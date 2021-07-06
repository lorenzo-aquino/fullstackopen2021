import React from "react";

const Weather = ({ weather }) => {
  return Object.keys(weather).length === 3 ? (
    <>
      <h3>Weather in {weather.location.name}</h3>
      <p>
        <b>temperature: </b>
        {weather.current.temperature} Celsius
      </p>
      <img src={weather.current.weather_icons[0]} alt="weather icon" />
      <p>
        <b>wind: </b>
        {weather.current.wind_speed} mph direction {weather.current.wind_dir}
      </p>
    </>
  ) : (
    <></>
  );
};

export default Weather;
