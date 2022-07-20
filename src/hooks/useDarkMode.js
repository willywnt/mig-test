import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("dark-mode-enabled", 'light');

  const toggleTheme = () => {
    setTheme(curr => curr === 'light' ? 'dark' : 'light');
  }

  return [theme, toggleTheme];
}

export default useDarkMode;