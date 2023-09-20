import { BsGithub } from "react-icons/bs";

import css from './BtnGitHub.module.css';
const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className={css.btn_outline}>
			<BsGithub/>
			GitHub repo
		</a>
	);
};

export default BtnGitHub;