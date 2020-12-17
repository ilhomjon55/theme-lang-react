import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		window.localStorage.getItem('theme') || 'dark'
	);

	useEffect(() => {
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	const [lang, setLang] = useState(
		window.localStorage.getItem('lang') || 'en'
	);

	useEffect(() => {
		window.localStorage.setItem('lang', lang);
	}, [lang]);

	return (
		<ThemeContext.Provider value={({ theme, setTheme }, { lang, setLang })}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
