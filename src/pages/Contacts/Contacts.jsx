import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.section}>
        <div className={css.container}>
            <h1 className={css.title_1}>Contacts</h1>
            <ul className={css.content_list}>
                <li className={css.content_list_item}>
                    <h2 className={css.title_2}>Location</h2>
                    <p>Odesa, Ukraine</p>
                </li>
                <li className={css.content_list_item}>
                    <h2 className={css.title_2}>Telegram / Viber</h2>
                    <p>
                        <a href="tel:+360985105570">+(360) 98 510 55 70</a>
                    </p>
                </li>
                <li className={css.content_list_item}>
                    <h2 className={css.title_2}>Email</h2>
                    <p>
                        <a href="mailto:02.04.5.art@gmail.com">02.04.5.art@gmail.com</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
  );
}
