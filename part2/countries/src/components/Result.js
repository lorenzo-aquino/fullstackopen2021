import React from "react";
import Country from "./Country";

const Result = ({ results, handleClick }) => {
  console.log("Result", results, results.length);
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
    </>
  );
};
export default Result;
