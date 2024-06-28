import './BtnLiveDemo.css';

function BtnLiveDemo({ link }) {
	return (
		<>
			<a href={link} target='_blank' className='btn-outline' rel='noreferrer'>
				Live Demo
			</a>
		</>
	);
}

export default BtnLiveDemo;
