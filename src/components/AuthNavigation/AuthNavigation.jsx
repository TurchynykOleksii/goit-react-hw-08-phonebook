import { NavLink } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import { HiUserAdd } from 'react-icons/hi';
import css from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <div className={css.auth}>
      <NavLink className={css.link} to="/register">
        <HiUserAdd />
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        <HiUser />
        Log In
      </NavLink>
    </div>
  );
};
