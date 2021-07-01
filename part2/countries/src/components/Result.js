import React from "react";
import Country from "./Country";

const Result = ({ results }) => {
  return results.length > 10 ? (
    <div>Too many matches, specify another filter</div>
  ) : results.length !== 1 ? (
    <ul>
      {results.map((result) => (
        <li id={result.alpha3Code}>{result.name}</li>
      ))}
    </ul>
  ) : (
    <>
      <Country country={results[0]} />
    </>
  );
};
export default Result;
