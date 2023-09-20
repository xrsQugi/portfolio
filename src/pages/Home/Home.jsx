import Hero from '../../components/Hero/Hero';
import css from './Home.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <div className={css.section}>
        <div className={css.container}>
          <h2 className={css.section_title}>Skills</h2>
          <ul className={css.content_list}>
            <li className={css.content_list_item}>
              <h2 className={css.title_2}>Frontend</h2>
              <p>
                JavaScript, ReactJS, HTML, CSS, SCSS, NPM, BootStrap,
                StyledComponents
              </p>
            </li>
            <li className={css.content_list_item}>
              <h2 className={css.title_2}>Design</h2>
              <p>Adobe Photoshop, Adobe Illustrator, Blender</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
