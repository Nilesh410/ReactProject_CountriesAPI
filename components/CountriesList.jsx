import countryData from "../countryData";
import CountryCard from "./CountryCard";
import React from "react";

const CountriesList = () => {
  console.log(countryData);
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
  const array = countryData.map((country) => {
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
  });
  return <div className="country-container">{array}</div>;
};

export default CountriesList;
