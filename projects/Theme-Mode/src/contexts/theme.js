import {useContext,createContext} from 'react';

export const ThemeContext = createContext({
  themeMode: 'light-theme',
  lightMode: ()=>{},
  darkMode: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider;

export const useThemeContext = () => {
  return useContext(ThemeContext);
}