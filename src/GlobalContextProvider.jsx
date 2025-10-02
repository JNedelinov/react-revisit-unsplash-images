import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from './custom';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = (props) => {
  const { children } = props;
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchVal, setSearchVal] = useState('cat');

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const toggleDarkTheme = useCallback(
    (theme) => setIsDarkTheme(theme),
    [isDarkTheme]
  );

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchVal,
        setSearchVal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
