import {useParams} from "react-router-dom";
import BtnGitHub from "components/BtnGitHub/BtnGitHub";
import {projects} from "../../helpers/projectsList"
import css from './ProjectDetails.module.css';

export default function Project() {
	const {id} = useParams();
	const project = projects[id];

    return (
		<div className={css.section}>
			<div className={css.container}>
				<div className={css.project_details}>
					<h1 className={css.title_1}>{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className={css.project_details_cover}
					/>

					<div className={css.project_details_desc}>
						<p>Skills: {project.skills}</p>
					</div>

					{project.gitHubLink && (
						<BtnGitHub link={project.gitHubLink} />
					)}
				</div>
			</div>
		</div>
	);
}
