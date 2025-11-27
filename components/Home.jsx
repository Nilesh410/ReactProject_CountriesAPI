import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

import { ThemeContext } from '../contexts/ThemeContext'
import { useWindowSize } from '../hooks/useWindowSize'
import { useTheme } from '../hooks/useTheme'
const Home = () => {
  const [query, setQuery] = useState('');
  // const [isDark]=useContext(ThemeContext)
   const [isDark]=useTheme()
  // const [width,setWidth]=useState(window.innerWidth)
  // const [windowSize,setWindowSize]=useState({width:window.innerWidth, height:window.innerHeight})
  // useEffect(()=>{
  //     window.addEventListener('resize',()=>{
  //       // console.log('Hi')
  //       console.log(window.innerWidth)
  //       setWindowSize({
  //           width:window.innerWidth,
  //           height:window.innerHeight
  //       })
  //     })
  // },[])
  // const windowSize=useWindowSize()
  return (
     <main className={`${isDark?'dark':''}`}>
            <div className='search-filter-container'>
                <SearchBar setQuery={setQuery}/>
                <SelectMenu setQuery={setQuery}/>
            </div>
            {/* <h1 style={{textAlign:'center'}}>{windowSize.width}X{windowSize.height}</h1> */}
            <CountriesList query={query}/>
            
        </main>
  )
}

export default Home