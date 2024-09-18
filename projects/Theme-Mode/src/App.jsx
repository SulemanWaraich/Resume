import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from './components/Nav'
import Section from './components/Section';
import Pictures from "./components/Pictures";
import { ThemeProvider } from "./contexts/theme";
import sun from './Images/sun.png'
import moon from './Images/moon.png'
import styles from './components/Nav.module.css';


function App() {
  const [themeMode, setThemeMode] = useState('light-theme');

  function lightMode()
  {
    setThemeMode('light-theme');
  }

  function darkMode()
  {
    setThemeMode('dark-theme');
  }

  useEffect(()=>{
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(themeMode);

  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
    <div className={styles.hero}>
      <Nav></Nav>
      <Section></Section>
      <Pictures></Pictures>   
    </div>
    </ThemeProvider>
  );
}

export default App;