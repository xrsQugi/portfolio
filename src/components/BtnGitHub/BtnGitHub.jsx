import { BsGithub } from "react-icons/bs";

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<BsGithub/>
			GitHub repo
		</a>
	);
};

export default BtnGitHub;