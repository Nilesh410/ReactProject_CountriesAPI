import React, { useEffect, useState } from "react";
import './CountryDetail.css'
import { Link, useParams } from "react-router";

const CountryDetail = () => {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  const params=useParams()
  console.log(params.country)
  const countryName=params.country

  const [countryData,setCountryData]=useState(null)
  const [notFound,setNotFound]=useState(false)
  
  console.log(countryData?.borders)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        
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
          flag:data.flags.svg,
          borders:[]
        })
        if(!data.borders)
        {
          data.borders=[]
        }
        Promise.all(data.borders.map((border)=>{
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then(res=>res.json())
              .then (([borderCountry])=>borderCountry.name.common)
        })).then((borders)=>{setCountryData((prevState)=>({...prevState,borders}))
      })
      }).catch((err)=>{setNotFound(true)})
  },[countryName])
  if(notFound)
  {
    return <div>Country Not Found </div>
  }
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
          {countryData.borders.length!==0 && <div className="border-countries">
            <b>Border Countries:</b> &nbsp;
            {countryData.borders.map((border)=><Link key={border} to={`/${border}`}>{border}</Link>)}
          </div>}
          
        </div>
      </div>
    </main>
    )
    
  );
};

export default CountryDetail;
