import React, { useState, useEffect } from "react";
import Result from "./components/Result";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setResults(response.data);
    });
  }, []);

  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState({});

  const findCountries = (event) => {
    if (event.target.value !== "") {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
        .then((response) => {
          setResults(response.data);
          if (response.data.length === 1) {
            getCountryWeather(response.data[0].capital);
          }
        });
    }
  };

  const showCountry = (event) => {
    const country = event.target.id;
    const countryResult = [results[country]];
    getCountryWeather(countryResult.capital);
    setResults(countryResult);
  };

  const getCountryWeather = (capital) => {
    const requestURL = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`;
    axios.get(requestURL).then((response) => {
      console.log("getCountryWeather called for ", capital, response.data);
      setWeather(response.data);
    });
  };

  return (
    <>
      <div>
        find countries <input onChange={findCountries} />
      </div>
      <Result results={results} handleClick={showCountry} weather={weather} />
    </>
  );
};

export default App;
