import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutlet, useOutletContext } from 'react-router'

const Home = () => {
  const [query, setQuery] = useState('');
  const [isDark]=useOutletContext()
  console.log(isDark)
  return (
     <main className={`${isDark?'dark':''}`}>
            <div className='search-filter-container'>
                <SearchBar setQuery={setQuery}/>
                <SelectMenu/>
            </div>
            <CountriesList query={query}/>
            
        </main>
  )
}

export default Home