import React, { useEffect, useState } from "react";
import './CountryDetail.css'
import { useParams } from "react-router";

const CountryDetail = () => {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  const params=useParams()
  console.log(params.country)
  const countryName=params.country

  const [countryData,setCountryData]=useState(null)
  // console.log(countryName);
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          name:data.name.common,
          nativeName:Object.values(data.name.nativeName)[0].common,
          population:data.population.toLocaleString('en-IN'),
          region:data.region,
          subRegion:data.subregion,
          capital:data.capital[0],
          tld:data.tld[0],
          currencies:Object.values(data.currencies).map((currency)=>currency.name).join(', '),
          languages:Object.values(data.languages).join(', '),
          flag:data.flags.svg
        })
       
      });
  },[]);
  return (
    countryData===null ? 'loading....':(
      <main>
      <span className="back-button" onClick={()=>{
        history.back()
      }}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
      </span>
      <div className="country-details">
        <img src={countryData.flag} alt={`${countryData.name}flag`} />
        <div className="country-details-container">
          <h1>{countryData.name}</h1>
          <div className="country-details-text">
            <p>
              <b>Native Name:{countryData.nativeName}</b>
              <span className="native-name"></span>
            </p>
            <p>
              <b>Population:{countryData.population}</b>
              <span className="country-population"></span>
            </p>
            <p>
              <b>Region:{countryData.region}</b>
              <span className="country-region"></span>
            </p>
            <p>
              <b>Sub Region:{countryData.subRegion}</b>
              <span className="country-sub-region"></span>
            </p>
            <p>
              <b>Capital:{countryData.capital}</b>
              <span className="country-capital"></span>
            </p>
            <p>
              <b>Top Level Domain:{countryData.tld}</b>
              <span className="country-tld"></span>
            </p>
            <p>
              <b>Currencies:{countryData.currencies}</b>
              <span className="country-currencies"></span>
            </p>
            <p>
              <b>Languages:{countryData.languages}</b>
              <span className="country-languages"></span>
            </p>
          </div>
          <div className="border-countries">
            <b>Border Countries:</b>
          </div>
        </div>
      </div>
    </main>
    )
    
  );
};

export default CountryDetail;
