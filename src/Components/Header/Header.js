import { useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../ThemeContext';

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	const { lang } = useContext(ThemeContext);

	return (
		<>
			<header className={`p-5 bg-${theme}`}>
				<div className='container'>
					<h2 className={`h1 text-${theme === 'dark' ? 'light' : 'dark'}`}>
						{lang === 'en' ? 'I am Header!' : 'Men Yuqori qismman'}
					</h2>

					<select
						className='form-control w-50'
						name='theme_choice'
						defaultValue={theme}
						onChange={(evt) => {
							setTheme(evt.target.value);
						}}>
						<option value='light'>
							{lang === 'en' ? 'Light' : 'Yorqin'}
						</option>
						<option value='dark'>
							{lang === 'en' ? 'Dark' : 'Qora'}
						</option>
					</select>
				</div>
			</header>
		</>
	);
}

export default Header;
