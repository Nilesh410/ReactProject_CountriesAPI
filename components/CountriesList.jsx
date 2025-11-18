import countryData from "../countryData";
import CountryCard from "./CountryCard";
import React from 'react'

const CountriesList = () => {
    
    const arrays=countryData.map((country)=>{
        return <CountryCard name={country.name.common}/>
    })
    
  return (
    <div className="country-container">
      
        <CountryCard /> 
        {/* <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard /> */}
    </div>
  )
}

export default CountriesList