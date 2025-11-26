import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import { Outlet } from 'react-router'
import './App.css'

const App = () => {
  const [isDark, setIsDark]= useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
        <Header theme={[isDark, setIsDark]}/>
        <Outlet context={[isDark, setIsDark]}/>
       
    </>
  )
}

export default App
