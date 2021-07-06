import React from "react";
import Country from "./Country";
import Weather from "./Weather";

const Result = ({ results, handleClick, weather }) => {
  return results.length > 10 ? (
    <div>Too many matches, specify another filter</div>
  ) : results.length !== 1 ? (
    <ul>
      {results.map((result, index) => (
        <li key={result.alpha3Code}>
          {result.name}
          <button id={index} onClick={handleClick}>
            show
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <>
      <Country country={results[0]} />
      <Weather weather={weather} />
    </>
  );
};
export default Result;
