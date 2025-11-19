import countryData from "../countryData";
import CountryCard from "./CountryCard";
import React, { useState } from "react";

const CountriesList = ({query}) => {
  // const [query, setQuery] = useState('');
  // console.log(countryData);
  // const array=[
  //     <CountryCard />,
  //     <CountryCard />,
  //     <CountryCard />,
  //     <CountryCard />,
  //     <CountryCard />,
  // ]
  // const array=countryData.map((country)=>{
  //     console.log(country)
  //     return (<CountryCard  />)
  // })
  // const array=countryData.map((country)=>{
  //     return (<CountryCard name={country.name.common} />)
  // })
  // console.log(array);
  // const filteredCountries = countryData.filter((country) =>
  //   country.name.common.toLowerCase().includes("")
  // );
  // console.log(filteredCountries);

  return (
    <>
      {/* <input type="text" /> */}
      <div className="country-container">
        {countryData
          .filter((country) => country.name.common.toLowerCase().includes(query))
          .map((country) => {
            // console.log(country);
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital[0]}
              />
            );
          })}
      </div>
    </>
  );
};

export default CountriesList;
