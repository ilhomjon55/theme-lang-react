import './Footer.css';

import { ThemeContext } from '../../ThemeContext';
import { useContext } from 'react';

function Footer() {
	const { theme } = useContext(ThemeContext);
	const { lang, setLang } = useContext(ThemeContext);
	return (
		<>
			<footer className={`bg-${theme} p-5 mb-auto`}>
				<div className='container'>
					<h2 className={`h1 text-${theme === 'dark' ? 'light' : 'dark'}`}>
						{lang === 'en' ? 'I am Footer!' : 'Men Quyi qismman'}
					</h2>

					<div className='form-group'>
						<select
							className='form-control w-50'
							name='theme_choice'
							defaultValue={lang}
							onChange={(evt) => {
								setLang(evt.target.value);
							}}>
							<option value='en'>English</option>
							<option value='uz'>O'zbek</option>
						</select>
					</div>

					<p
						className={`ml-auto d-inline-block text-${
							theme === 'dark' ? 'light' : 'dark'
						}`}>
						&copy; Copyright Coding_Show
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
