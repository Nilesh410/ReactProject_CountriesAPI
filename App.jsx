import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import { Outlet } from 'react-router'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'

const App = () => {
  
  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <ThemeContext.Provider value={[isDark,setIsDark]}>
        <Header />
        <Outlet />
    </ThemeContext.Provider>
  )
}

export default App
