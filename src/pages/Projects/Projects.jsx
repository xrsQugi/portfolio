import Project from '../../components/Project/Project';
import {projects} from "../../helpers/projectsList";
import css from './Projects.module.css';

const Projects = () => {
	return (
		<main className={css.section}>
			<div className={css.container}>
				<h2 className={css.title_1}>Projects</h2>
				<ul className={css.projects}>
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;