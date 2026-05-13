import './BtnLiveDemo.css';
import liveIcon from './live.svg';

function BtnLiveDemo({ link }) {
	return (
		<a href={link} target='_blank' className='btn-outline' rel='noreferrer'>
			<img src={liveIcon} alt='' />
			Go To Figma
		</a>
	);
}

export default BtnLiveDemo;
