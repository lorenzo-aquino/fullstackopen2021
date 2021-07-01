import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ol>
        {country.languages.map((language) => (
          <li id={language.iso639_1}>{language.name}</li>
        ))}
      </ol>
      <img width="150" src={country.flag} alt="country flag" />
    </div>
  );
};

export default Country;
