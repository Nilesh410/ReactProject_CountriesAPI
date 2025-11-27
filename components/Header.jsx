import React, { useContext, useState } from 'react'
// import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

const Header = () => {
 
  // const [isDark, setIsDark]= useContext(ThemeContext)
  const [isDark,setIsDark]=useTheme()
  return (
    <header className={`header-container ${isDark?'dark':''}`}>
        <div className="header-content">
            <h2 className="title"><a href="/">where in the world?</a></h2>
            <p className="theme-changer" onClick={()=>{
              
              setIsDark(!isDark)
              localStorage.setItem('isDarkMode',!isDark)

            }}><i className={`fa-regular fa-${isDark?'sun':'moon'}`}></i>&nbsp;&nbsp;{isDark?'Light':'Dark'} Mode</p>
        </div>
    </header>
  )
}

export default Header