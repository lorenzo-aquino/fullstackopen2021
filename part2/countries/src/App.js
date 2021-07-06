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

  const findCountries = (event) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
      .then((response) => {
        setResults(response.data);
      });
  };

  const showCountry = (event) => {
    const country = event.target.id;
    const countryResult = [results[country]];
    setResults(countryResult);
  };
  return (
    <>
      <div>
        find countries <input onChange={findCountries} />
      </div>
      <Result results={results} handleClick={showCountry} />
    </>
  );
};

export default App;
