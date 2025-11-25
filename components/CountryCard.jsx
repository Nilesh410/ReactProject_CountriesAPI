import React from 'react'
import { Link } from 'react-router'

const CountryCard = ({name,flag,population,region,capital,data}) => {
    // console.log(name);
  return (
    <Link className="country-card" to={`${name}`} state={{data}}><img src={flag} alt="flag" />
        <div className="country-text">
            <h3 className="capital">{name}</h3>
            <p><b>Population:</b>{population}</p>
            <p><b>Region:</b>{region}</p>
            <p><b>Capital:</b>{capital}</p>
        </div>
    </Link>
  )
}

export default CountryCard