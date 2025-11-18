import React from 'react'

const CountryCard = ({props}) => {
    console.log(props);
  return (
    <a className="country-card" href="/country.html?name=Syria"><img src="https://flagcdn.com/sy.svg" alt="flag" />
        <div className="country-text">
            <h3 className="capital">Syria</h3>
            <p><b>Population:</b>25620000</p>
            <p><b>Region:</b>Asia</p>
            <p><b>Capital:</b>Damascus</p>
        </div>
    </a>
  )
}

export default CountryCard