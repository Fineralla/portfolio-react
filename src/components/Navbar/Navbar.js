import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';
import './Navbar.css';

function Navbar() {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	const addStyleActiveLink = ({ isActive }) => {
		return isActive ? activeLink : normalLink;
	};

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>/artistClay</strong>
					</NavLink>
					<BtnDarkMode />
					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className={addStyleActiveLink}>
								Home
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='/projects' className={addStyleActiveLink}>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='/contacts' className={addStyleActiveLink}>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
