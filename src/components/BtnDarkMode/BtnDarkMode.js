import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import sun from './sun.svg';
import moon from './moon.svg';
import './BtnDarkMode.css';

function BtnDarkMode() {
	// const [darkMode, setDarkMode] = useState('light');
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
	const btnNormal = 'dark-mode-btn';
	const btnActive = 'dark-mode-btn dark-mode-btn--active';

	useEffect(() => {
		if (darkMode === 'dark') {
			// console.log(btnRef);
			// console.log(btnRef.current);
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

	const toggleBtnClass = darkMode === 'dark' ? btnActive : btnNormal;

	return (
		<button className={toggleBtnClass} onClick={toggleDarkMode}>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	);
}

export default BtnDarkMode;
