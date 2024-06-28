import './BtnGitHub.css';
import gitHubIcon from './gitHub-black.svg';

function BtnGitHub({ link }) {
	return (
		<a href={link} target='_blank' className='btn-outline' rel='noreferrer'>
			<img src={gitHubIcon} alt='' />
			GitHub
		</a>
	);
}

export default BtnGitHub;
