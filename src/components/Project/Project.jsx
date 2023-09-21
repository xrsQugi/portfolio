import { NavLink } from 'react-router-dom';
import css from './Project.module.css';

export default function Project({ title, img, index }) {
	return (
		<NavLink to={`/projects/${index}`}>
			<li className={css.project}>
				<img src={img} alt={title} className={css.project_img} />
				<h3 className={css.project_title}>{title}</h3>
			</li>
		</NavLink>
	);
};

