import './Footer.css';

import vk from './../../img/icons/vk.svg';
import twitter from './../../img/icons/twitter.svg';
import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';
import telegram from './../../img/icons/telegram.svg';

function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a
								href='https://vk.com/fineralla'
								target='_blank'
								rel='noreferrer'
							>
								<img src={vk} alt='Link' />
							</a>
						</li>
						{/* <li className='social__item'>
							<a href='#!'>
								<img src={instagram} alt='Link' />
							</a>
						</li> */}
						<li className='social__item'>
							<a href='https://t.me/finkanoob' target='_blank' rel='noreferrer'>
								<img src={telegram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://github.com/Fineralla'
								target='_blank'
								rel='noreferrer'
							>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
						{/* <li className='social__item'>
							<a href='#!'>
								<img src={linkedIn} alt='Link' />
							</a>
						</li> */}
					</ul>
					{/* <div className='copyright'>
						<p>© 2024 fineralla</p>
					</div> */}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
