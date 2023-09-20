import { useLocation } from 'react-router-dom';
import Project from '../../components/Project/Project';
import {projects} from "../../helpers/projectsList";
import css from './Projects.module.css';

export default function Projects() {
	const location = useLocation();

	return (
		<main className={css.section}>
			<div className={css.container}>
				<h2 className={css.title_1}>Projects</h2>
				<ul className={css.projects}>
					{projects.map((project, index) => {
						return (
							<>
								<Project
									key={index}
									title={project.title}
									img={project.img}
									index={index}
									to={`${index}`}
									state={{ from: location }}
								/>
							</>
						);
					})}
				</ul>
			</div>
		</main>
	);
};
