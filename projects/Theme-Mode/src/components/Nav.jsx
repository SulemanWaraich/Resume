import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import logo from "../Images/logo.png";
import moon from "../Images/moon.png";
import sun from "../Images/sun.png";
import { useThemeContext } from "../contexts/theme";

function Nav() {
  const {themeMode,lightMode, darkMode } = useThemeContext();
  const [themeIcon,setThemeIcon] = useState(moon)
  
  useEffect(() => {
    // Synchronize theme icon with the current theme
    if (themeMode === 'dark-theme') {
      setThemeIcon(sun);
    } else {
      setThemeIcon(moon);
    }
  }, [themeMode]);
  
  const changeTheme = () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      darkMode();
      setThemeIcon(sun);
      localStorage.setItem('theme', 'dark');
    } else {
      lightMode();
      setThemeIcon(moon)
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <nav>
        <img src={logo} className={styles.logo} />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Hire me</a>
          </li>
        </ul>
        <img
          src={themeIcon}
          className={styles.moon}
          id="theme"
          onClick={changeTheme}
        />
      </nav>
    </>
  );
}

export default Nav;
