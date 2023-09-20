import css from './Hero.module.css';

export default function Hero() {
    return (
		<div className={css.hero}>
			<div className={css.hero_wrapper}>
				<h1 className={css.hero_title}>
					<span className={css.strong}>
						Hi, my name is <span className={css.bold_colorfull}>Artem</span>
					</span>
					<br />a frontend developer
				</h1>
				<div className={css.hero_text}>
					<p>with passion for discovering and creating.</p>
				</div>
				<a href="#!" className={css.btn}>
					Download CV
				</a>
			</div>
		</div>
	);
}