import './Header.css';

function Header() {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Hi, my name is <em>Irina</em>
					</strong>
					<br />
					I'm Frontend Developer
				</h1>
				<div className='header__text'>
					<p>with passion for learning and creating &lt;3</p>
				</div>
				<a href='Levchenko_Irina.pdf' className='btn' download>
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;
