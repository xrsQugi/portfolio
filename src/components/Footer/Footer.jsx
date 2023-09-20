import css from './Footer.module.css';
import { BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";

export default function NavBar() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footer_wrapper}>
          <ul className={css.social}>
            <li className={css.social_item}>
              <a href="https://www.instagram.com/xrs_qugi/">
                <BsInstagram/>
              </a>
            </li>
            <li className={css.social_item}>
              <a href="https://t.me/xrs_qugi">
                <BsTelegram/>
              </a>
            </li>
            <li className={css.social_item}>
              <a href="https://github.com/xrsQugi">
                <BsGithub/>
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 xrsQugi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
