import React, { useEffect } from "react";

const CountryDetail = () => {
  const countryName = new URLSearchParams(window.location.search).get("name");
  console.log(countryName);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  },[]);
  return (
    <main>
      <span className="back-button">
        <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
      </span>
      <div className="country-details">
        <img src={null} alt="flag" />
        <div className="country-details-container">
          <h1></h1>
          <div className="country-details-text">
            <p>
              <b>Native Name:</b>
              <span className="native-name"></span>
            </p>
            <p>
              <b>Population:</b>
              <span className="country-population"></span>
            </p>
            <p>
              <b>Region:</b>
              <span className="country-region"></span>
            </p>
            <p>
              <b>Sub Region:</b>
              <span className="country-sub-region"></span>
            </p>
            <p>
              <b>Capital:</b>
              <span className="country-capital"></span>
            </p>
            <p>
              <b>Top Level Domain:</b>
              <span className="country-tld"></span>
            </p>
            <p>
              <b>Currencies:</b>
              <span className="country-currencies"></span>
            </p>
            <p>
              <b>Languages:</b>
              <span className="country-languages"></span>
            </p>
          </div>
          <div className="border-countries">
            <b>Border Countries:</b>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
