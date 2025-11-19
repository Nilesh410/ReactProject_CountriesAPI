import React from 'react'

const CountryCard = ({name,flag,population,region,capital}) => {
    // console.log(name);
  return (
    <a className="country-card" href={`/country.html?name=${name}`}><img src={flag} alt="flag" />
        <div className="country-text">
            <h3 className="capital">{name}</h3>
            <p><b>Population:</b>{population}</p>
            <p><b>Region:</b>{region}</p>
            <p><b>Capital:</b>{capital}</p>
        </div>
    </a>
  )
}

export default CountryCard