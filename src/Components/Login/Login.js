import './Login.css';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

function Login() {
	const { theme } = useContext(ThemeContext);
	const { lang } = useContext(ThemeContext);
	return (
		<main className='my-4'>
			<div className='container'>
				<form
					className={`login__form p-3 bg-${theme} col-12 col-sm-6 rounded-lg`}
					action='#'
					method='POST'>
					<h2 className={`h1 text-${theme === 'dark' ? 'light' : 'dark'}`}>
						{lang === 'en' ? 'I am Form!' : 'Men Formman'}
					</h2>
					<div className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder={lang === 'en' ? 'Name' : 'Ism, Familiya'}
							name='name'
							required
						/>
					</div>
					<div className='form-group'>
						<input
							className='form-control'
							type='email'
							placeholder='Email'
							name='email'
							required
						/>
					</div>
					<div className='form-group'>
						<input
							className='form-control'
							type='password'
							placeholder={lang === 'en' ? 'Password' : 'Parolingiz'}
							name='password'
							required
						/>
					</div>
				</form>
			</div>
		</main>
	);
}

export default Login;
