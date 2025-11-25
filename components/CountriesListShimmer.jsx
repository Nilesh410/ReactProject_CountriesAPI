import React from 'react'
import './CountriesListShimmer.css'

const CountriesListShimmer = () => {

  return (
    <div className="country-container shimmer-container">
         {/* {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>
      })} */}

      {
        Array.from({length:10}).map((ele,i)=>{return <div key={i} className='country-card shimmer-card'></div>})
      }
        
    </div>
  )
}

export default CountriesListShimmer