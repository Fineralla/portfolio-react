import { projects } from '../helpers/projectsList';
import Project from '../components/Project/Project';

function Projects() {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
								skills={project.skills}
								gitHubLink={project.gitHubLink}
								liveDemoLink={project.liveDemoLink}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
}

export default Projects;
