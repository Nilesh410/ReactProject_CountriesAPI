// import countryData from "../countryData";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";


const CountriesList = ({query}) => {
  const [countryData,setcountryData]=useState([])
  const [count, setCount]=useState(0)
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
  // if(countryData.length===0)
  // {
    
  // }
  useEffect(()=>{
    console.log("API Fetch");
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,languages,currencies,population,flags,timezones,area")
    .then(res=>res.json())
    .then((data)=>{
        setcountryData(data)
    })
   
  },[])
  //  useEffect(()=>{
  //   console.log("Hi");
  // },[count])
  if (!countryData.length) {
    return <CountriesListShimmer />
  }
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Counter</button> */}
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
