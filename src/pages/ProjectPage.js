import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';
import BtnGitHub from '../components/BtnGitHub/BtnGitHub';
import BtnLiveDemo from '../components/BtnLiveDemo/BtnLiveDemo';

function ProjectPage() {
	const { id } = useParams();
	const project = projects[id];
	// console.log(project);
	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>
					<img
						src={project.imgBig}
						alt='{project.title}'
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>
					<div className='project-details__btns'>
						<BtnGitHub link={project.gitHubLink} />
						<BtnLiveDemo link={project.liveDemoLink} />
					</div>
				</div>
			</div>
		</main>
	);
}

export default ProjectPage;
