import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  transition: opacity 0.2s ease-in;

  &.active {
    position: relative;
  }
  &.active::before {
    content: '';

    position: absolute;
    left: 0;
    top: 100%;

    display: block;
    height: 2px;
    width: 100%;
    background-color: #5C62EC;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export default function NavBar() {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <nav className={css.header_nav}>
          <NavLink to="/" className={css.logo}>
            <strong>xrsQugi</strong>
          </NavLink>
          <ul className={css.nav_list}>
            <li className={css.nav_list_item}>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li className={css.nav_list_item}>
              <StyledLink to="/projects">Projects</StyledLink>
            </li>
            <li className={css.nav_list_item}>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
