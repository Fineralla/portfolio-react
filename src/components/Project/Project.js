import { NavLink } from 'react-router-dom';
import BtnGitHub from '../BtnGitHub/BtnGitHub';
import BtnLiveDemo from '../BtnLiveDemo/BtnLiveDemo';
import './Project.css';

function Project({ title, img, index, skills, gitHubLink, liveDemoLink }) {
	return (
		<li className='project'>
			<NavLink to={`/project-page/${index}`}>
				<h3 className='project__title'>{title}</h3>
				<img src={img} alt={title} className='project__img' />
				<p className='project__skills'>Stack: {skills}</p>
			</NavLink>
			<div className='project__btns'>
				<BtnGitHub link={gitHubLink} />
				<BtnLiveDemo link={liveDemoLink} />
			</div>
		</li>
	);
}

export default Project;
